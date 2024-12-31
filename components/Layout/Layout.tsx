/* eslint-disable react/no-unknown-property */
import { FC } from "react";
import CSSModules from "react-css-modules";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import styles from "./Layout.module.css";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const variants = {
  initialState: {
    opacity: 0,
    x: -200,
    y: 0,
  },
  animateState: {
    opacity: 1,
    x: 0,
    y: 0,
  },
  exitState: {
    opacity: 0,
    x: 0,
    y: 100,
  },
};

const Layout: FC<Props> = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <div styleName="container">
        <Navbar />
        <motion.main
          key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: "0.4",
          }}
          variants={variants}
          styleName="main"
        >
          {children}
        </motion.main>
      </div>
      <Footer />
    </>
  );
};

export default CSSModules(Layout, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "ignore",
});
