import React from "react";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import Hero from "./Hero";
import DonateForm from "./DonateForm";

const DonatePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <DonateForm />
      <Footer />
    </div>
  );
};

export default DonatePage;