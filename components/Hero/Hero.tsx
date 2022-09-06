/* eslint-disable react/no-unknown-property */
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import CSSModules from "react-css-modules";
import styles from "./Hero.module.css";
import { GrLinkedinOption } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import animation from "../../public/svg/animation.svg";
import BackgroundAnimation from "../BackgroundImage/BackgroundImage";

const Hero: FC = () => {
  return (
    <div styleName="hero">
      <div styleName="hero__intro">
        <div styleName="hero__text">
          <div styleName="hero__hello">
            <img styleName="hero__dots" src="/svg/small-dots.svg" alt="dots" width={150} height={150} />
            <p styleName="hero__hi">Hi, I'm-</p>
            <h1 styleName="hero__name">Tony Isern</h1>
          </div>
          <div styleName="hero__position">
            <p styleName="hero__description">
              Studying Computer Science with the goal of becoming{" "}
              <span styleName="hero__colorful">a Web Developer</span>
              <span styleName="hero__dash">_</span>
            </p>
          </div>
        </div>
        <BackgroundAnimation />
      </div>
      <div styleName="hero__links">
        <Link href="">
          <button styleName="hero__button">
            <GrLinkedinOption styleName="hero__icon" />
            LinkedIn
          </button>
        </Link>
        <Link href="">
          <button styleName="hero__button">
            <AiFillGithub styleName="hero__icon" />
            Github
          </button>
        </Link>
        <Link href="">
          <button styleName="hero__button">
            <HiOutlineMail styleName="hero__icon" />
            Email
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CSSModules(Hero, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "log",
});
