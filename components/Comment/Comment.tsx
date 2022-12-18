/* eslint-disable react/no-unknown-property */
import { FC } from "react";
import CSSModules from "react-css-modules";
import styles from "./Comment.module.css";
import Image from "next/image";
import parse from "html-react-parser";
import { Comment as CommentInterface } from "../../lib/posts";
import Date from "../Date/Date";
import moment from "moment";

const Comment = ({ name, contentHtml, createdAt }: CommentInterface) => {
  return (
    <article styleName="post">
      <div styleName="post__image-container">
        <Image
          styleName="post__image"
          src={`/images/optimistictrousers.jpg`}
          alt="me"
          width={130}
          height={130}
        />
      </div>
      <div styleName="post__container">
        <span styleName="post__author">
          Comment by: <strong>{name}</strong>
        </span>
        <div styleName="post__details">
          <p styleName="post__date">
            # <Date dateString={createdAt} />
          </p>
          around
          <span styleName="post__fromnow">{moment(createdAt).fromNow()}</span>
        </div>
        <section styleName="post__content">{parse(contentHtml)}</section>
      </div>
    </article>
  );
};

export default CSSModules(Comment, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "ignore",
});
