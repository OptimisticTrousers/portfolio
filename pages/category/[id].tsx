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
  getAllCategoryIds,
  getCategoryData,
} from "../../lib/posts";

export async function getStaticProps({ params }: { params: { id: string } }) {
  const categoriesAndTags = await getAllCategoriesAndTags();
  const categoryData = await getCategoryData(params.id as string);

  if (!categoryData || !categoriesAndTags) {
    return {
      notFound: true,
    };
  }

  const categories = categoriesAndTags.categories;
  const tags = categoriesAndTags.tags;

  return {
    props: {
      categoryData,
      categories,
      tags,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getAllCategoryIds();
  return {
    paths,
    fallback: false,
  };
}

interface Props {
  categoryData: {
    category: Category;
    posts: Post[];
  };
  categories: Category[];
  tags: Tag[];
}

const Category: FC<Props> = ({
  categoryData: { category, posts },
  categories,
  tags,
}) => {
  return (
    <BlogLayout>
      <SidebarLayout>
        <BlogSidebar categories={categories} tags={tags} />
      </SidebarLayout>
      <BlogContentLayout>
        <BlogHero
          count={posts.length}
          name={category.name}
          subTitle={"posts categorized as:"}
        />

        {posts.map((post: Post) => {
          return <BlogSnippet key={post._id} {...post} />;
        })}
      </BlogContentLayout>
    </BlogLayout>
  );
};

export default Category;
