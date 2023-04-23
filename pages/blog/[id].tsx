/* eslint-disable react/no-unknown-property */
import CSSModules from "react-css-modules";
import BlogLayout from "../../components/BlogLayout/BlogLayout";
import styles from "./BlogPost.module.css";
import { BsCalendar3 } from "react-icons/bs";
import Link from "next/link";
import {
  getAllPostIds,
  getPostData,
} from "../../lib/posts";
import Date from "../../components/Date/Date";
import SidebarLayout from "../../components/SidebarLayout/SidebarLayout";
import AboutSidebar from "../../components/AboutSidebar/AboutSidebar";
import PostSidebar from "../../components/PostSidebar/PostSidebar";
import BlogContentLayout from "../../components/BlogContentLayout/BlogContentLayout";
import parse from "html-react-parser";
import Comments from "../../components/Comments/Comments";
import Head from "next/head";
import { Post } from "../../atoms";
import Image from "next/image";

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
    <>
      <Head>
        <title>{currentPost.title}</title>
      </Head>
      <BlogLayout>
        <SidebarLayout>
          <AboutSidebar />
          <PostSidebar
            category={currentPost.category}
            tags={currentPost.tags}
          />
        </SidebarLayout>
        <BlogContentLayout>
          <article styleName="blog">
            <h1 styleName="blog__title">{currentPost.title}</h1>
            {currentPost.image && (
              <figure styleName="blog__container">
                <Image
                  styleName="blog__image"
                  src={`${process.env.NEXT_PUBLIC_S3_BUCKET}/${currentPost.image.originalname}`}
                  width={500}
                  height={400}
                  objectFit={"contain"}
                  alt={currentPost.title}
                />
                <figcaption styleName="blog__caption">
                  {currentPost.caption}
                </figcaption>
              </figure>
            )}
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
          <section>
            <h3 styleName="blog__subtitle">Comments</h3>
            <Comments />
          </section>
        </BlogContentLayout>
      </BlogLayout>
    </>
  );
};

export default CSSModules(BlogPost, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "ignore",
});
