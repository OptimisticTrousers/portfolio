/* eslint-disable react/no-unknown-property */
import Image from "next/image";
import { FC } from "react";
import CSSModules from "react-css-modules";
import styles from "./Sidebar.module.css";

const Sidebar: FC = () => {
  return (
    <aside styleName="aside">
      <div styleName="aside__avatar">
        <Image styleName="aside__image" src="/images/me.jpg" alt="picture of me" width={100} height={100} />
      </div>
      <div styleName="aside__content">
        <h3 styleName="aside__author">Tony Isern</h3>
        <p styleName="aside__description">Aspiring full stack web developer. Be different.</p>
      </div>
      <div styleName="aside__buttons">
        <button>Email</button>
        <button>Github</button>
        <button>LinkedIn</button>
      </div>
    </aside>
  );
};

export default CSSModules(Sidebar, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "log",
});
