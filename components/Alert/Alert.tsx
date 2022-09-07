/* eslint-disable react/no-unknown-property */
import { FC } from "react";
import CSSModules from "react-css-modules";
import styles from "./Alert.module.css";

interface Props {
  errorMessage: string;
  error: boolean;
}

const Error: FC<Props> = ({ errorMessage, error}) => {
  return <div styleName={`alert ${error === true ? "error" : "success"}`}>{errorMessage}</div>;
};

export default CSSModules(Error, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "log",
});
