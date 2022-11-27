
import Error from "next/error";
export interface Post {
  _id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  published: boolean;
  contentHtml: string;
}

function apiDomain() {
  const production = process.env.NODE_ENV === "production";
  return production ? "" : "http://localhost:5000";
}

export async function getSortedPostsData() {
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

    return sortedPosts;
  } catch (err) {
    console.log(err);
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

export async function getPostData(id: string) {
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
