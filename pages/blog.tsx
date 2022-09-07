import { NextPage } from "next";
import CSSModules from "react-css-modules";
import Footer from "../components/Footer/Footer";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Blog.module.css";

const Blog: NextPage = () => {
  return (
    <>
      <Layout>
        <div>
          <h1>Hi</h1>
        </div>
      </Layout>
    </>
  );
};

export default CSSModules(Blog, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "log",
});
