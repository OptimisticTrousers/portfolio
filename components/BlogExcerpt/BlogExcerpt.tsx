/* eslint-disable react/no-unknown-property */
import { FC } from "react";
import CSSModules from "react-css-modules";
import styles from "./BlogExcerpt.module.css";
import { BsCalendar3 } from "react-icons/bs";
import Link from "next/link";

const BlogExcerpt: FC = () => {
  return (
    <article styleName="excerpt">
      <h3 styleName="excerpt__title">
        <Link href="/posts/bob">
          New Post
        </Link>
      </h3>
      <p styleName="excerpt__date">
        <BsCalendar3 />
        <time>March 1, 2022</time>
      </p>
      <p styleName="excerpt__description">
        I am happy, flabbergasted, grateful, and appreciative of the things for things and things
      </p>
    </article>
  );
};

export default CSSModules(BlogExcerpt, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "log",
});
