/* eslint-disable react/no-unknown-property */
import Image from "next/image";
import Link from "next/link";
import { FC, ReactElement, ReactNode } from "react";
import greenDot from "../../public/svg/green-dot.svg";
import code from "../../public/svg/code.svg";
import styles from "./Project.module.css";
import CSSModules from "react-css-modules";
import { motion } from "framer-motion";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

interface Props {
  id: string;
  title: string;
  description: string;
  liveLink: string;
  codeLink: string;
  images?: {
    isPriority: boolean;
    src: string;
    alt: string;
  }[];
  video?: string;
  reverse: boolean;
  render: () => ReactNode;
}

const cardVariants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const Project: FC<Props> = ({
  title,
  description,
  liveLink,
  codeLink,
  images,
  video,
  reverse,
  render,
}) => {
  return (
    <motion.section
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      styleName={`project`}
    >
      {images && <ImageCarousel images={images} />}
      {video && (
        <video styleName="project__image" autoPlay muted loop>
          <source src={video} type="video/webm" />
        </video>
      )}
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
                width={56}
                height={56}
              />
              <div styleName="project__div">
                <button styleName="project__button">LIVE</button>
              </div>
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
                width={56}
                height={56}
              />
              <div styleName="project__div">
                <button styleName="project__button">CODE</button>
              </div>
            </div>
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default CSSModules(Project, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "ignore",
});
