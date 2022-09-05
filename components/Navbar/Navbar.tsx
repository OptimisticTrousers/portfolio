import Link from "next/link";
import { FC } from "react";
import CSSModules from "react-css-modules";
import styles from "./Navbar.module.css";

const Navbar: FC = () => {
  return (
    <header>
      <nav>
        <Link href="">Tony Isern</Link>
        <Link href="">Projects</Link>
        <Link href="">Contact</Link>
        <Link href="">Blog</Link>
      </nav>
    </header>
  );
};

export default CSSModules(Navbar, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "log",
});
