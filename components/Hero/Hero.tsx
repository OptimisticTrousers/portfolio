import { FC } from "react";
import CSSModules from "react-css-modules";
import styles from "./Hero.module.css";

const Hero: FC = () => {
  return <div></div>;
};

export default CSSModules(Hero, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "log",
});
