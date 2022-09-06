/* eslint-disable react/no-unknown-property */
import { NextPage } from "next";
import CSSModules from "react-css-modules";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Contact.module.css";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";

const Contact: NextPage = () => {
  return (
    <Layout>
      <div styleName="contact">
        <h1 styleName="contact__title">CONTACT ME</h1>
        <div styleName="contact__content">
          <div styleName="contact__left">
            <h2>Get In Touch</h2>
            <form styleName="contact__form">
              <div styleName="contact__field">
                <label styleName="contact__label" htmlFor="name">
                  Enter your name*
                </label>
                <input id="name" name="name" styleName="contact__input" />
              </div>
              <div styleName="contact__field">
                <label styleName="contact__label" htmlFor="email">
                  Enter your email*
                </label>
                <input id="email" name="email" styleName="contact__input" />
              </div>
              <div styleName="contact__field">
                <label styleName="contact__label" htmlFor="subject">
                  Enter your subject*
                </label>
                <input name="subject" id="subject" styleName="contact__input" />
              </div>
              <div styleName="contact__field">
                <label styleName="contact__label" htmlFor="message">
                  Enter your message*
                </label>
                <textarea
                  name="message"
                  id="message"
                  styleName="contact__textarea"
                />
              </div>

              <button styleName="contact__button" type="submit">
                Send Mail
              </button>
            </form>
          </div>
          <div styleName="contact__right">
            <ul styleName="contact__list">
              <li styleName="contact__card">
                <span styleName="contact__span">
                  <BsTelephone styleName="contact__icon"/>
                </span>
                <div styleName="card__card-content">
                  <h3>Phone</h3>
                  <p>201-702-0093</p>
                </div>
              </li>
              <li styleName="contact__card">
                <span styleName="contact__span">
                  <HiOutlineMail styleName="contact__icon"/>
                </span>
                <div styleName="card__card-content">
                  <h3>Email</h3>
                  <p styleName="contact__text">tony.isern@yahoo.com</p>
                </div>
              </li>
              <li styleName="contact__card">
                <span styleName="contact__span">
                  <GoLocation styleName="contact__icon"/>
                </span>
                <div styleName="card__card-content">
                  <h3>Address</h3>
                  <p>Secaucus, New Jersey</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CSSModules(Contact, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "log",
});
