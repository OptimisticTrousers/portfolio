/* eslint-disable react/no-unknown-property */
import { FC, useRef } from "react";
import CSSModules from "react-css-modules";
import { Comment as CommentInterface } from "../../lib/posts";
import Comment from "../Comment/Comment";
import CommentForm from "../CommentForm/CommentForm";
import styles from "./CommentsSection.module.css";

interface Props {
  comments: CommentInterface[];
  postId: string;
}

const CommentsSection = ({ comments, postId }: Props) => {
  return (
    <>
      <section styleName="blog__comments">
        <h2 styleName="blog__title" id="title">
          Comments
        </h2>
        {comments.length ? (
          comments.map((comment) => {
            return <Comment key={comment._id} {...comment} />;
          })
        ) : (
          <h3 styleName="blog__notfound">No comments yet...</h3>
        )}
      </section>
      <CommentForm postId={postId} />
    </>
  );
};

export default CSSModules(CommentsSection, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "ignore",
});
