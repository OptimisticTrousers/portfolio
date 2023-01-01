/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import Image from "next/image";
import { FC } from "react";
import CSSModules from "react-css-modules";
import styles from "./About.module.css";
import { CSSTransition } from "react-transition-group";

const About: FC = () => {
  return (
    <section styleName="about">
      <div styleName="about__content">
        <h2 styleName="about__title">About me</h2>
        <Image
          styleName="about__image"
          src="/images/me.jpg"
          alt="a picture of myself"
          width={300}
          height={300}
          priority
        />
        <p styleName="about__description">
          Hi! I'm Tony Isern. I love building things and the freedom that
          programming gives you. I'm currently studying at New Jersey City
          University with a major in Computer Science as a sophomore.
          <br />
          <br />
          Web development is a space where things are constantly changing. Hell,
          a new JavaScript framework seems to come out every week! I love
          learning new technologies and new skills. I pride myself in my
          persistance and dedication to pursuing my goals. One thing I would
          like to do in the future is to teach others the things I am currently
          learning! Programming is also pretty fun! It's pretty cool the stuff
          you can build with just a computer and internet connection. I'm
          planning on applying for internships this summer of 2023 to get more
          experience from more senior developers. Currently learning more about
          Data Structures and Algorithms.
          <br />
          <br />
          When I'm not coding, I'm usually debating with my uncle about
          economics, browsing Reddit, eating lots of food, or reading my
          favorite manga, One Piece!
        </p>
      </div>
      <div styleName="about__technologies">
        <h2 styleName="about__title">Technologies</h2>
        <div styleName="about__icons">
          <i
            className="devicon-html5-plain-wordmark colored"
            styleName="about__icon"
          ></i>
          <i
            className="devicon-css3-plain-wordmark colored"
            styleName="about__icon"
          ></i>
          <i
            className="devicon-javascript-plain colored"
            styleName="about__icon"
          ></i>
          <i
            className="devicon-react-original-wordmark colored"
            styleName="about__icon"
          ></i>
          <i className="devicon-jest-plain colored" styleName="about__icon"></i>
          <i
            className="devicon-typescript-plain colored"
            styleName="about__icon"
          ></i>
          <i
            className="devicon-redux-original colored"
            styleName="about__icon"
          ></i>
          <i
            className="devicon-git-plain-wordmark colored"
            styleName="about__icon"
          ></i>
          <i
            className="devicon-firebase-plain-wordmark colored"
            styleName="about__icon"
          ></i>
          <i
            className="devicon-graphql-plain-wordmark colored"
            styleName="about__icon"
          ></i>
          <i
            className="devicon-express-original-wordmark"
            styleName="about__icon"
          ></i>
          <i
            className="devicon-mongodb-plain-wordmark colored"
            styleName="about__icon"
          ></i>
          <i
            className="devicon-nodejs-plain-wordmark colored"
            styleName="about__icon"
          ></i>
          <i className="devicon-vim-plain colored" styleName="about__icon"></i>
          <div styleName="about__background">
            <i
              className="devicon-nextjs-original-wordmark colored"
              styleName="about__icon"
            ></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CSSModules(About, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "ignore",
});
