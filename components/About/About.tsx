/* eslint-disable react/no-unknown-property */
import Image from "next/image";
import { FC } from "react";
import CSSModules from "react-css-modules";
import styles from "./About.module.css";
import {CSSTransition} from "react-transition-group"

const About: FC = () => {
  return (
      <section styleName="about">
        <div styleName="about__content">
          <h2 styleName="about__title">About me</h2>
          <Image styleName="about__image" src="/images/me.jpg" alt="a picture of myself" width={300} height={300}/>
          <p styleName="about__description">
            Reprehenderit reprehenderit ut voluptate sint irure occaecat id ex.
            Pariatur labore exercitation tempor fugiat ad quis minim do sit
            ullamco do dolore sunt officia. Qui mollit consectetur in id
            adipisicing commodo magna ipsum minim ullamco nostrud commodo
            exercitation. Aliquip fugiat laboris et nostrud enim minim sint.
            <br />
            <br />
            Sit pariatur dolor anim adipisicing nulla consequat tempor ullamco
            veniam. Velit est exercitation excepteur ex incididunt sit enim ut
            veniam magna irure. Qui minim occaecat ut cupidatat cillum. Eu
            excepteur est ut esse qui. Consequat labore cupidatat culpa elit
            aliqua aliquip irure consectetur cillum veniam deserunt in. Veniam
            consectetur dolor elit id cupidatat.
            <br />
            <br />
            Quis aute proident fugiat reprehenderit veniam cupidatat ullamco
            nisi ad. Mollit officia magna labore aliqua occaecat. Do sunt eu
            velit non aliqua aliqua. Duis occaecat nulla culpa in incididunt
            pariatur.
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
