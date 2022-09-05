import { FC } from "react";
import CSSModules from "react-css-modules";
import styles from "./Layout.module.css";

const Layout: FC = () => {
  return (
    <div>
      <h1>ok</h1>
    </div>
  );
};

export default CSSModules(Layout, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "log",
});
