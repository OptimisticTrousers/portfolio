/* eslint-disable react/no-unknown-property */
import { FC } from "react";
import CSSModules from "react-css-modules";
import styles from "./BlogExcerpt.module.css";
import { BsCalendar3 } from "react-icons/bs";
import Link from "next/link";
import Date from "../Date/Date";
import parse from "html-react-parser";

interface Props {
  render: () => JSX.Element | string;
  onPage: boolean;
  date: string;
  contentHtml: string;
}

const BlogExcerpt: FC<Props> = ({ render, onPage, date, contentHtml }) => {
  return (
    <article styleName="excerpt">
      <h2
        styleName={`excerpt__title ${
          onPage === false && "excerpt__title--link"
        }`}
      >
        {render()}
      </h2>
      <p styleName="excerpt__date">
        <BsCalendar3 />
        <Date dateString={date} />
      </p>
      <section
        styleName={`excerpt__description ${
          onPage === false && "excerpt__ellipsis"
        }`}
      >
        {parse(contentHtml)}
      </section>
    </article>
  );
};

export default CSSModules(BlogExcerpt, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "ignore",
});
