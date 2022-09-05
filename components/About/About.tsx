/* eslint-disable react/no-unknown-property */
import Image from "next/image";
import { FC } from "react";
import CSSModules from "react-css-modules";
import about from "../../public/about.svg";
import styles from "./About.module.css";

const About: FC = () => {
  return (
    <div styleName="about">
      <div styleName="about__description">
        <Image src={about} alt="Red sihoulette of a man" />
        <h2>About me</h2>
        <p>
          Hey! I'm Abdul Rahman, I've been close to a computer since an early
          age, and been passionate about it ever since. I really liked to build
          stuff using no-code tools back in 2010, and from that, I explored how
          to code myself, fast-forward to today, I do programming in various
          languages and technologies, and had the privilege to worked in a B2B
          Company and a Recruitment Company I'm interested in building something
          awesome with code and automate tasks with code, currently focused on
          Web & Mobile Development, Open Source and Competitive Programming When
          I'm not coding I play games with my friends, watch some show on
          Netflix, or if the weather's good, play basketball! 🏀
        </p>
      </div>
      <div styleName="about__icons"></div>
    </div>
  );
};

export default CSSModules(About, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "log",
});
