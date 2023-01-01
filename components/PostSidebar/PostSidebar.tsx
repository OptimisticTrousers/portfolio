/* eslint-disable react/no-unknown-property */
import React from "react";
import CSSModules from "react-css-modules";
import styles from "./PostSidebar.module.css";

const PostSidebar = ({ category, tags }) => {
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
          {tags.map((tag: any) => {
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
