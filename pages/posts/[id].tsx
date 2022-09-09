/* eslint-disable react/no-unknown-property */
import { GetStaticProps, NextPage } from "next";
import { FC } from "react";
import CSSModules from "react-css-modules";
import BlogExcerpt from "../../components/BlogExcerpt/BlogExcerpt";
import BlogLayout from "../../components/BlogLayout/BlogLayout";
import styles from "./BlogPost.module.css";
import { BsCalendar3 } from "react-icons/bs";
import Link from "next/link";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/Date/Date";

export async function getStaticProps({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

const BlogPost = ({
  postData,
}: {
  postData: { title: string; date: string; contentHtml: string };
}) => {
  return (
    <BlogLayout>
      <BlogExcerpt
        date={postData.date}
        contentHtml={postData.contentHtml}
        render={() => `${postData.title}`}
        onPage={true}
      />
      <p styleName="blog__updated-at">
        <BsCalendar3 />
        <span>
          <strong>Updated: </strong>
          <Date dateString={postData.date} />
        </span>
      </p>
      <nav styleName="blog__pagination">
        <button styleName="blog__button">
          <Link href="/posts">Previous</Link>
        </button>
        <button styleName="blog__button">
          <Link href="/posts">Next</Link>
        </button>
      </nav>
    </BlogLayout>
  );
};

export default CSSModules(BlogPost, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "log",
});
