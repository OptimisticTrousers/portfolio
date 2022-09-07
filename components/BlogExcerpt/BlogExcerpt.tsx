import { FC } from "react";
import CSSModules from "react-css-modules";
import styles from "./BlogExcerpt.module.css";

const BlogExcerpt: FC = () => {
  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default CSSModules(BlogExcerpt, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "log",
});
