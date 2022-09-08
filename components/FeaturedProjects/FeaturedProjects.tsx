/* eslint-disable react/no-unescaped-entities */
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
      <h2 styleName="projects__title">Featured Projects</h2>
      <p styleName="projects__description">
        I love building all kinds of things. Here's some of my better work.
      </p>
      <Link href="/projects" styleName="projects__link">
        <p styleName="projects__text">Explore more →</p>
      </Link>
      <Project
        id="1"
        title="Reddit Clone"
        description="A clone based on Reddit. Users can create communities, create posts, comment on posts, and like posts. Users can also view their profile to see which posts they saved and upvoted. Built with React.js and Firebase and works well on mobile devices."
        codeLink="https://github.com/OptimisticTrousers/reddit-clone"
        liveLink="http://optimistictrousers.github.io/reddit-clone"
        video="/video/reddit.webm"
        render={() => (
          <>
            <i
              className="devicon-react-original colored"
              styleName="project__icon"
            ></i>
            <i
              styleName="project__icon"
              className="devicon-firebase-plain colored"
            ></i>
            <i
              className="devicon-css3-plain colored"
              styleName="project__icon"
            ></i>
            <i
              className="devicon-jest-plain colored"
              styleName="project__icon"
            ></i>
            <i
              className="devicon-typescript-plain colored"
              styleName="project__icon"
            ></i>
            <i
              className="devicon-redux-original colored"
              styleName="project__icon"
            ></i>
          </>
        )}
      />
      <Project
        id="2"
        title="Where's Waldo?"
        description="A game based on the British game, 'Where's Waldo', where you are on a quest to find Waldo and his friends! Drag your mouse around the image to find them! A game built with React.js and Firebase."
        liveLink="https://optimistictrousers.github.io/TOP-wheres-waldo/"
        codeLink="https://github.com/OptimisticTrousers/TOP-wheres-waldo"
        video="/video/waldo.webm"
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
            <i
              styleName="project__icon"
              className="devicon-firebase-plain colored"
            ></i>
          </>
        )}
      />
      <Project
        id="3"
        title="Battleship"
        description="A game based on Battleship, a turn-based game. One of the more challenging projects. Built with HTML, CSS, and Javascript. Using Jest for unit testing. Users can drag their ships onto the board and play with an AI. Users can also randomize their board selection."
        liveLink="https://optimistictrousers.github.io/TOP-battleship/"
        codeLink="https://github.com/OptimisticTrousers/TOP-battleship"
        video="/video/battleship.webm"
        render={() => (
          <>
            <i
              className="devicon-html5-plain-wordmark colored"
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
