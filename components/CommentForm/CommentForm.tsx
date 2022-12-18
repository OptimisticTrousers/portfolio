/* eslint-disable react/no-unknown-property */
import { FC, useRef } from "react";
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

  const log = async () => {
    try {
      if (editorRef.current && nameRef.current && emailRef.current) {
        const { data } = await axios.post(`${apiDomain()}/${postId}/comments`, {
          name: nameRef.current.value,
          email: emailRef.current.value,
          postId,
          contentHtml: editorRef.current.getContent(),
        });
        console.log(data)
      }
    } catch (err) {
      console.log(err);
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
          onInit={(evt, editor) => (editorRef.current = editor)}
          apiKey="8285m4z241eb5qr9vs1xokxlufq5ozru9ce5im2pj01vl2my"
          initialValue="<p>This is the initial content of the editor.</p>"
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
          ref={emailRef}
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
      <button styleName="form__button" onClick={log}>
        POST COMMENT
      </button>
    </form>
  );
};

export default CSSModules(CommentForm, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "ignore",
});
