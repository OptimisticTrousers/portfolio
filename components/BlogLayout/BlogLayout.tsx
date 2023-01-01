/* eslint-disable react/no-unknown-property */
import { FC } from "react";
import CSSModules from "react-css-modules";
import Layout from "../Layout/Layout";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./BlogLayout.module.css";

interface Props {
  children: any;
}

const BlogLayout: FC<Props> = ({ children }) => {
  return (
    <Layout>
      <div styleName="blog">
        <Sidebar />
        <div styleName="blog__blogs">{children}</div>
      </div>
    </Layout>
  );
};

export default CSSModules(BlogLayout, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "ignore",
});
