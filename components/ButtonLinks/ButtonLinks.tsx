/* eslint-disable react/no-unknown-property */
import Image from "next/image";
import { FC } from "react";
import CSSModules from "react-css-modules";
import styles from "./ButtonLinks.module.css";

const ButtonLinks: FC = () => {
  return (
    <div styleName="buttons">
      <a
        href="https://www.linkedin.com/in/tony-isern-9717a0189"
        target="_blank"
        rel="noreferrer"
        aria-label="open linkedin page(new tab)"
      >
        <button styleName="buttons__button">
          <Image
            src="/svg/linkedin.svg"
            styleName="buttons__icon"
            alt="linkedin logo"
            width={24}
            height={24}
          />
          LinkedIn
        </button>
      </a>
      <a
        href="https://github.com/OptimisticTrousers"
        target="_blank"
        rel="noreferrer"
        aria-label="open github page(new tab)"
      >
        <button styleName="buttons__button">
          <Image
            src="/svg/github.svg"
            styleName="buttons__icon"
            alt="github logo"
            width={24}
            height={24}
          />
          Github
        </button>
      </a>
      <a
        href="malito:tonyisern@protonmail.com"
        target="_blank"
        rel="noreferrer"
        aria-label="send me an email(popup)"
      >
        <button styleName="buttons__button">
          <Image
            src="/svg/email.svg"
            styleName="buttons__icon"
            width={24}
            height={24}
            alt="email logo"
          />
          Email
        </button>
      </a>
    </div>
  );
};

export default CSSModules(ButtonLinks, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "ignore",
});
