/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import Link from "next/link";
import { FC } from "react";
import CSSModules from "react-css-modules";
import featuredProjects from "../../data/featuredProjects";
import Project from "../Project/Project";
import styles from "./FeaturedProjects.module.css";

const FeaturedProjects: FC = () => {
  return (
    <div styleName="projects">
      <h2 styleName="projects__title">Featured Projects</h2>
      <p styleName="projects__description">
        I love building all kinds of things. Here's some of my better work.
      </p>
      <Link
        href="/projects"
        styleName="projects__link"
        aria-label="projects page"
      >
        <p styleName="projects__text">Explore more →</p>
      </Link>
      {featuredProjects.map((featuredProject, index) => (
        <Project
          key={featuredProject.id}
          {...featuredProject}
          reverse={index % 2 === 0}
        />
      ))}
    </div>
  );
};

export default CSSModules(FeaturedProjects, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "ignore",
});
