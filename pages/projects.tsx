import { NextPage } from "next";
import { FC } from "react";
import CSSModules from "react-css-modules";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Projects.module.css"

const Projects: NextPage= () => {
  return (
    <Layout>
      <div>

      </div>
    </Layout>
  )
}

export default CSSModules(Projects, styles, {allowMultiple: true, handleNotFoundStyleName: "log"})