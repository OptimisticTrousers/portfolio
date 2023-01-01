/* eslint-disable react/no-unknown-property */
import { FC } from "react";
import CSSModules from "react-css-modules";
import Layout from "../Layout/Layout";
import Sidebar from "../AboutSidebar/AboutSidebar";
import styles from "./BlogLayout.module.css";

interface Props {
  children: any;
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
  handleNotFoundStyleName: "log",
});
