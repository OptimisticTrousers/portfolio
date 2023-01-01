/* eslint-disable react/no-unknown-property */
import Link from "next/link";
import React, { FC } from "react";
import CSSModules from "react-css-modules";
import styles from "./BlogSidebar.module.css";

interface Props {
  categories: any;
  tags: any;
}

const BlogSidebar: FC<Props> = ({categories, tags})=> {
  const renderedCategories = categories.map((category: any) => {
    return (
      <a
        key={category.name}
        href={`/categories/${category.name}`}
        styleName="blog-sidebar__link"
      >
        <div styleName="blog-sidebar__name">{category.name}</div>
      </a>
    );
  });

  const renderedTags = tags.map((tag: any) => {
    <a
      key={tag.name}
      href={`/categories/${tag.name}`}
      styleName="blog-sidebar__link"
    >
      <div styleName="blog-sidebar__name">{tag.name}</div>
    </a>;
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
  handleNotFoundStyleName: "log",
});
