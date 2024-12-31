/* eslint-disable react/no-unknown-property */
import { FC } from "react";
import CSSModules from "react-css-modules";
import styles from "./Footer.module.css";

const Footer: FC = () => {
  return (
    <footer styleName="footer">
      <p>© 2025 Tony Isern. Made with 💌. Powered by Next.js</p>
    </footer>
  );
};

export default CSSModules(Footer, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "ignore",
});
