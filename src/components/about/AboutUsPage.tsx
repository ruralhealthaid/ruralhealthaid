import React from "react";
import Hero from "./Hero";
import MissionVission from "./MissionVision";
import CoreValues from "./CoreValues";
import Approach from "./Approach";
import Structure from "./Structure";
import Team from "./Team";
import JoinUs from "./JoinUs";
import Footer from "../ui/Footer";

const AboutUsPage = () => {
  return (
    <div>
      <Hero />
      <MissionVission />
      <CoreValues />
      <Approach />
      <Structure />
      <Team />
      <JoinUs />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
