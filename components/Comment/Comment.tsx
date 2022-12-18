/* eslint-disable react/no-unknown-property */
import { FC } from "react";
import CSSModules from "react-css-modules";
import styles from "./Comment.module.css";
import Image from "next/image";

const Comment: FC = () => {
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
        <h3 styleName="post__title">I like this post</h3>
        <div styleName="post__details">
          <span styleName="post__author">by Bob Jones</span>
          <p styleName="post__content">
            about <span styleName="post__date">November 26, 2022</span>
          </p>
        </div>
        <p styleName="post__content">
          Incididunt consequat occaecat cupidatat eu qui irure commodo ullamco
          anim officia aliquip mollit laborum. Veniam nisi sit exercitation qui.
          Non ipsum ea consequat Lorem labore minim duis eiusmod proident in
          nulla est.
        </p>
      </div>
    </article>
  );
};

export default CSSModules(Comment, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "ignore",
});
