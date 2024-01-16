import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import About from "./About";
import CTASection from "./CTASection";
import Pricing from "./Pricing";

function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <About />
      <CTASection />
      <Pricing />
    </div>
  );
}

export default Home;
