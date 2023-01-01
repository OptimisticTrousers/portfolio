/* eslint-disable react/no-unknown-property */
import { NextPage } from "next";
import CSSModules from "react-css-modules";
import Project from "../components/Project/Project";
import styles from "../styles/Projects.module.css";
import projects from "../data/projects";

const Projects: NextPage = () => {
  return (
    <>
      <h1 styleName="projects__title">Projects</h1>
      {projects.map((project, index) => (
        <Project key={project.id} {...project} reverse={index % 2 === 0} />
      ))}
    </>
  );
};

export default CSSModules(Projects, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "ignore",
});
