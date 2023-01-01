/* eslint-disable react/no-unknown-property */
import CSSModules from "react-css-modules";
import BlogLayout from "../components/BlogLayout/BlogLayout";
import { getAllPosts, getAllCategoriesAndTags } from "../lib/posts";
import styles from "../styles/Blog.module.css";
import SidebarLayout from "../components/SidebarLayout/SidebarLayout";
import SidebarAbout from "../components/AboutSidebar/AboutSidebar";
import BlogContentLayout from "../components/BlogContentLayout/BlogContentLayout";
import BlogSidebar from "../components/BlogSidebar/BlogSidebar";
import BlogSnippet from "../components/BlogSnippet/BlogSnippet";
import { Category, Post, Tag } from "../atoms";

export async function getStaticProps() {
  const posts = await getAllPosts();
  const { categories, tags }: any = await getAllCategoriesAndTags();

  return {
    props: {
      posts,
      categories,
      tags,
    },
  };
}

interface Props {
  posts: Post[];
  categories: Category[];
  tags: Tag[];
}

const Blog = ({ posts, categories, tags }: Props) => {
  return (
    <BlogLayout>
      <SidebarLayout>
        <SidebarAbout />
        <BlogSidebar categories={categories} tags={tags} />
      </SidebarLayout>
      <BlogContentLayout>
        <h1 styleName="blog__title">Blog Posts</h1>
        {posts.map((post: Post) => {
          return <BlogSnippet key={post._id} {...post} />;
        })}
      </BlogContentLayout>
    </BlogLayout>
  );
};

export default CSSModules(Blog, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "ignore",
});
