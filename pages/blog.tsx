/* eslint-disable react/no-unknown-property */
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import CSSModules from "react-css-modules";
import BlogExcerpt from "../components/BlogExcerpt/BlogExcerpt";
import BlogLayout from "../components/BlogLayout/BlogLayout";
import Footer from "../components/Footer/Footer";
import Layout from "../components/Layout/Layout";
import Sidebar from "../components/Sidebar/Sidebar";
import { getPostData, getSortedPostsData } from "../lib/posts";
import styles from "../styles/Blog.module.css";
import { Post } from "../lib/posts";

export async function getStaticProps() {
  const posts = await getSortedPostsData();
  return {
    props: {
      posts,
    },
  };
}

interface Props {
  posts: Post[];
}

const Blog = ({ posts }: Props) => {
  return (
    <BlogLayout>
      <h1 styleName="blog__title">Blog Posts</h1>
      {posts.map(({ _id, contentHtml, createdAt, title }) => {
        return (
          <BlogExcerpt
            key={_id}
            contentHtml={contentHtml}
            createdAt={createdAt}
            onPage={false}
            render={() => <Link href={`/blog/${_id}`}>{title}</Link>}
          />
        );
      })}
    </BlogLayout>
  );
};

export default CSSModules(Blog, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "log",
});
