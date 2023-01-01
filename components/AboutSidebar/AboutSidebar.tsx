/* eslint-disable react/no-unknown-property */
import Image from "next/image";
import { FC } from "react";
import CSSModules from "react-css-modules";
import ButtonLinks from "../ButtonLinks/ButtonLinks";
import styles from "./AboutSidebar.module.css";

const SidebarAbout: FC = () => {
  return (
    <div styleName="aside">
      <div styleName="aside__avatar">
        <Image
          styleName="aside__image"
          src="/images/me.jpg"
          alt="picture of me"
          width={100}
          height={100}
        />
      </div>
      <div styleName="aside__content">
        <h3 styleName="aside__author">Tony Isern</h3>
        <p styleName="aside__description">
          Aspiring full stack web developer. Be different.
        </p>
      </div>
      <ButtonLinks />
    </div>
  );
};

export default CSSModules(SidebarAbout, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "log",
});
