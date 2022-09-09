/* eslint-disable react/no-unknown-property */
import { FC } from "react";
import CSSModules from "react-css-modules";
import styles from "./Alert.module.css";

interface Props {
  errorMessage: string;
  error: boolean;
}

const Alert: FC<Props> = ({ errorMessage, error }) => {
  return (
    <div
      styleName={`alert ${error === true ? "error" : "success"}`}
      aria-label="form feedback message"
    >
      {errorMessage}
    </div>
  );
};

export default CSSModules(Alert, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "ignore",
});
