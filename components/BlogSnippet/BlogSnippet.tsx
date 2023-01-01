/* eslint-disable react/no-unknown-property */
import { FC } from "react";
import CSSModules from "react-css-modules";
import { BsCalendar3 } from "react-icons/bs";
import { Post } from "../../lib/posts";
import Date from "../Date/Date";
import styles from "./BlogSnippet.module.css";
import parse from "html-react-parser";
import Link from "next/link";

const BlogSnippet: FC<any> = ({ _id, title, createdAt, contentHtml }) => {
  return (
    <article styleName="snippet">
      <a href={`/blog/${_id}`} styleName="snippet__title">
        {title}
      </a>
      <p styleName="snippet__date">
        <BsCalendar3 />
        <Date dateString={createdAt} />
      </p>
      <section styleName="snippet__description">{parse(contentHtml)}</section>
    </article>
  );
};

export default CSSModules(BlogSnippet, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "log",
});
