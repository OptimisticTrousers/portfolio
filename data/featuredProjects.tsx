/* eslint-disable react/no-unknown-property */
import React from "react";
import { nanoid } from "nanoid";

const featuredProjects = [
  {
    id: nanoid(),
    title: "Skyfringe",
    description:
      "A fullstack social media application built using the MERN stack and Typescript. Front-end application is fully tested with Vitest and React Testing Library. Back-end application is tested with Supertest and mongodb-memory-server. AWS S3 is used to store images. Currently not finished and still in progress.",
    codeLink: "https://github.com/OptimisticTrousers/skyfringe",
    liveLink: "https://github.com/OptimisticTrousers/skyfringe",
    media: "/video/skyfringe.webm",
    render: () => (
      <>
        <i
          className="devicon-mongodb-plain-wordmark colored"
          styleName="project__icon"
        ></i>
        <i
          className="devicon-express-original-wordmark"
          styleName="project__icon"
        ></i>
        <i
          className="devicon-react-original-wordmark colored"
          styleName="project__icon"
        ></i>
        <i
          className="devicon-nodejs-plain-wordmark colored"
          styleName="project__icon"
        ></i>
        <i
          className="devicon-css3-plain-wordmark colored"
          styleName="project__icon"
        ></i>
        <i
          className="devicon-typescript-plain colored"
          styleName="project__icon"
        ></i>
        <i
          className="devicon-amazonwebservices-plain-wordmark colored"
          styleName="project__icon"
        ></i>
        <i className="devicon-jest-plain colored" styleName="project__icon"></i>
      </>
    ),
  },
  {
    id: nanoid(),
    title: "Reddit Clone",
    description:
      "A clone based on Reddit. Users can create communities, create posts, comment on posts, and like posts. Users can also view their profile to see which posts they saved and upvoted. Built with React.js and Firebase and works well on mobile devices.",
    codeLink: "https://github.com/OptimisticTrousers/reddit-clone",
    liveLink: "http://optimistictrousers.github.io/reddit-clone",
    media: "/video/reddit.webm",
    render: () => (
      <>
        <i
          className="devicon-react-original-wordmark colored"
          styleName="project__icon"
        ></i>
        <i
          className="devicon-css3-plain-wordmark colored"
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
        <i
          className="devicon-firebase-plain-wordmark colored"
          styleName="project__icon"
        ></i>
        <i className="devicon-jest-plain colored" styleName="project__icon"></i>
      </>
    ),
  },
  {
    id: nanoid(),
    title: "Cooking Recipes Application",
    description:
      "Fullstack web application built with SQLite, React.js and Node.js. Using Material React Table for tabular data. Using several component libraries such as Chakra, Material UI, Mantine, and Bulma for styling. Not yet deployed.",
    liveLink: "https://github.com/OptimisticTrousers/cooking-recipe-portal",
    codeLink: "https://github.com/OptimisticTrousers/cooking-recipe-portal",
    media: "/images/cooking-recipes.png",
    render: () => (
      <>
        <i
          className="devicon-sqlite-plain-wordmark colored"
          styleName="project__icon"
        ></i>
        <i
          className="devicon-express-original-wordmark"
          styleName="project__icon"
        ></i>
        <i
          className="devicon-react-original-wordmark colored"
          styleName="project__icon"
        ></i>
        <i
          className="devicon-nodejs-plain-wordmark colored"
          styleName="project__icon"
        ></i>
        <i
          className="devicon-css3-plain-wordmark colored"
          styleName="project__icon"
        ></i>
        <i
          className="devicon-javascript-plain colored"
          styleName="project__icon"
        ></i>
        <i
          className="devicon-materialui-plain colored"
          styleName="project__icon"
        ></i>
        <i
          className="devicon-bulma-plain colored"
          styleName="project__icon"
        ></i>
      </>
    ),
  },
];

export default featuredProjects;
