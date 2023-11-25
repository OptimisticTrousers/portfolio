import { FC } from "react";
import { Category, Post, Tag } from "../../atoms";
import BlogContentLayout from "../../components/BlogContentLayout/BlogContentLayout";
import BlogHero from "../../components/BlogHero/BlogHero";
import BlogLayout from "../../components/BlogLayout/BlogLayout";
import BlogSidebar from "../../components/BlogSidebar/BlogSidebar";
import BlogSnippet from "../../components/BlogSnippet/BlogSnippet";
import SidebarLayout from "../../components/SidebarLayout/SidebarLayout";
import {
  getAllCategoriesAndTags,
  getAllTagIds,
  getTagData,
} from "../../lib/posts";

export async function getStaticProps({ params }: { params: { id: string } }) {
  const categoriesAndTags = await getAllCategoriesAndTags();
  const tagData = await getTagData(params.id as string);

  if (!tagData || !categoriesAndTags) {
    return {
      notFound: true,
    };
  }

  const categories = categoriesAndTags.categories;
  const tags = categoriesAndTags.tags;

  return {
    props: {
      tagData,
      categories,
      tags,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getAllTagIds();

  return {
    paths,
    fallback: false,
  };
}

interface Props {
  tagData: {
    tag: Tag;
    posts: Post[];
  };
  categories: Category[];
  tags: Tag[];
}

const Tag: FC<Props> = ({ tagData: { tag, posts }, categories, tags }) => {
  return (
    <BlogLayout>
      <SidebarLayout>
        <BlogSidebar categories={categories} tags={tags} />
      </SidebarLayout>
      <BlogContentLayout>
        <BlogHero
          count={posts.length}
          name={tag.name}
          subTitle={"posts tagged:"}
        />
        {posts.map((post: Post) => {
          return <BlogSnippet key={post._id} {...post} />;
        })}
      </BlogContentLayout>
    </BlogLayout>
  );
};

export default Tag;
