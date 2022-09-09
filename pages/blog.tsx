/* eslint-disable react/no-unknown-property */
import { NextPage } from "next";
import CSSModules from "react-css-modules";
import BlogExcerpt from "../components/BlogExcerpt/BlogExcerpt";
import BlogLayout from "../components/BlogLayout/BlogLayout";
import Footer from "../components/Footer/Footer";
import Layout from "../components/Layout/Layout";
import Sidebar from "../components/Sidebar/Sidebar";
import styles from "../styles/Blog.module.css";

const Blog: NextPage = () => {
  return (
    <BlogLayout>
      <h2 styleName="blog__title">Recent Posts</h2>
      <BlogExcerpt />
    </BlogLayout>
  );
};

export default CSSModules(Blog, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "log",
});
