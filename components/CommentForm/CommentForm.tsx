/* eslint-disable react/no-unknown-property */
import { FC, useRef } from "react";
import CSSModules from "react-css-modules";
import styles from "./CommentForm.module.css";
import { Editor } from "@tinymce/tinymce-react";

const CommentForm: FC = () => {
  const editorRef = useRef(null);
  return (
    <form styleName="form">
      <h2 styleName="form__title">Leave a comment</h2>
      <div styleName="form__group">
        <label styleName="form__label" htmlFor="message">
          MESSAGE 
        </label>
        <Editor
          apiKey="your-api-key"
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
          required={true}
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
      <button styleName="form__button" type="submit">
        POST COMMENT
      </button>
    </form>
  );
};

export default CSSModules(CommentForm, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "ignore",
});
