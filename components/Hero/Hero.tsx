/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import { FC } from "react";
import CSSModules from "react-css-modules";
import styles from "./Hero.module.css";
import BackgroundAnimation from "../BackgroundImage/BackgroundImage";
import ButtonLinks from "../ButtonLinks/ButtonLinks";
import Typed from "react-typed";

const typedStrings = [
  "Web Developer",
  "Software Engineer",
  "Developer",
  "Programmer",
];

const Hero: FC = () => {
  return (
    <div styleName="hero">
      <div styleName="hero__intro">
        <div styleName="hero__text">
          <div styleName="hero__hello">
            <p styleName="hero__hi">Hi, I'm-</p>
            <img
              styleName="hero__dots"
              src="/svg/small-dots.svg"
              alt="dots"
              width={150}
              height={150}
            />
            <h1 styleName="hero__name">Tony Isern</h1>
          </div>
          <div styleName="hero__position">
            <p styleName="hero__description">
              Studying Computer Science with the goal of becoming a{" "}
              <span styleName="hero__colorful">
                <Typed
                  strings={typedStrings}
                  typeSpeed={40}
                  backSpeed={50}
                  loop={true}
                  startDelay={1000}
                />
              </span>
              <span styleName="hero__dash">_</span>
            </p>
          </div>
        </div>
        <BackgroundAnimation />
      </div>
      <ButtonLinks />
    </div>
  );
};

export default CSSModules(Hero, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "ignore",
});
