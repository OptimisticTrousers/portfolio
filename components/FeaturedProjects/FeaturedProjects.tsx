/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import CSSModules from "react-css-modules";
import Project from "../Project/Project";
import styles from "./FeaturedProjects.module.css";

const featuredProjects = [
  {
    id: nanoid(),
    title: "Reddit Clone",
    description:
      "A clone based on Reddit. Users can create communities, create posts, comment on posts, and like posts. Users can also view their profile to see which posts they saved and upvoted. Built with React.js and Firebase and works well on mobile devices.",
    codeLink: "https://github.com/OptimisticTrousers/reddit-clone",
    liveLink: "http://optimistictrousers.github.io/reddit-clone",
    media: "/images/reddit-clone.png",
    render: () => (
      <>
        <i
          className="devicon-react-original colored"
          styleName="project__icon"
        ></i>
        <i
          styleName="project__icon"
          className="devicon-firebase-plain colored"
        ></i>
        <i className="devicon-css3-plain colored" styleName="project__icon"></i>
        <i className="devicon-jest-plain colored" styleName="project__icon"></i>
        <i
          className="devicon-typescript-plain colored"
          styleName="project__icon"
        ></i>
        <i
          className="devicon-redux-original colored"
          styleName="project__icon"
        ></i>
      </>
    ),
  },
  {
    id: "2",
    title: "Inventory Application",
    description:
      "Creating an Express application using MongoDB, Mongoose and Pug. Learned how Express works with routing, middleware, and rendering. Using MongoDB for database and Mongoose to query data. Using Pug for templating. Using the MVC pattern to design the application. Application generated with the express-application-generator command. ",
    liveLink: "https://rocky-tundra-71808.herokuapp.com/",
    codeLink: "https://github.com/OptimisticTrousers/inventory-application",
    media: "/images/inventory-application.png",
    render: () => (
      <>
        <i
          className="devicon-express-original colored"
          styleName="project__icon"
        ></i>
        <i className="devicon-css3-plain colored" styleName="project__icon"></i>
        <i
          className="devicon-javascript-plain colored"
          styleName="project__icon"
        ></i>
        <i className="devicon-mongodb-plain" styleName="project__icon"></i>
      </>
    ),
  },
  {
    id: "3",
    title: "Battleship",
    description:
      "A game based on Battleship, a turn-based game. One of the more challenging projects. Built with HTML, CSS, and Javascript. Using Jest for unit testing. Users can drag their ships onto the board and play with an AI. Users can also randomize their board selection.",
    liveLink: "https://optimistictrousers.github.io/TOP-battleship/",
    codeLink: "https://github.com/OptimisticTrousers/TOP-battleship",
    media: "/images/battleship.png",
    render: () => (
      <>
        <i
          className="devicon-html5-plain-wordmark colored"
          styleName="project__icon"
        ></i>
        <i className="devicon-css3-plain colored" styleName="project__icon"></i>
        <i
          className="devicon-javascript-plain colored"
          styleName="project__icon"
        ></i>
        <i className="devicon-jest-plain colored" styleName="project__icon"></i>
      </>
    ),
  },
];

const FeaturedProjects: FC = () => {
  return (
    <div styleName="projects">
      <h2 styleName="projects__title">Featured Projects</h2>
      <p styleName="projects__description">
        I love building all kinds of things. Here's some of my better work.
      </p>
      <Link
        href="/projects"
        styleName="projects__link"
        aria-label="projects page"
      >
        <p styleName="projects__text">Explore more →</p>
      </Link>
      {featuredProjects.map((featuredProject, index) => (
        <Project
          key={featuredProject.id}
          {...featuredProject}
          reverse={index % 2 === 0}
        />
      ))}
    </div>
  );
};

export default CSSModules(FeaturedProjects, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "ignore",
});
