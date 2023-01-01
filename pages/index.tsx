import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import About from "../components/About/About";
import FeaturedProjects from "../components/FeaturedProjects/FeaturedProjects";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProjects />
    </>
  );
};

export default Home;
