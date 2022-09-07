/* eslint-disable react/no-unknown-property */
import { NextPage } from "next";
import CSSModules from "react-css-modules";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Contact.module.css";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
import emailjs from "@emailjs/browser";
import React, { useReducer, useRef } from "react";

const USER_ID = process.env.USER_ID;

interface State {
  name: string;
  email: string;
  message: string;
  subject: string;
}

interface Action {
  type: string;
  payload: string;
}

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

type TextareaChangeEvent = React.ChangeEvent<HTMLTextAreaElement>;

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "NAME_CHANGE":
      return { ...state, name: action.payload };
    case "EMAIL_CHANGE":
      return { ...state, email: action.payload };
    case "MESSAGE_CHANGE":
      return { ...state, message: action.payload };
    case "SUBJECT_CHANGE":
      return { ...state, subject: action.payload };
    default:
      return state;
  }
}

const Contact: NextPage = () => {
  const [{ name, email, message, subject }, dispatch] = useReducer(reducer, {
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm("gmail", "template_s69p9bq", form.current!, USER_ID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  function handleName(event: InputChangeEvent) {
    dispatch({ type: "NAME_CHANGE", payload: event.target.value });
  }

  function handleMessage(event: TextareaChangeEvent) {
    dispatch({ type: "MESSAGE_CHANGE", payload: event.target.value });
  }
  function handleEmail(event: InputChangeEvent) {
    dispatch({ type: "EMAIL_CHANGE", payload: event.target.value });
  }
  function handleSubject(event: InputChangeEvent) {
    dispatch({ type: "SUBJECT_CHANGE", payload: event.target.value });
  }

  return (
    <Layout>
      <div styleName="contact">
        <h1 styleName="contact__title">CONTACT ME</h1>
        <div styleName="contact__content">
          <div styleName="contact__left">
            <h2>Get In Touch</h2>
            <form styleName="contact__form" onSubmit={sendEmail} ref={form}>
              <div styleName="contact__field">
                <label styleName="contact__label" htmlFor="name">
                  Enter your name*
                </label>
                <input
                  onChange={handleName}
                  value={name}
                  id="name"
                  name="name"
                  styleName="contact__input"
                  required
                />
              </div>
              <div styleName="contact__field">
                <label styleName="contact__label" htmlFor="email">
                  Enter your email*
                </label>
                <input
                  onChange={handleEmail}
                  value={email}
                  id="email"
                  name="email"
                  styleName="contact__input"
                  required
                />
              </div>
              <div styleName="contact__field">
                <label styleName="contact__label" htmlFor="subject">
                  Enter your subject*
                </label>
                <input
                  onChange={handleSubject}
                  value={subject}
                  name="subject"
                  id="subject"
                  styleName="contact__input"
                  required
                />
              </div>
              <div styleName="contact__field">
                <label styleName="contact__label" htmlFor="message">
                  Enter your message*
                </label>
                <textarea
                  onChange={handleMessage}
                  value={message}
                  required
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
                  <BsTelephone styleName="contact__icon" />
                </span>
                <div styleName="card__card-content">
                  <h3>Phone</h3>
                  <p>201-702-0093</p>
                </div>
              </li>
              <li styleName="contact__card">
                <span styleName="contact__span">
                  <HiOutlineMail styleName="contact__icon" />
                </span>
                <div styleName="card__card-content">
                  <h3>Email</h3>
                  <p styleName="contact__text">tony.isern@yahoo.com</p>
                </div>
              </li>
              <li styleName="contact__card">
                <span styleName="contact__span">
                  <GoLocation styleName="contact__icon" />
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
