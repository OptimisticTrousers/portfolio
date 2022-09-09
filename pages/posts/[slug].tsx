import { NextPage } from "next";
import { FC } from "react";
import CSSModules from "react-css-modules";
import BlogExcerpt from "../../components/BlogExcerpt/BlogExcerpt";
import BlogLayout from "../../components/BlogLayout/BlogLayout";
import styles from "./BlogPost.module.css";

const BlogPost: NextPage = () => {
  return (
    <BlogLayout>
      <BlogExcerpt />
    </BlogLayout>
  );
};

export default CSSModules(BlogPost, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "log",
});
