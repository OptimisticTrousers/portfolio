/* eslint-disable react/no-unknown-property */
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import CSSModules from "react-css-modules";
import styles from "./FeaturedProjects.module.css";
import greenDot from "../../public/svg/green-dot.svg";
import code from "../../public/svg/code.svg";

const FeaturedProjects: FC = () => {
  return (
    <div styleName="projects">
      <h1>Featured Projects</h1>
      <Link href="/">Explore more</Link>
      <div styleName="projects__project">
        <Image
          src="/optimistictrousers.jpg"
          alt="project"
          width={650}
          height={326}
        />
        <div styleName="projects__details">
          <h2>REDDIT CLONE</h2>
          <i
            className="devicon-react-original colored"
            styleName="projects__icon"
          ></i>
          <i
            className="devicon-css3-plain colored"
            styleName="projects__icon"
          ></i>
          <i
            className="devicon-javascript-plain colored"
            styleName="projects__icon"
          ></i>
          <i
            className="devicon-jest-plain colored"
            styleName="projects__icon"
          ></i>
          <p styleName="projects__description">
            Enim dolor in adipisicing anim pariatur. Ea id quis voluptate Lorem
            ipsum dolore occaecat incididunt adipisicing incididunt dolore sit
            officia. Labore exercitation est duis voluptate. Excepteur elit aute
            dolore officia eiusmod nulla dolor cupidatat. Magna occaecat aute
            aliquip adipisicing non duis non dolore cupidatat nostrud tempor
            consequat reprehenderit. Duis ex nisi esse consequat eu amet dolor
            voluptate in deserunt velit cillum.
          </p>
          <div styleName="projects__buttons">
            <div styleName="projects__button-container">
              <Link href="">
                <div>
                  <Image
                    src={greenDot}
                    alt="green dot"
                    width={48}
                    height={48}
                  />
                  <button styleName="project__button">LIVE</button>
                </div>
              </Link>
            </div>
            <div styleName="projects__button-container">
              <Link href="">
                <div>
                  <Image
                    src={code}
                    alt="terminal shell"
                    width={48}
                    height={48}
                  />
                  <button styleName="projects__button">CODE</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div styleName="projects__project">
        <div styleName="projects__details">
          <h2>REDDIT CLONE</h2>
          <i
            className="devicon-react-original colored"
            styleName="projects__icon"
          ></i>
          <i
            className="devicon-css3-plain colored"
            styleName="projects__icon"
          ></i>
          <i
            className="devicon-javascript-plain colored"
            styleName="projects__icon"
          ></i>
          <i
            className="devicon-jest-plain colored"
            styleName="projects__icon"
          ></i>
          <p styleName="projects__description">
            Enim dolor in adipisicing anim pariatur. Ea id quis voluptate Lorem
            ipsum dolore occaecat incididunt adipisicing incididunt dolore sit
            officia. Labore exercitation est duis voluptate. Excepteur elit aute
            dolore officia eiusmod nulla dolor cupidatat. Magna occaecat aute
            aliquip adipisicing non duis non dolore cupidatat nostrud tempor
            consequat reprehenderit. Duis ex nisi esse consequat eu amet dolor
            voluptate in deserunt velit cillum.
          </p>
          <div styleName="projects__buttons">
            <div styleName="projects__button-container">
              <Link href="">
                <div>
                  <Image
                    src={greenDot}
                    alt="green dot"
                    width={48}
                    height={48}
                  />
                  <button styleName="project__button">LIVE</button>
                </div>
              </Link>
            </div>
            <div styleName="projects__button-container">
              <Link href="">
                <div>
                  <Image
                    src={code}
                    alt="terminal shell"
                    width={48}
                    height={48}
                  />
                  <button styleName="projects__button">CODE</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <Image
          src="/optimistictrousers.jpg"
          alt="project"
          width={650}
          height={326}
        />
      </div>

      <div styleName="projects__project">
        <Image
          src="/optimistictrousers.jpg"
          alt="project"
          width={650}
          height={326}
        />
        <div styleName="projects__details">
          <h2>REDDIT CLONE</h2>
          <i
            className="devicon-react-original colored"
            styleName="projects__icon"
          ></i>
          <i
            className="devicon-css3-plain colored"
            styleName="projects__icon"
          ></i>
          <i
            className="devicon-javascript-plain colored"
            styleName="projects__icon"
          ></i>
          <i
            className="devicon-jest-plain colored"
            styleName="projects__icon"
          ></i>
          <p styleName="projects__description">
            Enim dolor in adipisicing anim pariatur. Ea id quis voluptate Lorem
            ipsum dolore occaecat incididunt adipisicing incididunt dolore sit
            officia. Labore exercitation est duis voluptate. Excepteur elit aute
            dolore officia eiusmod nulla dolor cupidatat. Magna occaecat aute
            aliquip adipisicing non duis non dolore cupidatat nostrud tempor
            consequat reprehenderit. Duis ex nisi esse consequat eu amet dolor
            voluptate in deserunt velit cillum.
          </p>
          <div styleName="projects__buttons">
            <div styleName="projects__button-container">
              <Link href="">
                <div>
                  <Image
                    src={greenDot}
                    alt="green dot"
                    width={48}
                    height={48}
                  />
                  <button styleName="project__button">LIVE</button>
                </div>
              </Link>
            </div>
            <div styleName="projects__button-container">
              <Link href="">
                <div>
                  <Image
                    src={code}
                    alt="terminal shell"
                    width={48}
                    height={48}
                  />
                  <button styleName="projects__button">CODE</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSSModules(FeaturedProjects, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "log",
});
