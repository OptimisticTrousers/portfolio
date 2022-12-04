/* eslint-disable react/no-unknown-property */
import { FC } from "react";
import CSSModules from "react-css-modules";
import styles from "./Comment.module.css";

const Comment: FC = () => {
  return (
    <article>
      <h4>
        John Doe - <time dateTime="2015-05-16 19:00">May 16</time>
      </h4>
      <p>
        Irure proident elit veniam excepteur esse ea cillum. Velit nulla sit eu
        ipsum adipisicing ex. Nostrud labore in ad dolor laboris aute irure
        veniam enim. Culpa cupidatat aliqua eiusmod duis labore. Occaecat dolore
        reprehenderit ex cillum in aute exercitation culpa.
      </p>
      <button>Reply</button>
    </article>
  );
};

export default CSSModules(Comment, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "ignore",
});
