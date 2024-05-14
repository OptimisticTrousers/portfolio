/* eslint-disable react/no-unknown-property */
import React from "react";
import { nanoid } from "nanoid";

const projects = [
  {
    id: nanoid(),
    title: "Skyfringe",
    description:
      "A fullstack social media application built using the MERN stack and Typescript. Front-end application is fully tested with Vitest and React Testing Library. Back-end application is tested with Supertest and mongodb-memory-server. AWS S3 is used to store images. Accessibility friendly. Please do not use Safari when accessing this app as Safari blocks cross-site cookies unless you want to disable the blocking of cross-site cookies.",
    codeLink: "https://github.com/OptimisticTrousers/skyfringe",
    liveLink: "https://skyfringe.netlify.app/",
    images: [
      {
        isPriority: true,
        src: "/images/skyfringe/tilt.webp",
        alt: "Screenshot of the 'Skyfringe' social media platform's navigation pane. Icons include home, friends, notifications, chat, settings, and log out.",
      },
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
        src: "/images/cooking-recipes/browser.webp",
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
    title: "Battleship",
    description:
      "A game based on Battleship, a turn-based game. One of the more challenging projects. Built with HTML, CSS, and Javascript. Using Jest for unit testing. Users can drag their ships onto the board and play with an AI. Users can also randomize their board selection.",
    liveLink: "https://optimistictrousers.github.io/battleship/",
    codeLink: "https://github.com/OptimisticTrousers/battleship",
    images: [
      {
        isPriority: false,
        src: "/images/battleship/tilt.webp",
        alt: "Screenshot of the top portion of a web browser displaying a web-based 'Battleship' game hosted on GitHub. The game's title, 'Battleship', is prominently written in glowing white text against a deep blue background. On the left, there's a 'Rules' button, and below the title, there's an orange grid labeled 'You'.",
      },
      {
        isPriority: false,
        src: "/images/battleship/phone.webp",
        alt: "Vertical screenshot showcasing the gameplay interface of the 'Battleship' game. The top half displays a grid titled 'Computer' with some cells highlighted in green (indicating ships) and some marked with an 'X' (indicating missed shots). The bottom half shows a grid labeled 'You' with some cells having ships and others marked with an 'X'.",
      },
      {
        isPriority: false,
        src: "/images/battleship/browser.webp",
        alt: "Web-based Battleship game with boards labeled 'You' and 'Computer', showing hits and misses. Two buttons below 'You' board for 'Randomize' and 'Reset'. Credit at bottom right: 'Created by Tony Isern'.",
      },
    ],
    render: () => (
      <>
        <i
          className="devicon-html5-plain-wordmark colored"
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
        <i className="devicon-jest-plain colored" styleName="project__icon"></i>
      </>
    ),
  },
  {
    id: nanoid(),
    title: "Blog CMS",
    description:
      "Creating a Blog CMS with React.js and several component libraries. Adding session-based authentication using Passport.js. Creating an CMS for my blog posts, categries, and tags. Fetching content from my blog API to manage my blog through a seperate website. You won't be able to access the CMS because it's only for my personal use. ",
    liveLink: "https://optimistic-blog-cms.netlify.app/",
    codeLink: "https://github.com/OptimisticTrousers/blog-cms",
    images: [
      {
        isPriority: false,
        src: "/images/blog-cms/tilt.webp",
        alt: "Home page of the Blog CMS",
      },
      {
        isPriority: false,
        src: "/images/blog-cms/browser.webp",
        alt: "Desktop view of the Blog CMS editing interface displaying details of a post titled 'The JavaScript Event Loop'. The page includes a text editor and attributes section for post details.",
      },
      {
        isPriority: false,
        src: "/images/blog-cms/laptop.webp",
        alt: "Login page of a Blog CMS on a desktop monitor. It features fields for 'Username' and 'Password' with a 'Log In' button.",
      },
      {
        isPriority: false,
        src: "/images/blog-cms/phone.webp",
        alt: "Mobile view of a blog CMS dashboard showcasing a post titled 'The JavaScript Event Loop' with an illustration of the JavaScript event loop process.",
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
          className="devicon-bootstrap-plain-wordmark"
          styleName="project__icon"
        ></i>
        <i
          className="devicon-materialui-plain colored"
          styleName="project__icon"
        ></i>
        <i
          className="devicon-amazonwebservices-plain-wordmark colored"
          styleName="project__icon"
        ></i>
      </>
    ),
  },
  {
    id: nanoid(),
    title: "IWANCIW Functional Funware",
    description: `Built an ecommerce site for a fashion business. Technologies used are React.js, Next.js, TailwindCSS, GraphQL(Shopify Storefront API), Typescript, EmailJS, the Typeform Embedded SDK and the Omnisend API. Deployed with Netlify. Currently not open-source. Will be in the future. `,
    liveLink: "https://iwanciw.com",
    codeLink: "https://github.com/OptimisticTrousers",
    images: [
      {
        isPriority: false,
        src: "/images/iwanciw/tilt.webp",
        alt: "Screenshot of a colorful e-commerce website homepage featuring sections titled 'Shop with ease' and 'See your color experience'. The page showcases various color customization options, a video preview, and call-to-action buttons.",
      },
      {
        isPriority: false,
        src: "/images/iwanciw/phone.webp",
        alt: "Mobile view of an e-commerce site's 'Why choose us?' section. It highlights the company's commitment to timely customization and its business experience since 1987. Below, there's a photo of a man and a woman discussing in an outdoor setting.",
      },
      {
        isPriority: false,
        src: "/images/iwanciw/browser.webp",
        alt: "E-commerce website screenshot: Three models showcasing clothing. 'Rolling Hills Crew' ($325.00), 'Oversized Hoodie in Pink Fusion' ($375.00), and 'Asymmetrical Hoodie in Pink Fusion' ($325.00). Left side lists clothing categories; right side offers sorting options.",
      },
      {
        isPriority: false,
        src: "/images/iwanciw/browser-2.webp",
        alt: "Digital artwork: Symmetrical swirling patterns in blue, purple, white, and gold, creating a kaleidoscope effect.",
      },
    ],
    render: () => (
      <>
        <i
          className="devicon-react-original colored"
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
          className="devicon-graphql-plain-wordmark colored"
          styleName="project__icon"
        ></i>
      </>
    ),
  },
  {
    id: nanoid(),
    title: "Shopping Cart",
    description:
      "Creating a multi-page application with react-router-dom, using Testing Library and Jest to test, and learning how to use context. Not functional when it comes to checkout.",
    liveLink: "https://optimistictrousers.github.io/shopping-cart/",
    codeLink: "https://github.com/OptimisticTrousers/shopping-cart",
    images: [
      {
        isPriority: false,
        src: "/images/shopping-cart/tilt.webp",
        alt: "Website homepage of 'The Optimistic Store' with colorful clothing on display and a 'Shop Now' button.",
      },
      {
        isPriority: false,
        src: "/images/shopping-cart/phone.webp",
        alt: "Mobile view of 'The Optimistic Store' cart page with a men's cotton jacket priced at $55.99.",
      },
      {
        isPriority: false,
        src: "/images/shopping-cart/browser.webp",
        alt: "Mobile view of shopping cart in 'The Optimistic Store' displaying a men's cotton jacket for $55.99.",
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
        <i className="devicon-jest-plain colored" styleName="project__icon"></i>
      </>
    ),
  },
  {
    id: nanoid(),
    title: "Members Only",
    description: `Creating an members only, which is an exclusive clubhouse-like application. Allows users to sign in, log in, make posts, and view posts. If the user is able to enter a special passcode, they will be members of the club! If the user is also able to enter another password, they will be admins of the application, allowing them to delete posts.`,
    liveLink: "https://optimistic-members.herokuapp.com/",
    codeLink: "https://github.com/OptimisticTrousers/members-only",
    images: [
      {
        isPriority: false,
        src: "/images/members-only/tilt.webp",
        alt: "Screenshot of a webpage titled 'Welcome to Clubhouse' on the domain 'https://optimistic-members.herokuapp.com/'. The page has options like 'Posts', 'Create Post', 'Membership', 'Admin', 'Log In', and 'Sign Up'. There's a call to action with the text 'You're moments away from the best, most innovative social messaging experience you've ever had' above 'Sign Up' and 'Log In' buttons. The design features pastel colors and a browser icon that resembles a face.",
      },
      {
        isPriority: false,
        src: "/images/members-only/phone.webp",
        alt: "Mobile view of the same 'Welcome to Clubhouse' webpage. The layout is optimized for mobile devices, displaying the title and call to action prominently, followed by 'Sign Up', 'Log In', and 'View Posts' buttons. The header has a menu icon and the same face-like browser icon.",
      },
      {
        isPriority: false,
        src: "/images/members-only/browser.webp",
        alt: "A mobile device screen displaying posts including one titled 'Welcome to Clubhouse'. The site promises 'the best, most innovative social messaging experience'. Options to 'Sign Up', 'Log In', and 'View Posts' are visible. The site has a purple header",
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
  {
    id: nanoid(),
    title: "Tic Tac Toe",
    description:
      "Practicing DOM Manipulating and learned about the minimax algorithm, which is an algorithm that allows for the computer to make optimal moves in turn-based games such as tic-tac-toe or chess.",
    liveLink: "https://optimistictrousers.github.io/tic-tac-toe/",
    codeLink: "https://github.com/OptimisticTrousers/tic-tac-toe",
    images: [
      {
        isPriority: false,
        src: "/images/tic-tac-toe/tilt.webp",
        alt: "A vibrant web browser interface showcasing a Tic Tac Toe game on a pink background with playful illustrations of game controllers, consoles, and related elements. The game board displays a few moves with 'X' and water drop shapes. On the side, there are avatars for 'You' and the 'Computer', with 'You' having chosen the water drop shape. The URL reads 'https://optimistictrousers.github.io/tic-tac-toe/' and the copyright at the bottom mentions '2023 Tony Isern'.",
      },
      {
        isPriority: false,
        src: "/images/tic-tac-toe/browser.webp",
        alt: "Vibrant Tic Tac Toe web interface set against a pink gaming-themed background. Player avatars and game moves are displayed, with a copyright notice for '2023 Tony Isern'.",
      },
      {
        isPriority: false,
        src: "/images/tic-tac-toe/browser-2.webp",
        alt: "Vibrant Tic Tac Toe web interface set against a pink gaming-themed background. Player avatars and game moves are displayed, with a copyright notice for '2023 Tony Isern'.",
      },
    ],
    render: () => (
      <>
        <i
          className="devicon-html5-plain-wordmark colored"
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
      </>
    ),
  },
  {
    id: nanoid(),
    title: "React Trivia App",
    description: "Fun trivia app made from Scrimba's React for Free course",
    liveLink: "https://optimistictrousers.github.io/react-trivia-app/",
    codeLink: "https://github.com/OptimisticTrousers/react-trivia-app",
    images: [
      {
        isPriority: false,
        src: "/images/trivia-app/tilt.webp",
        alt: "Landing page of 'Optimistic Quizzal' trivia game with a subtitle reading 'Test your trivia knowledge right here!' and a button labeled 'Start quiz'.",
      },
      {
        isPriority: false,
        src: "/images/trivia-app/phone.webp",
        alt: "Quiz result page showing four trivia questions with multiple-choice answers. The score displays 'You scored 2/5 correct answers' with a 'Play again' button below.",
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
      </>
    ),
  },
  {
    id: nanoid(),
    title: "CV Application",
    description: `Created a curriculum vitae(CV)/resume builder. User can create, read, update, and delete content. User can upload images. This CV Application allows you to create and customize your CV, along with additional information about yourself`,
    liveLink: "https://optimistictrousers.github.io/cv-project/",
    codeLink: "https://github.com/OptimisticTrousers/cv-project",
    images: [
      {
        isPriority: false,
        src: "/images/cv-project/tilt.webp",
        alt: "Webpage titled 'Optimistic Trousers' showcasing a personal portfolio of a Software Engineer based in New York City, NY. The page includes a playful face illustration and a section named 'Hello, I am Optimistic Trousers' with lorem ipsum text.",
      },
      {
        isPriority: false,
        src: "/images/cv-project/phone.webp",
        alt: "Mobile interface displaying a section titled 'Things I Like To Do' with two entries: 'Responsive Web Design' and 'Web Development', each accompanied by an icon and lorem ipsum description.",
      },
      {
        isPriority: false,
        src: "/images/cv-project/browser.webp",
        alt: "A web interface for a 'Curriculum Vitae' with sections for personal details, experiences, and education. It features editable fields with placeholder data.",
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
      </>
    ),
  },
  {
    id: nanoid(),
    title: "Etch-a-Sketch",
    description:
      "A project that allows users to draw on the board, re-size the board, change colors, etc.",
    liveLink: "https://optimistictrousers.github.io/etch-a-sketch/",
    codeLink: "https://github.com/OptimisticTrousers/etch-a-sketch",
    images: [
      {
        isPriority: false,
        src: "/images/etch-a-sketch/tilt.webp",
        alt: "Screenshot of an 'Etch-A-Sketch' web application opened in a browser. The main section shows a pixelated multi-colored drawing. On the right, there's a control panel with various options including color selection, background color, and modes like 'Rainbow' and 'Black'. The URL in the browser indicates the website is hosted on GitHub.",
      },
      {
        isPriority: false,
        src: "/images/etch-a-sketch/phone.webp",
        alt: "Mockup of a smartphone displaying the 'Etch-A-Sketch' application. The top section has a blank drawing area, while the bottom section features a control panel with buttons for color, background color, and various modes. A slider to adjust the board's size is also present.",
      },
    ],
    render: () => (
      <>
        <i
          className="devicon-html5-plain-wordmark colored"
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
      </>
    ),
  },
  {
    id: nanoid(),
    title: "Weather App",
    description:
      "Learned about asynchronous programming with Javascript. Learned about the event loop, and single-threaded nature of Javascript. Learned about callbacks, promises, async and await, and fetched weather data from an API to render onto the page. Had lots of fun making this",
    liveLink: "https://optimistictrousers.github.io/weather-app/",
    codeLink: "https://github.com/OptimisticTrousers/weather-app",
    images: [
      {
        isPriority: false,
        src: "/images/weather-app/tilt.webp",
        alt: "Weather web app displaying current conditions for Las Vegas, US. Features search functionality and recent search history.",
      },
      // {
      //   isPriority: false,
      //   src: "/images/weather-app/phone.webp",
      //   alt: "Mobile view of weather web app displaying current conditions for Las Vegas, US. Features search functionality and recent search history.",
      // },
    ],
    render: () => (
      <>
        <i
          className="devicon-html5-plain-wordmark colored"
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
      </>
    ),
  },
  {
    id: nanoid(),
    title: "Rock, Paper, Scissors",
    description:
      "Creating a Minecraft style Rock, Paper, Scissors. You play against the CPU. First to five wins!",
    liveLink: "https://optimistictrousers.github.io/rock-paper-scissors/",
    codeLink: "https://github.com/OptimisticTrousers/rock-paper-scissors",
    images: [
      {
        isPriority: false,
        src: "/images/rock-paper-scissors/tilt.webp",
        alt: "Screenshot of a 'Rock Paper Scissors: Minecraft Edition' web application in a browser. It displays Minecraft-themed choices of Rock, Paper, and Scissors with corresponding images. The top section shows the title with a forested Minecraft background. Below are score indicators for the player and computer, and a result statement from a played round.",
      },
      {
        isPriority: false,
        src: "/images/rock-paper-scissors/phone.webp",
        alt: "Mockup of a smartphone showcasing the 'Rock Paper Scissors: Minecraft Edition' application. The title is prominent at the top with a Minecraft forest background. Below, there are score sections for the player and computer, followed by the game choices of Rock and Paper, represented by Minecraft-themed images.",
      },
      {
        isPriority: false,
        src: "/images/rock-paper-scissors/browser.webp",
        alt: "A screenshot of a game titled 'Rock Paper Scissors: Minecraft Edition'. The background features a Minecraft landscape with trees and grass.",
      },
    ],
    render: () => (
      <>
        <i
          className="devicon-html5-plain-wordmark colored"
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

export default projects;
