import axios from "axios";
import { Category, Post, Tag } from "../atoms";

export async function getAllCategoriesAndTags() {
  try {
    const {
      data: { categories },
    } = await axios.get(`${process.env.NEXT_PUBLIC_API_DOMAIN}/categories`);
    const {
      data: { tags },
    } = await axios.get(`${process.env.NEXT_PUBLIC_API_DOMAIN}/tags`);

    const typedCategories = categories as Category[];
    const typedTags = tags as Tag[];

    return { categories: typedCategories, tags: typedTags };
  } catch (error) {
    console.log(error);
  }
}

export async function getAllPosts() {
  try {
    const {
      data: { posts },
    } = await axios.get(`${process.env.NEXT_PUBLIC_API_DOMAIN}/posts`);

    const sortedPosts = posts.sort((a: Post, b: Post) => {
      if (a.createdAt < b.createdAt) {
        return 1;
      } else {
        return -1;
      }
    });

    const filteredPosts = sortedPosts.filter(
      (post: Post) => post.published === true
    );

    return filteredPosts;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllCategoryIds() {
  try {
    const {
      data: { categories },
    } = await axios.get(`${process.env.NEXT_PUBLIC_API_DOMAIN}/categories`);

    return categories.map((category: Category) => {
      return {
        params: {
          id: category._id,
        },
      };
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getAllTagIds() {
  try {
    const {
      data: { tags },
    } = await axios.get(`${process.env.NEXT_PUBLIC_API_DOMAIN}/tags`);

    return tags.map((tag: Tag) => {
      return {
        params: {
          id: tag._id,
        },
      };
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getAllPostIds() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/posts`);

    const { posts } = await response.json();

    const sortedPosts = posts.sort((a: Post, b: Post) => {
      if (a.createdAt < b.createdAt) {
        return 1;
      } else {
        return -1;
      }
    });

    const filteredPosts = sortedPosts.filter(
      (post: Post) => post.published === true
    );

    return filteredPosts.map((post: Post) => {
      return {
        params: {
          id: post._id,
        },
      };
    });
  } catch (err) {
    console.log(err);
  }
}

export async function getCategoryData(id: string) {
  try {
    const {
      data: { category, posts },
    } = await axios.get(`${process.env.NEXT_PUBLIC_API_DOMAIN}/categories/${id}`);

    const sortedPosts = posts.sort((a: Post, b: Post) => {
      if (a.createdAt < b.createdAt) {
        return 1;
      } else {
        return -1;
      }
    });

    const filteredPosts = sortedPosts.filter(
      (post: Post) => post.published === true
    );

    return { posts: filteredPosts, category };
  } catch (error) {
    console.log(error);
  }
}

export async function getTagData(id: string) {
  try {
    const {
      data: { tag, posts },
    } = await axios.get(`${process.env.NEXT_PUBLIC_API_DOMAIN}/tags/${id}`);

    const sortedPosts = posts.sort((a: Post, b: Post) => {
      if (a.createdAt < b.createdAt) {
        return 1;
      } else {
        return -1;
      }
    });

    const filteredPosts = sortedPosts.filter(
      (post: Post) => post.published === true
    );

    return { posts: filteredPosts, tag };
  } catch (error) {
    console.log(error);
  }
}

export async function getPostData(id: string) {
  try {
    const {
      data: { posts },
    } = await axios.get(`${process.env.NEXT_PUBLIC_API_DOMAIN}/posts`);

    const sortedPosts = posts.sort((a: Post, b: Post) => {
      if (a.createdAt < b.createdAt) {
        return 1;
      } else {
        return -1;
      }
    });

    const currentIndex = sortedPosts.findIndex((post: Post) => post._id === id);

    const currentPost = sortedPosts[currentIndex] || null;

    const previousPost = sortedPosts[currentIndex - 1]?.published
      ? sortedPosts[currentIndex - 1]
      : null;

    const nextPost = sortedPosts[currentIndex + 1]?.published
      ? sortedPosts[currentIndex + 1]
      : null;

    return {
      currentPost,
      previousPost,
      nextPost,
    };
  } catch (err) {
    console.log(err);
  }
}
