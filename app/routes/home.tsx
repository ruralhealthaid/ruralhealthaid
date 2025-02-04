import type { Route } from "./+types/home";

import Hero from "../home/Hero";
import Header from "~/ui/Header";
import About from "~/home/About";
import Metrics from "~/home/Metrics";
import Beneficiaries from "~/home/Beneficiaries";
import Services from "~/home/Services";
import Approach from "~/home/Approach";
import JoinUs from "~/home/JoinUs";
import Footer from "~/ui/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
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
}
