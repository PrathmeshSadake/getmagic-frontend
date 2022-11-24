import React from "react";
import HowItWorks from "../components/landing-page/HowItWorks";
import Hero from "../components/landing-page/Hero";
import Hero2 from "../components/landing-page/Hero2";
import CloudLogos from "../components/landing-page/CloudLogos";
import LandingFooter from "../components/landing-page/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <CloudLogos />
      <Hero2 />
      <LandingFooter />
    </div>
  );
};

export default Home;
