/* eslint-disable react/no-unknown-property */
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import greenDot from "../../public/svg/green-dot.svg";
import code from "../../public/svg/code.svg";
import styles from "./Project.module.css";
import CSSModules from "react-css-modules";

interface Props {
  title: string;
  description: string;
  liveLink: string;
  codeLink: string;
  render: () => any
}

const Project: FC<Props> = ({ title, description, liveLink, codeLink, render}) => {
  return (
    <div styleName="project__project">
      <div styleName="project__details">
        <div styleName="project__content">
          <h2 styleName="project__title">{title}</h2>
          <div styleName="project__icons">
            {render()}
          </div>
          <p styleName="project__description">
            {description}
          </p>
        </div>
        <div styleName="project__buttons">
          <a href={liveLink} target="_blank" rel="noreferrer">
            <div styleName="project__button-container">
              <Image
                src="/svg/green-dot.svg"
                alt="green dot"
                width={48}
                height={48}
              />
              <button styleName="project__button">LIVE</button>
            </div>
          </a>
          <a href={codeLink} target="_blank" rel="noreferrer">
            <div styleName="project__button-container">
              <Image
                src="/svg/code.svg"
                alt="terminal shell"
                width={48}
                height={48}
              />
              <button styleName="project__button">CODE</button>
            </div>
          </a>
        </div>
      </div>
      <img
        styleName="project__image"
        src="/images/app.png"
        alt="project"
        width={625}
      />
    </div>
  );
};

export default CSSModules(Project, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "log",
});
