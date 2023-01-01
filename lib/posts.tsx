import axios from "axios";
import { Category, Post, Tag } from "../atoms";

export function apiDomain() {
  const production = process.env.NODE_ENV === "production";
  return production
    ? "https://radiant-ocean-64037.herokuapp.com"
    : "http://localhost:5000/api";
}

export async function getAllCategoriesAndTags() {
  try {
    const {
      data: { categories },
    } = await axios.get(`${apiDomain()}/categories`);
    const {
      data: { tags },
    } = await axios.get(`${apiDomain()}/tags`);

    return { categories, tags };
  } catch (error) {
    console.log(error);
  }
}

export async function getAllPosts() {
  try {
    const {
      data: { posts },
    } = await axios.get(`${apiDomain()}/posts`);

    const sortedPosts = posts.sort((a: Post, b: Post) => {
      if (a.createdAt < b.createdAt) {
        return 1;
      } else {
        return -1;
      }
    });

    return sortedPosts;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllCategoryIds() {
  try {
    const {
      data: { categories },
    } = await axios.get(`${apiDomain()}/categories`);

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
    } = await axios.get(`${apiDomain()}/tags`);

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
    const response = await fetch(`${apiDomain()}/posts`);

    const { posts } = await response.json();

    const sortedPosts = posts.sort((a: Post, b: Post) => {
      if (a.createdAt < b.createdAt) {
        return 1;
      } else {
        return -1;
      }
    });

    return sortedPosts.map((post: Post) => {
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
    } = await axios.get(`${apiDomain()}/categories/${id}`);

    const sortedPosts = posts.sort((a: Post, b: Post) => {
      if (a.createdAt < b.createdAt) {
        return 1;
      } else {
        return -1;
      }
    });

    return { posts: sortedPosts, category };
  } catch (error) {
    console.log(error);
  }
}

export async function getTagData(id: string) {
  try {
    const {
      data: { tag, posts },
    } = await axios.get(`${apiDomain()}/tags/${id}`);

    const sortedPosts = posts.sort((a: Post, b: Post) => {
      if (a.createdAt < b.createdAt) {
        return 1;
      } else {
        return -1;
      }
    });

    return { posts: sortedPosts, tag };
  } catch (error) {
    console.log(error);
  }
}

export async function getPostData(id: string) {
  try {
    const {
      data: { posts },
    } = await axios.get(`${apiDomain()}/posts`);

    const sortedPosts = posts.sort((a: Post, b: Post) => {
      if (a.createdAt < b.createdAt) {
        return 1;
      } else {
        return -1;
      }
    });

    const currentIndex = sortedPosts.findIndex((post: Post) => post._id === id);

    const currentPost = sortedPosts[currentIndex] || null;

    const previousPost = sortedPosts[currentIndex - 1] || null;

    const nextPost = sortedPosts[currentIndex + 1] || null;

    return {
      currentPost,
      previousPost,
      nextPost,
    };
  } catch (err) {
    console.log(err);
  }
}
