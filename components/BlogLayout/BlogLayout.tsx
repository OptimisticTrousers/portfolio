/* eslint-disable react/no-unknown-property */
import { FC, ReactNode } from "react";
import CSSModules from "react-css-modules";
import styles from "./BlogLayout.module.css";

interface Props {
  children: ReactNode[];
}

const BlogLayout: FC<Props> = ({ children }) => {
  return (
    <div styleName="blog">
      <aside>{children[0]}</aside>
      <section styleName="blog__blogs">{children[1]}</section>
    </div>
  );
};

export default CSSModules(BlogLayout, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "ignore",
});
