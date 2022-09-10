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

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const Blog = ({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
    contentHtml: string;
  }[];
}) => {
  return (
    <BlogLayout>
      <h1 styleName="blog__title">Blog Posts</h1>
      {allPostsData?.map(({ id, contentHtml, date, title }) => {
        return (
          <BlogExcerpt
            key={id}
            contentHtml={contentHtml}
            date={date}
            onPage={false}
            render={() => <Link href={`/posts/${id}`}>{title}</Link>}
          />
        );
      })}
    </BlogLayout>
  );
};

export default CSSModules(Blog, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "ignore",
});
