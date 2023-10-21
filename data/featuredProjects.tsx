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
        isPriority: false,
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
    title: "Reddit Clone",
    description:
      "A clone based on Reddit. Users can create communities, create posts, comment on posts, and like posts. Users can also view their profile to see which posts they saved and upvoted. Built with React.js and Firebase and works well on mobile devices.",
    codeLink: "https://github.com/OptimisticTrousers/reddit-clone",
    liveLink: "http://optimistictrousers.github.io/reddit-clone",
    images: [
      {
        isPriority: false,
        src: "/images/reddit/tilt.webp",
        alt: "Screenshot of a Reddit clone webpage with a dark theme. Features a post about a 'Steampunk Labrador' NFT and another post titled 'This is a cat'. On the right, there's a sidebar displaying top communities like 'NFT', 'bernke', and 'big'.",
      },
      {
        isPriority: false,
        src: "/images/reddit/phone.webp",
        alt: "Mobile view of the Reddit clone showing the NFT community. Posts include questions about cryptocurrency and an NFT titled '01_GLASHUTTE_AdobeExpress'.",
      },
      {
        isPriority: false,
        src: "/images/reddit/laptop.webp",
        alt: "A desktop monitor displaying a login popup on the Reddit clone site. It offers options to continue with Google or to enter an email and password.",
      },
      {
        isPriority: false,
        src: "/images/reddit/browser.webp",
        alt: "A screenshot of a Reddit profile page. The top bar displays the Reddit logo and search bar. The right side of the page features a profile picture of an animated character with a Santa hat, labeled 'Tony Isern'. Below the profile picture, there is information indicating that the user joined 'a year ago' and their cake day is 'Tue, 23 Aug 2022 12:47:42 GMT'. The left side showcases three Reddit posts made by the user 'Tony Isern' in different subreddits titled 'r/more chicken', 'r/makeup', and 'r/chicken' with respective post titles 'HEY THIS IS A POST', 'MAKEUP TIPS', and 'IT WORKS'",
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
      "Fullstack web application built with SQLite, React.js and Node.js. Using Material React Table for tabular data. Using several component libraries such as Chakra, Material UI, Mantine, and Bulma for styling. Deployed API with a Digital Ocean droplet, configured with an NGINX reverse proxy, added an SSL certificate using Let's Encrypt, and served over HTTPS.",
    liveLink: "https://cooking-recipes-portal.netlify.app/",
    codeLink: "https://github.com/OptimisticTrousers/cooking-recipe-portal",
    images: [
      {
        isPriority: false,
        src: "/images/cooking-recipes/tilt.webp",
        alt: "Homepage of the 'Cooking Recipes Portal' website with vibrant images of various dishes, including chicken wings, roasted vegetables, and a greeting message promoting home cooking.",
      },
      {
        isPriority: false,
        src: "/images/cooking-recipes/phone.webp",
        alt: "Mobile view of a recipe titled 'Tasty Brekkie Casserole' under the breakfast category, authored by Michael Cross, with a list of ingredients for the casserole base.",
      },
      {
        isPriority: false,
        src: "/images/cooking-recipes/laptop.webp",
        alt: "Content editing interface for the 'Tasty Brekkie Casserole' recipe, displaying fields for title, author, and the main content with formatting tools. The detailed recipe instructions are visible in the content area.",
      },
      {
        isPriority: false,
        src: "/images/reddit/browser.webp",
        alt: "Screenshot of a recipe web application's table page. It has a navigation bar with 'Recipes' and 'Categories' tabs. Below, there's a button labeled 'Create Recipe'. A table displays recipes with columns for actions, ID, title, author, content, category, and creation date. Two recipes are shown: 'Tasty Brekkie Casserole' by Michael Cross in the 'Breakfast' category and 'Fried Polenta Panzanella' by Jocelyn Alfonso in the 'Lunch' category. Both recipes have a brief description and method.",
      },
    ],
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
          styleName="project__icon"
          className="devicon-nginx-original-wordmark colored"
        ></i>
        <i
          styleName="project__icon"
          className="devicon-digitalocean-plain-wordmark colored"
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
