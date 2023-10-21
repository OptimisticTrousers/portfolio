/* eslint-disable react/no-unknown-property */
import React from "react";
import { nanoid } from "nanoid";

const featuredProjects = [
  {
    id: nanoid(),
    title: "Skyfringe",
    description:
      "A fullstack social media application built using the MERN stack and Typescript. Front-end application is fully tested with Vitest and React Testing Library. Back-end application is tested with Supertest and mongodb-memory-server. AWS S3 is used to store images. Accessibility friendly",
    codeLink: "https://github.com/OptimisticTrousers/skyfringe",
    liveLink: "https://skyfringe.netlify.app/",
    images: [
      {
        isPriority: true,
        src: "/images/skyfringe/browser.webp",
        alt: "Banner image for Monkey D. Luffy's 'Skyfringe' profile, featuring the 'One Piece' crew including Nami, Zoro, Sanji, Chopper, and others.",
      },
      {
        isPriority: false,
        src: "/images/skyfringe/laptop.webp",
        alt: "Sign up page for Skyfringe",
      },
      {
        isPriority: false,
        src: "/images/skyfringe/tilt.webp",
        alt: "Screenshot of the 'Skyfringe' social media platform's navigation pane. Icons include home, friends, notifications, chat, settings, and log out.",
      },
      {
        isPriority: false,
        src: "/images/skyfringe/phone.webp",
        alt: "Phone perspective of the chat section of Skyfringe",
      },
    ],
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
    title: "Where's Waldo?",
    description:
      "A game based on the British game, 'Where's Waldo', where you are on a quest to find Waldo and his friends! Drag your mouse around the image to find them! A game built with React.js and Firebase.",
    liveLink: "https://optimistictrousers.github.io/wheres-waldo/",
    codeLink: "https://github.com/OptimisticTrousers/wheres-waldo",
    images: [
      {
        isPriority: false,
        src: "/images/wheres-waldo/tilt.webp",
        alt: "Screenshot of a web browser displaying a 'Where's Waldo?' themed game hosted on GitHub. The game provides a leaderboard and instructions at the top. Below, there are three levels displayed in thumbnail format, each showing a crowded scene. On the right side, there's a timer set to 1 minute, alongside character icons of Odlaw, Waldo, Wilma, and Wizard. A notice instructs players to click on the image to find the characters and warns that switching levels mid-game will lose progress.",
      },
      {
        isPriority: false,
        src: "/images/wheres-waldo/phone.webp",
        alt: "Vertical screenshot of a mobile device displaying a 'Where's Waldo?' themed game. The game showcases a leaderboard button and instructions at the top. Below, three levels are shown with thumbnails of various crowded scenes. On the right edge, a scrollable character guide is present, showing the Wizard character at the top.",
      },
      {
        isPriority: false,
        src: "/images/wheres-waldo/browser.webp",
        alt: "A zoomed-in vertical screenshot of the bottom portion of the mobile version of the 'Where's Waldo?' game. This section displays two level thumbnails: one depicts a festive scene with bright lights and the other, a space-themed scene with planets and spaceships. A purple 'LEVELS' button is seen on the right edge.",
      },
    ],
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
          className="devicon-javascript-plain colored"
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
    title: "HoopGear",
    description:
      "Creating an Express application using MongoDB, Mongoose and Pug. Learned how Express works with routing, middleware, and rendering. Using MongoDB for database and Mongoose to query data. Using Pug for templating. Using the MVC pattern to design the application. Application generated with the express-application-generator command. ",
    liveLink: "https://optimistic-inventory.herokuapp.com/",
    codeLink: "https://github.com/OptimisticTrousers/inventory-application",
    images: [
      {
        isPriority: false,
        src: "/images/inventory/tilt.webp",
        alt: "Website header for 'HoopGear' with a smiling trouser logo. Text announces 'The next generation of basketball apparel'. Two buttons labeled 'Accessories' and 'Footwear'.",
      },
      {
        isPriority: false,
        src: "/images/inventory/phone.webp",
        alt: "Mobile view displaying categories: Accessories with Chicago Bulls items, Footwear showing various basketball shoes, and Jerseys showcasing different NBA team jerseys.",
      },
      {
        isPriority: false,
        src: "/images/inventory/laptop.webp",
        alt: "Desktop view of 'Update Category' with a framed collectible jersey of Wade #3 surrounded by pictures. Text describes NBA collectibles available at the official NBA store.",
      },
      {
        isPriority: false,
        src: "/images/inventory/browser.webp",
        alt: "A desktop webpage displaying the 'Footwear' category. A large illustration of a yellow and blue basketball shoe with the 'KD' logo is on the left.",
      },
    ],
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
          className="devicon-css3-plain-wordmark colored"
          styleName="project__icon"
        ></i>
        <i
          className="devicon-html5-plain-wordmark colored"
          styleName="project__icon"
        ></i>
        <i
          className="devicon-javascript-plain colored"
          styleName="project__icon"
        ></i>
      </>
    ),
  },
];

export default featuredProjects;
