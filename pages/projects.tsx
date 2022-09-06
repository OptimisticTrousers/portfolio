import { NextPage } from "next";
import { FC } from "react";
import CSSModules from "react-css-modules";
import Layout from "../components/Layout/Layout";
import Project from "../components/Project/Project";
import styles from "../styles/Projects.module.css"

const Projects: NextPage= () => {
  return (
    <Layout>
      <h1>Projects</h1>
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </Layout>
  )
}

export default CSSModules(Projects, styles, {allowMultiple: true, handleNotFoundStyleName: "log"})