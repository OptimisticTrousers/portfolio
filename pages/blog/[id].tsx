/* eslint-disable react/no-unknown-property */
import CSSModules from "react-css-modules";
import BlogExcerpt from "../../components/BlogExcerpt/BlogExcerpt";
import BlogLayout from "../../components/BlogLayout/BlogLayout";
import styles from "./BlogPost.module.css";
import { BsCalendar3 } from "react-icons/bs";
import Link from "next/link";
import { getAllPostIds, getPostData, Post } from "../../lib/posts";
import Date from "../../components/Date/Date";

export async function getStaticProps({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id as string);

  if (!postData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

interface Props {
  postData: {
    currentPost: Post;
    previousPost: Post;
    nextPost: Post;
  };
}

const BlogPost = ({
  postData: { currentPost, previousPost, nextPost },
}: Props) => {
  return (
    <BlogLayout>
      <BlogExcerpt
        createdAt={currentPost.createdAt}
        contentHtml={currentPost.contentHtml}
        render={() => `${currentPost.title}`}
        onPage={true}
      />
      <p styleName="blog__updated-at">
        <BsCalendar3 />
        <span>
          <strong>Updated: </strong>
          <Date dateString={currentPost.updatedAt} />
        </span>
      </p>
      <nav styleName="blog__pagination" aria-label="blog pagination">
        {previousPost !== null ? (
          <Link href={`/blog/${previousPost._id}`}>
            <button
              styleName={`blog__button ${
                previousPost === null && "blog__button--disabled"
              }`}
            >
              Previous
            </button>
          </Link>
        ) : (
          <button
            styleName={`blog__button ${
              previousPost === null && "blog__button--disabled"
            }`}
          >
            Previous
          </button>
        )}
        {nextPost !== null ? (
          <Link href={`/blog/${nextPost._id}`}>
            <button
              styleName={`blog__button ${
                nextPost === null && "blog__button--disabled"
              }`}
            >
              Next
            </button>
          </Link>
        ) : (
          <button
            styleName={`blog__button ${
              nextPost === null && "blog__button--disabled"
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
