/* eslint-disable react/no-unknown-property */
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import greenDot from "../../public/svg/green-dot.svg";
import code from "../../public/svg/code.svg";
import styles from "./Project.module.css";
import CSSModules from "react-css-modules";

const Project: FC = () => {
  return (
    <div styleName="project__project">
      <div styleName="project__details">
        <div styleName="project__content">
          <h2 styleName="project__title">REDDIT CLONE</h2>
          <i
            className="devicon-react-original colored"
            styleName="project__icon"
          ></i>
          <i
            className="devicon-css3-plain colored"
            styleName="project__icon"
          ></i>
          <i
            className="devicon-javascript-plain colored"
            styleName="project__icon"
          ></i>
          <i
            className="devicon-jest-plain colored"
            styleName="project__icon"
          ></i>
          <p styleName="project__description">
            Enim dolor in adipisicing anim pariatur. Ea id quis voluptate Lorem
            ipsum dolore occaecat incididunt adipisicing incididunt dolore sit
            officia. Labore exercitation est duis voluptate. Excepteur elit aute
            dolore officia eiusmod nulla dolor cupidatat. Magna occaecat aute
            aliquip adipisicing non duis non dolore cupidatat nostrud tempor
            consequat reprehenderit. Duis ex nisi esse consequat eu amet dolor
            voluptate in deserunt velit cillum.
          </p>
        </div>
        <div styleName="project__buttons">
            <Link href="">
              <div styleName="project__button-container">
                <Image src="/svg/green-dot.svg" alt="green dot" width={48} height={48} />
                <button styleName="project__button">LIVE</button>
              </div>
            </Link>
            <Link href="">
              <div styleName="project__button-container">
                <Image src="/svg/code.svg" alt="terminal shell" width={48} height={48} />
                <button styleName="project__button">CODE</button>
              </div>
            </Link>
        </div>
      </div>
        <Image
          styleName="project__image"
          src="/images/app.png"
          alt="project"
          width={1250}
          height={600}
        />
    </div>
  );
};

export default CSSModules(Project, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "log",
});
