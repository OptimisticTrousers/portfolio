/* eslint-disable react/no-unknown-property */
import Link from "next/link";
import { FC } from "react";
import CSSModules from "react-css-modules";
import styles from "./Hero.module.css";

const Hero: FC = () => {
  return (
    <div styleName="hero">
      <div styleName="hero__name">
        <p>Hi, I'm</p>
        <h1>Tony isern</h1>
      </div>
      <div styleName="hero__position">
        <p>A Web Developer studying Computer Science</p>
      </div>
      <div styleName="hero__links">
        <Link href="">
          <button>LinkedIn</button>
        </Link>
        <Link href="">
          <button>Github</button>
        </Link>
        <Link href="">
          <button>Email</button>
        </Link>
      </div>
    </div>
  );
};

export default CSSModules(Hero, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "log",
});
