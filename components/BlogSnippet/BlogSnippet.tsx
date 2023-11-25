/* eslint-disable react/no-unknown-property */
import { FC } from "react";
import CSSModules from "react-css-modules";
import { BsCalendar3 } from "react-icons/bs";
import Date from "../Date/Date";
import styles from "./BlogSnippet.module.css";
import parse from "html-react-parser";
import { Post } from "../../atoms";

const BlogSnippet: FC<Post> = ({ _id, title, createdAt, contentHtml }) => {
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
