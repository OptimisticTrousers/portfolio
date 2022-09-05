/* eslint-disable react/no-unknown-property */
import Image from "next/image";
import { FC } from "react";
import CSSModules from "react-css-modules";
import styles from "./About.module.css";

const About: FC = () => {
  return (
    <section styleName="about">
      <div styleName="about__content">
        <h2 styleName="about__title">About me</h2>
        <p styleName="about__description">
          Hey! I'm Abdul Rahman, I've been close to a computer since an early
          age, and been passionate about it ever since. 
          
          <br />
          <br />
          I really liked to build
          stuff using no-code tools back in 2010, and from that, I explored how
          to code myself, fast-forward to today, I do programming in various
          languages and technologies, and had the privilege to worked in a B2B
          Company and a Recruitment Company I'm interested in building something
          awesome with code and automate tasks with code, currently focused on
          Web & Mobile Development, Open Source and Competitive Programming. 
          <br/>
          <br/>
          When
          I'm not coding I play games with my friends, watch some show on
          Netflix, or if the weather's good, play basketball! 🏀
        </p>
      </div>
      <div styleName="about__icons">
        <i
          className="devicon-html5-plain-wordmark colored"
          styleName="about__icon"
        ></i>
        <i
          className="devicon-css3-plain-wordmark colored"
          styleName="about__icon"
        ></i>
        <i
          className="devicon-javascript-plain colored"
          styleName="about__icon"
        ></i>
        <i
          className="devicon-react-original-wordmark colored"
          styleName="about__icon"
        ></i>
        <i className="devicon-jest-plain colored" styleName="about__icon"></i>
        <i
          className="devicon-typescript-plain colored"
          styleName="about__icon"
        ></i>
        <i
          className="devicon-redux-original colored"
          styleName="about__icon"
        ></i>
        <i
          className="devicon-git-plain-wordmark colored"
          styleName="about__icon"
        ></i>
        <i
          className="devicon-firebase-plain-wordmark colored"
          styleName="about__icon"
        ></i>
      </div>
    </section>
  );
};

export default CSSModules(About, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "log",
});
