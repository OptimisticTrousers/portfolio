/* eslint-disable react/no-unknown-property */
import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import CSSModules from "react-css-modules";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import styles from "./Layout.module.css";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <div styleName="container">
        <Navbar />
        <main styleName="main">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default CSSModules(Layout, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "ignore",
});
