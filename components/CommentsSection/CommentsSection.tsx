/* eslint-disable react/no-unknown-property */
import CSSModules from "react-css-modules";
import Comment from "../Comment/Comment";
import CommentForm from "../CommentForm/CommentForm";
import styles from "./CommentsSection.module.css";

const CommentsSection = () => {
  return (
    <>
      <section styleName="blog__comments">
        <h2 styleName="blog__title">Comments</h2>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </section>
      <CommentForm />
    </>
  );
};

export default CSSModules(CommentsSection, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "ignore",
});
