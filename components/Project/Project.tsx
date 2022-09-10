/* eslint-disable react/no-unknown-property */
import Image from "next/image";
import Link from "next/link";
import { FC, ReactElement } from "react";
import greenDot from "../../public/svg/green-dot.svg";
import code from "../../public/svg/code.svg";
import styles from "./Project.module.css";
import CSSModules from "react-css-modules";

interface Props {
  id: string;
  title: string;
  description: string;
  liveLink: string;
  codeLink: string;
  video?: string;
  reverse: boolean;
  render: () => any;
}

const Project: FC<Props> = ({
  title,
  description,
  liveLink,
  codeLink,
  video,
  reverse,
  render,
}) => {
  return (
    <section styleName={`project ${reverse && "reverse"}`}>
      <div styleName="project__details">
        <div styleName="project__content">
          <h3 styleName="project__title">{title}</h3>
          <div styleName="project__icons">{render()}</div>
          <p styleName="project__description">{description}</p>
        </div>
        <div styleName="project__buttons">
          <a
            href={liveLink}
            target="_blank"
            rel="noreferrer"
            aria-label={`open live ${title} project(opens in new tab)`}
          >
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
          <a
            href={codeLink}
            target="_blank"
            rel="noreferrer"
            aria-label={`open code repository for ${title}(opens in new tab to Github)`}
          >
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
      <div>
        <video styleName="project__image" autoPlay muted loop>
          <source src={video} type="video/webm" />{" "}
        </video>
      </div>
    </section>
  );
};

export default CSSModules(Project, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "ignore",
});
