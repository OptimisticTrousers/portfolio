/* eslint-disable react/no-unknown-property */
import React, { FC } from "react";
import CSSModules from "react-css-modules";
import { Category, Tag } from "../../atoms";
import styles from "./BlogSidebar.module.css";

interface Props {
  categories: Category[];
  tags: Tag[];
}

const BlogSidebar: FC<Props> = ({ categories, tags }) => {
  const renderedCategories = categories.map((category: any) => {
    return (
      <a
        key={category.name}
        href={`/category/${category._id}`}
        styleName="blog-sidebar__link"
      >
        <div styleName="blog-sidebar__name">{category.name}</div>
      </a>
    );
  });

  const renderedTags = tags.map((tag: any) => {
    return (
      <a
        key={tag.name}
        href={`/tags/${tag._id}`}
        styleName="blog-sidebar__link"
      >
        <div styleName="blog-sidebar__name">{tag.name}</div>
      </a>
    );
  });

  return (
    <div styleName="blog-sidebar">
      <div styleName="blog-sidebar__card">
        <h2 styleName="blog-sidebar__title">Categories</h2>
        <div styleName="blog-sidebar__list">{renderedCategories}</div>
      </div>
      <div styleName="blog-sidebar__card">
        <h2 styleName="blog-sidebar__title">Tags</h2>
        <div styleName="blog-sidebar__list">{renderedTags}</div>
      </div>
    </div>
  );
};

export default CSSModules(BlogSidebar, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "ignore",
});
