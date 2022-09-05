/* eslint-disable react/no-unknown-property */
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import CSSModules from "react-css-modules";
import styles from "./Hero.module.css";

const Hero: FC = () => {
  return (
    <div styleName="hero">
      <div styleName="hero__intro">
        {/* <Image src="././../public/dots.svg" alt="dots" width={50} height={50}/> */}
        <p styleName="hero__hi">Hi, I'm</p>
        <h1 styleName="hero__name">Tony Isern</h1>
      </div>
      <div styleName="hero__position">
        <p styleName="hero__description"><span styleName="hero__colorful">A Web Developer</span><span styleName="hero__dash">_</span> studying Computer Science</p>
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
