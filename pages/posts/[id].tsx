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
import { useRouter } from "next/router";

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

interface Props {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
    id: string;
    nextContents: any;
    previousContents: any;
  };
}

const BlogPost = ({ postData }: Props) => {
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
      <nav styleName="blog__pagination" aria-label="blog pagination">
        {postData.previousContents !== null ? (
          <Link href={`/posts/${Number(postData.id) - 1}`}>
            <button
              styleName={`blog__button ${
                postData.previousContents === null && "blog__button--disabled"
              }`}
            >
              Previous
            </button>
          </Link>
        ) : (
          <button
            styleName={`blog__button ${
              postData.previousContents === null && "blog__button--disabled"
            }`}
          >
            Previous
          </button>
        )}
        {postData.nextContents !== null ? (
          <Link href={`/posts/${Number(postData.id) + 1}`}>
            <button
              styleName={`blog__button ${
                postData.nextContents === null && "blog__button--disabled"
              }`}
            >
              Next
            </button>
          </Link>
        ) : (
          <button
            styleName={`blog__button ${
              postData.nextContents === null && "blog__button--disabled"
            }`}
          >
            Next
          </button>
        )}
      </nav>
    </BlogLayout>
  );
};

export default CSSModules(BlogPost, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "ignore",
});
