/* eslint-disable react/no-unknown-property */
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import CSSModules from "react-css-modules";
import Project from "../Project/Project";
import styles from "./FeaturedProjects.module.css";

const FeaturedProjects: FC = () => {
  return (
    <div styleName="projects">
      <h1 styleName="projects__title">Featured Projects</h1>
      <p styleName="projects__description">
        I love building all kinds of things. Here's some of my better work.
      </p>
      <Link href="/projects" styleName="projects__link">
        <p styleName="projects__text">Explore more →</p>
      </Link>
      <Project
        title="Reddit Clone"
        description="Enim dolor in adipisicing anim pariatur. Ea id quis voluptate Lorem ipsum dolore occaecat incididunt adipisicing incididunt dolore sit officia. Labore exercitation est duis voluptate. Excepteur elit aute dolore officia eiusmod nulla dolor cupidatat. Magna occaecat aute aliquip adipisicing non duis non dolore cupidatat nostrud tempor consequat reprehenderit. Duis ex nisi esse consequat eu amet dolor voluptate in deserunt velit cillum."
        codeLink="https://github.com/OptimisticTrousers/reddit-clone"
        liveLink="http://optimistictrousers.github.io/reddit-clone"
        render={() => (
          <>
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
          </>
        )}
      />
      <Project
        title="Where's Waldo?"
        description="Enim dolor in adipisicing anim pariatur. Ea id quis voluptate Lorem ipsum dolore occaecat incididunt adipisicing incididunt dolore sit officia. Labore exercitation est duis voluptate. Excepteur elit aute dolore officia eiusmod nulla dolor cupidatat. Magna occaecat aute aliquip adipisicing non duis non dolore cupidatat nostrud tempor consequat reprehenderit. Duis ex nisi esse consequat eu amet dolor voluptate in deserunt velit cillum."
        liveLink="https://optimistictrousers.github.io/TOP-wheres-waldo/"
        codeLink="https://github.com/OptimisticTrousers/TOP-wheres-waldo"
        render={() => (
          <>
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
          </>
        )}
      />
      <Project
        title="Battleship"
        description="Enim dolor in adipisicing anim pariatur. Ea id quis voluptate Lorem ipsum dolore occaecat incididunt adipisicing incididunt dolore sit officia. Labore exercitation est duis voluptate. Excepteur elit aute dolore officia eiusmod nulla dolor cupidatat. Magna occaecat aute aliquip adipisicing non duis non dolore cupidatat nostrud tempor consequat reprehenderit. Duis ex nisi esse consequat eu amet dolor voluptate in deserunt velit cillum."
        liveLink="https://optimistictrousers.github.io/TOP-battleship/"
        codeLink="https://github.com/OptimisticTrousers/TOP-battleship"
        render={() => (
          <>
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
          </>
        )}
      />
    </div>
  );
};

export default CSSModules(FeaturedProjects, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "log",
});
