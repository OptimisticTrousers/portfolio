/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import Image from "next/image";
import { FC } from "react";
import CSSModules from "react-css-modules";
import styles from "./About.module.css";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const cardVariants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const About: FC = () => {
  return (
    <motion.section
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      styleName="about"
    >
      <div styleName="about__content">
        <h2 styleName="about__title">About me</h2>
        <Image
          styleName="about__image"
          src="/images/me.png"
          objectFit="contain"
          alt="a picture of myself"
          width={400}
          height={400}
          priority
        />
        <p styleName="about__description">
          Hi! I'm Tony Isern. I love building things and the freedom that
          programming gives you. I'm currently studying at New Jersey City
          University with a major in Computer Science as a senior.
          <br />
          <br />
          Web development is a space where things are constantly changing. Hell,
          a new JavaScript framework seems to come out every week! I love
          learning new technologies and new skills. I pride myself in my
          persistance and dedication to pursuing my goals. One thing I would
          like to do in the future is to teach others the things I am currently
          learning! Programming is also pretty fun! It's pretty cool the stuff
          you can build with just a computer and internet connection. I also
          interned at Google as a Software Engineer Intern in Summer 2024!{" "}
          <br />
          <br />
          When I'm not coding, I'm usually reading, browsing Reddit, eating lots
          of food, or reading my favorite manga, One Piece!
        </p>
      </div>
      <div styleName="about__container">
        <h2 styleName="about__title">Technologies</h2>
        <div styleName="about__technologies">
          <div styleName="about__row">
            <div styleName="about__tech">
              <i
                className="devicon-html5-plain-wordmark colored"
                styleName="about__icon"
              ></i>
              <div>html5</div>
            </div>
            <div styleName="about__tech">
              <i
                className="devicon-css3-plain-wordmark colored"
                styleName="about__icon"
              ></i>
              <div>css3</div>
            </div>
            <div styleName="about__tech">
              <i
                className="devicon-javascript-plain colored"
                styleName="about__icon"
              ></i>
              <div>javascript</div>
            </div>
          </div>
          <div styleName="about__row">
            <div styleName="about__tech">
              <i
                className="devicon-react-original-wordmark colored"
                styleName="about__icon"
              ></i>
              <div>react</div>
            </div>
            <div styleName="about__tech">
              <i
                className="devicon-jest-plain colored"
                styleName="about__icon"
              ></i>
              <div>jest</div>
            </div>
            <div styleName="about__tech">
              <i
                className="devicon-typescript-plain colored"
                styleName="about__icon"
              ></i>
              <div>typescript</div>
            </div>
            <div styleName="about__tech">
              <i
                className="devicon-redux-original colored"
                styleName="about__icon"
              ></i>
              <div>redux</div>
            </div>
          </div>
          <div styleName="about__row">
            <div styleName="about__tech">
              <i
                className="devicon-firebase-plain-wordmark colored"
                styleName="about__icon"
              ></i>
              <div>firebase</div>
            </div>
            <div styleName="about__tech">
              <i
                className="devicon-express-original-wordmark"
                styleName="about__icon"
              ></i>
              <div>express</div>
            </div>
            <div styleName="about__tech">
              <i
                className="devicon-mongodb-plain-wordmark colored"
                styleName="about__icon"
              ></i>
              <div>mongodb</div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CSSModules(About, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "ignore",
});
