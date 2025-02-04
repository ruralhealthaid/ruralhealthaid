import Header from "../ui/Header";
import Hero from "./Hero";
import About from "./About";
import Metrics from "./Metrics";
import Beneficiaries from "./Beneficiaries";
import Services from "./Services";
import Approach from "./Approach";
import JoinUs from "./JoinUs";
import Footer from "../ui/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Metrics />
      <Beneficiaries />
      <Services />
      <Approach />
      <JoinUs />
      <Footer />
    </>
  );
};

export default HomePage;
