/* eslint-disable react/no-unknown-property */
import { NextPage } from "next";
import { FC } from "react";
import CSSModules from "react-css-modules";
import BlogExcerpt from "../../components/BlogExcerpt/BlogExcerpt";
import BlogLayout from "../../components/BlogLayout/BlogLayout";
import styles from "./BlogPost.module.css";
import { BsCalendar3 } from "react-icons/bs";
import Link from "next/link";

const BlogPost: NextPage = () => {
  return (
    <BlogLayout>
      <BlogExcerpt render={() => "New Post"} onPage={true}/>
      <p styleName="blog__updated-at">
        <BsCalendar3 />
        <span>
          <strong>Updated: </strong>
          <time>Sep 09, 2022</time>
        </span>
      </p>
      <nav styleName="blog__pagination">
        <button styleName="blog__button">
          <Link href="/">
            Previous
          </Link>
        </button>
        <button styleName="blog__button">
          <Link href="/">
            Next
          </Link>
        </button>
      </nav>
    </BlogLayout>
  );
};

export default CSSModules(BlogPost, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "log",
});
