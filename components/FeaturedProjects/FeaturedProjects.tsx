/* eslint-disable react/no-unknown-property */
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import CSSModules from "react-css-modules";
import Project from "../Project/Project";
import styles from "./FeaturedProjects.module.css";

const FeaturedProjects: FC = () => {
  return (
    <div styleName="projects">
      <h1 styleName="projects__title">Featured Projects</h1>
      <p styleName="projects__description">I love building all kinds of things. Here's some of my better work.</p>
      <Link href="/" styleName="projects__link">
        <p styleName="projects__text">Explore more →</p>
      </Link>
      <Project />
      <Project />
      <Project />
    </div>
  );
};

export default CSSModules(FeaturedProjects, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "log",
});
