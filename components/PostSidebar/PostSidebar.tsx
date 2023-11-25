/* eslint-disable react/no-unknown-property */
import React, { FC } from "react";
import CSSModules from "react-css-modules";
import { Category, Tag } from "../../atoms";
import styles from "./PostSidebar.module.css";

interface Props {
  category: Category;
  tags: Tag[];
}

const PostSidebar: FC<Props> = ({ category, tags }) => {
  return (
    <div styleName="post-sidebar">
      <div styleName="post-sidebar__section">
        <h2 styleName="post-sidebar__title">Category</h2>
        <ul styleName="post-sidebar__list">
          <li styleName="post-sidebar__item">
            <a href={`/category/${category._id}`}>{category.name}</a>
          </li>
        </ul>
      </div>
      <div styleName="post-sidebar__section">
        <h2 styleName="post-sidebar__title">Tags</h2>
        <div styleName="post-sidebar__tags">
          {tags.map((tag: Tag) => {
            return (
              <a
                key={tag._id}
                styleName="post-sidebar__tag"
                href={`/tags/${tag._id}`}
              >
                {tag.name}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CSSModules(PostSidebar, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "ignore",
});
