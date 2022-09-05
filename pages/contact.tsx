/* eslint-disable react/no-unknown-property */
import { NextPage } from "next";
import CSSModules from "react-css-modules";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Contact.module.css";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";

const Contact: NextPage = () => {
  return (
    <Layout>
      <div styleName="contact">
        <h1 styleName="contact__title">Contact Me</h1>
        <div styleName="contact__content">
          <div styleName="contact__left">
            <h2>Get In Touch</h2>
            <form styleName="contact__form">
              <div styleName="contact-field">
                <label htmlFor="name">Enter your name*</label>
                <input id="name" name="name" styleName="contact__input" />
              </div>
              <div styleName="contact-field">
                <label htmlFor="email">Enter your email*</label>
                <input id="email" name="email" styleName="contact__input" />
              </div>
              <div styleName="contact-field">
                <label htmlFor="subject">Enter your subject*</label>
                <input name="subject" id="subject" styleName="contact__input" />
              </div>
              <div styleName="contact-field">
                <label htmlFor="message">Enter your message*</label>
              </div>
              <div styleName="contact-field">
                <textarea
                  name="message"
                  id="message"
                  styleName="contact__textarea"
                />
              </div>

              <button type="submit">Send Mail</button>
            </form>
          </div>
          <div styleName="contact__right">
            <ul>
              <li styleName="contact__card">
                <span>
                  <BsTelephone />
                </span>
                <div styleName="card__card-content">
                  <h3>Phone</h3>
                  <p>201-702-0093</p>
                </div>
              </li>
              <li styleName="contact__card">
                <span>
                  <HiOutlineMail />
                </span>
                <div styleName="card__card-content">
                  <h3>Email</h3>
                  <p>tony.isern@yahoo.com</p>
                </div>
              </li>
              <li styleName="contact__card">
                <span>
                  <GrLocation />
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
