/* eslint-disable react/no-unknown-property */
import Link from "next/link";
import CSSModules from "react-css-modules";
import styles from "../styles/404.module.css";

const Custom404 = () => (
  <div styleName="not-found">
    <div styleName="not-found__container">
      <img src="/images/optimistictrousers.jpeg" alt="smiling pants" />
      <h2 styleName="not-found__number">404</h2>
      <hr styleName="not-found__break" />
      <p styleName="not-found__error">Page Not Found</p>
      <Link styleName="not-found__link" href="/">
        Go back to the home page
      </Link>
    </div>
  </div>
);

export default CSSModules(Custom404, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "ignore",
});
