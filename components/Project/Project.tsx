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

        <h2>REDDIT CLONE</h2>
        <i
          className="devicon-react-original colored"
          styleName="project__icon"
        ></i>
        <i className="devicon-css3-plain colored" styleName="project__icon"></i>
        <i
          className="devicon-javascript-plain colored"
          styleName="project__icon"
        ></i>
        <i className="devicon-jest-plain colored" styleName="project__icon"></i>
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
          <div styleName="project__button-container">
            <Link href="">
              <div>
                <Image src={greenDot} alt="green dot" width={48} height={48} />
                <button styleName="project__button">LIVE</button>
              </div>
            </Link>
          </div>
          <div styleName="project__button-container">
            <Link href="">
              <div>
                <Image src={code} alt="terminal shell" width={48} height={48} />
                <button styleName="project__button">CODE</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* <img
        styleName="project__image"
        src="/images/reddit-clone.png"
        alt="project"
      /> */}
    </div>
  );
};

export default CSSModules(Project, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "log",
});
