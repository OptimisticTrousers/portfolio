/* eslint-disable react/no-unknown-property */
import { FC } from "react";
import CSSModules from "react-css-modules";
import styles from "./Error.module.css";

interface Props {
  message: string;
}

const Error: FC<Props> = ({ message }) => {
  return <div styleName="error">{message}</div>;
};

export default CSSModules(Error, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "log",
});
