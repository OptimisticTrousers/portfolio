/* eslint-disable react/no-unknown-property */
import { FC } from "react";
import CSSModules from "react-css-modules";
import styles from "./BlogExcerpt.module.css";
import { BsCalendar3 } from "react-icons/bs";
import Link from "next/link";

interface Props {
  render: () => JSX.Element | string;
  onPage: boolean;
}

const BlogExcerpt: FC<Props> = ({ render, onPage }) => {
  return (
    <article styleName="excerpt">
      <h3
        styleName={`excerpt__title ${
          onPage === false && "excerpt__title--link"
        }`}
      >
        {render()}
      </h3>
      <p styleName="excerpt__date">
        <BsCalendar3 />
        <time>March 1, 2022</time>
      </p>
      <p
        styleName={`excerpt__description ${
          onPage === false && "excerpt__ellipsis"
        }`}
      >
        In veniam voluptate commodo in duis mollit eiusmod tempor. Qui esse et
        tempor labore ea incididunt sunt pariatur amet enim. Commodo voluptate
        commodo laborum proident elit pariatur consequat non mollit enim sit
        eiusmod do officia. Commodo deserunt tempor aliquip adipisicing
        excepteur.
      </p>
    </article>
  );
};

export default CSSModules(BlogExcerpt, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "log",
});
