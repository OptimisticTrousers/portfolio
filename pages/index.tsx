import type { NextPage } from "next";
import About from "../components/About/About";
import FeaturedProjects from "../components/FeaturedProjects/FeaturedProjects";
import Hero from "../components/Hero/Hero";

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
