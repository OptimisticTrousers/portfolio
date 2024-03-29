/* eslint-disable react/no-unknown-property */
import Link from "next/link";
import { FC, useState } from "react";
import CSSModules from "react-css-modules";
import styles from "./Navbar.module.css";

const Navbar: FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleMenuClick() {
    setToggleMenu((prevValue) => !prevValue);
  }

  return (
    <header>
      <nav styleName="nav" aria-label="main navigation">
        <div styleName="home">
          <Link href="/" aria-label="home page">
            Tony Isern
          </Link>
        </div>
        <div styleName="pages">
          <button
            styleName={`hamburger ${toggleMenu && "active"}`}
            onClick={handleMenuClick}
            aria-hidden={toggleMenu ? false : true}
            aria-label="hamburger menu"
          >
            <div styleName="bar"></div>
          </button>
          <ul styleName={`list`}>
            <li styleName="item">
              <Link href="/projects" tabIndex={0} aria-label="projects page">
                Projects
              </Link>
            </li>
            <li styleName="item">
              <Link href="/contact" tabIndex={0} aria-label="contact page">
                Contact
              </Link>
            </li>
            <li styleName="item">
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
          <ul styleName={`mobile-nav ${toggleMenu && "menu-active"}`}>
            <li styleName="item">
              <button styleName="button" onClick={handleMenuClick}>
                <Link
                  styleName="link"
                  href="/projects"
                  tabIndex={0}
                  aria-label="projects page"
                >
                  Projects
                </Link>
              </button>
            </li>
            <li styleName="item">
              <button styleName="button" onClick={handleMenuClick}>
                <Link
                  styleName="link"
                  href="/contact"
                  tabIndex={0}
                  aria-label="contact page"
                >
                  Contact
                </Link>
              </button>
            </li>
            <li styleName="item">
              <button styleName="button" onClick={handleMenuClick}>
                <Link styleName="link" href="/blog">
                  Blog
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default CSSModules(Navbar, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "ignore",
});
