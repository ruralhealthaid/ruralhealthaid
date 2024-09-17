import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Metrics from "./Metrics";
import Beneficiaries from "./Beneficiaries";
import Services from "./Services";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Metrics />
      <Beneficiaries />
      <Services />
    </div>
  );
};

export default HomePage;
