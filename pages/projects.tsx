/* eslint-disable react/no-unknown-property */
import { NextPage } from "next";
import { FC } from "react";
import CSSModules from "react-css-modules";
import Layout from "../components/Layout/Layout";
import Project from "../components/Project/Project";
import styles from "../styles/Projects.module.css";
import { nanoid } from "nanoid";
import Footer from "../components/Footer/Footer";

const projects = [
  {
    id: nanoid(),
    title: "Reddit Clone",
    description:
      "A clone based on Reddit. Users can create communities, create posts, comment on posts, and like posts. Users can also view their profile to see which posts they saved and upvoted. Built with React.js and Firebase and works well on mobile devices.",
    codeLink: "https://github.com/OptimisticTrousers/reddit-clone",
    liveLink: "http://optimistictrousers.github.io/reddit-clone",
    video: "/video/reddit.webm",
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
    id: nanoid(),
    title: "Inventory Application",
    description:
      "Creating an Express application using MongoDB, Mongoose and Pug. Learned how Express works with routing, middleware, and rendering. Using MongoDB for database and Mongoose to query data. Using Pug for templating. Using the MVC pattern to design the application. Application generated with the express-application-generator command. ",
    liveLink: "https://rocky-tundra-71808.herokuapp.com/",
    codeLink: "https://github.com/OptimisticTrousers/inventory-application",
    video: "/video/inventory-application.webm",
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
    id: nanoid(),
    title: "Battleship",
    description:
      "A game based on Battleship, a turn-based game. One of the more challenging projects. Built with HTML, CSS, and Javascript. Using Jest for unit testing. Users can drag their ships onto the board and play with an AI. Users can also randomize their board selection.",
    liveLink: "https://optimistictrousers.github.io/TOP-battleship/",
    codeLink: "https://github.com/OptimisticTrousers/TOP-battleship",
    video: "/video/battleship.webm",
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
  {
    id: nanoid(),
    title: "Where's Waldo?",
    description:
      "A game based on the British game, 'Where's Waldo', where you are on a quest to find Waldo and his friends! Drag your mouse around the image to find them! A game built with React.js and Firebase.",
    liveLink: "https://optimistictrousers.github.io/TOP-wheres-waldo/",
    codeLink: "https://github.com/OptimisticTrousers/TOP-wheres-waldo",
    video: "/video/waldo.webm",
    render: () => (
      <>
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
      </>
    ),
  },
  {
    id: nanoid(),
    title: "IWANCIW Functional Funware",
    description: `Built an ecommerce site for a fashion business. Technologies used are React.js, Next.js, TailwindCSS, GraphQL(Shopify Storefront API), Typescript, EmailJS, the Typeform Embedded SDK and the Omnisend API. Deployed with Netlify. Currently not open-source. Will be in the future. `,
    liveLink: "iwanciw.com",
    codeLink: "https://github.com/OptimisticTrousers",
    video: "/video/iwanciw.webm",
    render: () => (
      <>
        <i
          className="devicon-react-original colored"
          styleName="project__icon"
        ></i>
        <i className="devicon-css3-plain colored" styleName="project__icon"></i>
        <i
          className="devicon-typescript-plain colored"
          styleName="project__icon"
        ></i>
        <i
          className="devicon-graphql-plain-wordmark colored"
          styleName="project__icon"
        ></i>
      </>
    ),
  },
  {
    id: nanoid(),
    title: "Members Only",
    description: `Creating an members only, which is an exclusive clubhouse-like application. Allows users to sign in, log in, make posts, and view posts. If the user is able to enter a special passcode, they will be members of the club! If the user is also able to enter another password, they will be admins of the application, allowing them to delete posts.`,
    liveLink: "https://powerful-dusk-69121.herokuapp.com/",
    codeLink: "https://github.com/OptimisticTrousers/members-only",
    video: "/video/members-only.webm",
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
    id: nanoid(),
    title: "Shopping Cart",
    description:
      "Creating a multi-page application with react-router-dom, using Testing Library and Jest to test, and learning how to use context. Not functional when it comes to checkout.",
    liveLink: "https://optimistictrousers.github.io/TOP-shopping-cart/",
    codeLink: "https://github.com/OptimisticTrousers/TOP-shopping-cart",
    video: "/video/shopping-cart.webm",
    render: () => (
      <>
        <i
          className="devicon-react-original colored"
          styleName="project__icon"
        ></i>
        <i
          className="devicon-javascript-plain colored"
          styleName="project__icon"
        ></i>
        <i className="devicon-css3-plain colored" styleName="project__icon"></i>
        <i className="devicon-jest-plain colored" styleName="project__icon"></i>
      </>
    ),
  },
  {
    id: nanoid(),
    title: "Tic Tac Toe",
    description:
      "Practicing DOM Manipulating and learned about the minimax algorithm, which is an algorithm that allows for the computer to make optimal moves in turn-based games such as tic-tac-toe or chess.",
    liveLink: "https://optimistictrousers.github.io/TOP-tic-tac-toe/",
    codeLink: "https://github.com/OptimisticTrousers/TOP-tic-tac-toe",
    video: "/video/tic-tac-toe.webm",
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
      </>
    ),
  },
  {
    id: nanoid(),
    title: "Weather App",
    description:
      "Learned about asynchronous programming with Javascript. Learned about the event loop, and single-threaded nature of Javascript. Learned about callbacks, promises, async and await, and fetched weather data from an API to render onto the page. Had lots of fun making this",
    liveLink: "https://optimistictrousers.github.io/TOP-weather-app/",
    codeLink: "https://github.com/OptimisticTrousers/TOP-weather-app",
    video: "/video/weather-app.webm",
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
      </>
    ),
  },
  {
    id: nanoid(),
    title: "CV Application",
    description: `Created a curriculum vitae(CV)/resume builder. User can create, read, update, and delete content. User can upload images. This CV Application allows you to create and customize your CV, along with additional information about yourself`,
    liveLink: "https://optimistictrousers.github.io/TOP-cv-project/",
    codeLink: "https://github.com/OptimisticTrousers/TOP-cv-project",
    video: "/video/cv-application.webm",
    render: () => (
      <>
        <i
          className="devicon-react-original colored"
          styleName="project__icon"
        ></i>
        <i
          className="devicon-javascript-plain colored"
          styleName="project__icon"
        ></i>
        <i className="devicon-css3-plain colored" styleName="project__icon"></i>
      </>
    ),
  },
  {
    id: nanoid(),
    title: "Etch-a-Sketch",
    description:
      "A project that allows users to draw on the board, re-size the board, change colors, etc.",
    liveLink: "https://optimistictrousers.github.io/TOP-etch-a-sketch/",
    codeLink: "https://github.com/OptimisticTrousers/TOP-etch-a-sketch",
    video: "/video/etch-a-sketch.webm",
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
      </>
    ),
  },
  {
    id: nanoid(),
    title: "Rock, Paper, Scissors",
    description:
      "Creating a Minecraft style Rock, Paper, Scissors. You play against the CPU. First to five wins!",
    liveLink: "https://optimistictrousers.github.io/TOP-rock-paper-scissors/",
    codeLink: "https://github.com/OptimisticTrousers/TOP-rock-paper-scissors",
    video: "/video/rock-paper-scissors.webm",
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
      </>
    ),
  },
  {
    id: nanoid(),
    title: "Java Breakout Game",
    description:
      "Created a Java Breakout game using Java libaries JPanel, ActionListener, KeyListener, and AWT Font. ",
    liveLink: "",
    codeLink: "https://github.com/OptimisticTrousers/Java-breakoutGame",
    video: "/video/breakout.webm",
    render: () => (
      <i styleName="project__icon" className="devicon-java-plain colored"></i>
    ),
  },
  {
    id: nanoid(),
    title: "Java Snake Game",
    description:
      "Created a beakout game using Java using JPanel, KeyListener, Action Listener, and Color libraries. ",
    liveLink: "",
    codeLink: "https://github.com/OptimisticTrousers/Java2DSnake",
    video: "/video/snake.webm",
    render: () => (
      <i styleName="project__icon" className="devicon-java-plain colored"></i>
    ),
  },
];

const Projects: NextPage = () => {
  return (
    <Layout>
      <>
        <h1>Projects</h1>
        {projects.map((project, index) => (
          <Project key={project.id} {...project} reverse={index % 2 === 0} />
        ))}
      </>
    </Layout>
  );
};

export default CSSModules(Projects, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "ignore",
});
