import Hero from "~/about-us/Hero";
import MissionVision from "~/about-us/MissionVision";
import Footer from "../ui/Footer";
import CoreValues from "~/about-us/CoreValues";
import Approach from "~/about-us/Approach";
import Structure from "~/about-us/Structure";
import Team from "~/about-us/Team";
import JoinUs from "~/about-us/JoinUs";

const AboutUsPage = () => {
  return (
    <div>
      <Hero />
      <MissionVision />
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
