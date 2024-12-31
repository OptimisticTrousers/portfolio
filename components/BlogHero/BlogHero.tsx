/* eslint-disable react/no-unknown-property */
import React, { FC } from "react";
import CSSModules from "react-css-modules";
import styles from "./BlogHero.module.css";

interface Props {
  count: number;
  name: string;
  subTitle: string;
}

const BlogHero: FC<Props> = ({ count, name, subTitle }) => {
  return (
    <header styleName="blog-hero">
      <div styleName="blog-hero__subtitle">
        <span styleName="blog-hero__highlight">{count} </span>
        {subTitle}
      </div>
      <h1 styleName="blog-hero__title">{name}</h1>
    </header>
  );
};

export default CSSModules(BlogHero, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "log",
});
