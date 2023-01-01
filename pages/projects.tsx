/* eslint-disable react/no-unknown-property */
import { NextPage } from "next";
import { FC } from "react";
import CSSModules from "react-css-modules";
import Layout from "../components/Layout/Layout";
import Project from "../components/Project/Project";
import styles from "../styles/Projects.module.css";
import { nanoid } from "nanoid";
import Footer from "../components/Footer/Footer";
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
  handleNotFoundStyleName: "log",
});
