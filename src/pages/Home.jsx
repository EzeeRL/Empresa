import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import ImplementationProcess from "../components/implement";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      {/* <Portfolio /> */}
      <ImplementationProcess></ImplementationProcess>
      <Contact></Contact>
    </>
  );
}

export default Home;
