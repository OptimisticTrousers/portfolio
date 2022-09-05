/* eslint-disable react/no-unknown-property */
import { NextPage } from "next";
import CSSModules from "react-css-modules";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Contact.module.css";

const Contact: NextPage = () => {
  return (
    <Layout>
      <div styleName="contact">
        <h1>Ok</h1>
      </div>
    </Layout>
  );
};

export default CSSModules(Contact, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "log",
});
