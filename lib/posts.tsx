import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export async function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map(async (fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();
    return {
      id,
      contentHtml,
      ...(matterResult.data as { date: string; title: string }),
    };
  });
  // Sort posts by date

  const resolvedAllPostsData = await Promise.all(allPostsData);
  return resolvedAllPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const nextPath = path.join(postsDirectory, `${Number(id) + 1}.md`);
  const previousPath = path.join(postsDirectory, `${Number(id) - 1}.md`);

  const doesNextExist = fs.existsSync(nextPath);
  const doesPreviousNext = fs.existsSync(previousPath);

  let nextContents = null;
  let previousContents = null;

  if (doesNextExist) {
    try {
      nextContents = fs.readFileSync(nextPath, "utf-8");
    } catch (error) {
      console.log(`Could not find nextContents: ${error}`);
    }
  }
  if (doesPreviousNext) {
    try {
      previousContents = fs.readFileSync(previousPath, "utf-8");
    } catch (error) {
      console.log(`Could not find previousContents: ${error}`);
    }
  }

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id
  return {
    id,
    contentHtml,
    nextContents,
    previousContents,
    ...(matterResult.data as { date: string; title: string }),
  };
}
