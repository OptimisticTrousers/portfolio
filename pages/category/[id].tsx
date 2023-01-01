import { FC } from "react";
import { Post } from "../../atoms";
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
  const { categories, tags }: any = await getAllCategoriesAndTags();
  const categoryData = await getCategoryData(params.id as string);

  if (!categoryData) {
    return {
      notFound: true,
    };
  }

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

const Category: FC<any> = ({
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
