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
    <article styleName="comment">
      <div styleName="comment__image-container">
        <Image
          styleName="comment__image"
          src={`/images/optimistictrousers.jpg`}
          alt="me"
          width={130}
          height={130}
        />
      </div>
      <div styleName="comment__container">
        <span styleName="comment__author">
          Comment by: <strong>{name}</strong>
        </span>
        <div styleName="comment__details">
          <p styleName="comment__date">
            # <Date dateString={createdAt} />
          </p>
          <div styleName="comment__block">

          around
          <p styleName="comment__fromnow">{moment(createdAt).fromNow()}</p>
          </div>
        </div>
        <section styleName="comment__content">{parse(contentHtml)}</section>
      </div>
    </article>
  );
};

export default CSSModules(Comment, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "ignore",
});
