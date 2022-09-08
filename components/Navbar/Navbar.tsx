/* eslint-disable react/no-unknown-property */
import Link from "next/link";
import { FC } from "react";
import CSSModules from "react-css-modules";
import styles from "./Navbar.module.css";

const Navbar: FC = () => {
  return (
    <header>
      <nav styleName="nav">
        <div styleName="home">
          <Link href="/" aria-label="home page">Tony Isern</Link>
        </div>
        <div styleName="pages">
          <ul styleName="list">
            <li styleName="item" >
              <Link href="/projects" tabIndex={0} aria-label="projects page">Projects</Link>
            </li>
            <li styleName="item" >
              <Link href="/contact" tabIndex={0} aria-label="contact page">Contact</Link>
            </li>
            {/* <li styleName="item">
              <Link href="/blog">Blog</Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default CSSModules(Navbar, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "log",
});
