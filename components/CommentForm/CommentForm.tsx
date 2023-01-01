/* eslint-disable react/no-unknown-property */
import { FC, Ref, useEffect, useRef, useState } from "react";
import CSSModules from "react-css-modules";
import styles from "./CommentForm.module.css";
import { Editor } from "@tinymce/tinymce-react";
import { Editor as TinyMCEEditor } from "tinymce";
import useFetch from "../../hooks/useFetch";
import { apiDomain } from "../../lib/posts";
import axios from "axios";

interface Props {
  postId: string;
}

const CommentForm = ({ postId }: Props) => {
  const editorRef = useRef<TinyMCEEditor | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);

  const [dirty, setDirty] = useState(false);
  const [editorKey, setEditorKey] = useState(4);

  useEffect(() => setDirty(false), []);

  const clearEditor = () => {
    const newKey = editorKey * 43;
    setEditorKey(newKey);
  };

  const onSubmit = async () => {
    if (!editorRef.current?.getContent()) {
      alert("Please enter content inside of the editor");
      return;
    } else if (nameRef.current?.value && emailRef.current?.value) {
      try {
        const { data } = await axios.post(
          `${apiDomain()}/posts/${postId}/comments`,
          {
            name: nameRef.current.value,
            email: emailRef.current.value,
            postId,
            contentHtml: editorRef.current.getContent(),
          }
        );
        setDirty(false);
        editorRef.current.setDirty(false);
        // Clearing form data
        clearEditor();
        nameRef.current.value = "";
        emailRef.current.value = "";
        location.reload();
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <form styleName="form">
      <h2 styleName="form__title">Leave a comment</h2>
      <div styleName="form__group">
        <label styleName="form__label" htmlFor="message">
          MESSAGE
        </label>
        <Editor
          id="FIXED_ID"
          key={editorKey}
          onInit={(evt, editor) => (editorRef.current = editor)}
          apiKey={process.env.TINY_API_KEY}
          initialValue="<p>This is the initial content of the editor.</p>"
          onDirty={() => setDirty(true)}
          init={{
            height: 500,
            menubar: false,
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "preview",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "code",
              "help",
              "wordcount",
            ],
            toolbar:
              "undo redo | blocks | " +
              "bold italic forecolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
        {dirty && <p>You have unsaved content!</p>}
      </div>
      <div styleName="form__group">
        <label styleName="form__label" htmlFor="name">
          NAME
        </label>
        <input
          styleName="form__control"
          id="name"
          name="name"
          placeholder="Bob Jones"
          required={true}
          ref={nameRef}
        />
      </div>
      <div styleName="form__group">
        <label styleName="form__label" htmlFor="email">
          EMAIL
        </label>
        <input
          styleName="form__control"
          id="email"
          name="email"
          type="email"
          placeholder="Bob Jones"
          required={true}
          ref={emailRef}
        />
      </div>
      <div styleName="form__group">
        <label styleName="form__label" htmlFor="avatar">
          AVATAR
        </label>
        <input
          styleName="form__control form__control--file"
          id="avatar"
          name="avatar"
          type="file"
          placeholder="Upload avatar..."
          required={true}
          ref={fileRef}
        />
      </div>
      {/* <div styleName="form__group">
        <input
          styleName="form__control"
          id="consent"
          name="consent"
          type="checkbox"
          required={true}
        />
        <label styleName="form__label" htmlFor="consent">
          Save my name, email, and website in this browser for the next time I
          comment.
        </label>
      </div> */}
      <button styleName="form__button" type="button" onClick={onSubmit}>
        POST COMMENT
      </button>
    </form>
  );
};

export default CSSModules(CommentForm, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "log",
});
