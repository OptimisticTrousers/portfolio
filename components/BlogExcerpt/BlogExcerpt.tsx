import { FC } from "react";
import CSSModules from "react-css-modules";
import styles from "./BlogExcerpt.module.css";

const BlogExcerpt: FC = () => {
  return (
    <div>
      <h3></h3>
    </div>
  );
};

export default CSSModules(BlogExcerpt, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "log",
});
