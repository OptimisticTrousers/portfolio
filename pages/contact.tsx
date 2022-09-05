import { NextPage } from "next";
import CSSModules from "react-css-modules";
import styles from "../styles/Contact.module.css";

const Contact: NextPage = () => {
  return (
    <div>
      <h1>Ok</h1>
    </div>
  );
};

export default CSSModules(Contact, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "log",
});
