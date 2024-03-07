import React from "react";
import Hero from "./components/Hero";
// import Features from "./components/Features";
import About from "./components/About";
// import Pricing from "./Pricing";
// import BlogSection from "./BlogSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";

function Home() {
  return (
    <div>
      <Hero />
      {/* <Features /> */}
      <About />
      {/* <Pricing />    */}
      {/* <BlogSection />     */}
      <FAQSection />
      <ContactSection />
    </div>
  );
}

export default Home;
