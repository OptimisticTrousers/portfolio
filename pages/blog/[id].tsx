/* eslint-disable react/no-unknown-property */
import CSSModules from "react-css-modules";
import BlogExcerpt from "../../components/BlogExcerpt/BlogExcerpt";
import BlogLayout from "../../components/BlogLayout/BlogLayout";
import styles from "./BlogPost.module.css";
import { BsCalendar3 } from "react-icons/bs";
import Link from "next/link";
import { Comment, getAllPostIds, getPostData, Post } from "../../lib/posts";
import Date from "../../components/Date/Date";
import SidebarLayout from "../../components/SidebarLayout/SidebarLayout";
import AboutSidebar from "../../components/AboutSidebar/AboutSidebar";
import PostSidebar from "../../components/PostSidebar/PostSidebar";
import BlogContentLayout from "../../components/BlogContentLayout/BlogContentLayout";
import parse from "html-react-parser";
// import CommentForm from "../../components/CommentForm/CommentForm";
// import CommentsSection from "../../components/CommentsSection/CommentsSection";

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
    // sortedComments: Comment[];
  };
}

const BlogPost = ({
  postData: { currentPost, previousPost, nextPost },
}: Props) => {
  console.log(currentPost);
  return (
    <BlogLayout>
      <SidebarLayout>
        <AboutSidebar />
        <PostSidebar category={currentPost.category} tags={currentPost.tags} />
      </SidebarLayout>
      <BlogContentLayout>
        <article styleName="blog">
          <a href={`/blog/${currentPost._id}`} styleName="blog__title">
            {currentPost.title}
          </a>
          <p styleName="blog__date">
            <BsCalendar3 />
            <Date dateString={currentPost.createdAt} />
          </p>
          <section styleName="blog__description">
            {parse(currentPost.contentHtml)}
          </section>
        </article>
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
        <hr />
        {/* <CommentsSection comments={sortedComments} postId={currentPost._id} /> */}
      </BlogContentLayout>
    </BlogLayout>
  );
};

export default CSSModules(BlogPost, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "ignore",
});
