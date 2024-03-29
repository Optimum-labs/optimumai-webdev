import React from "react";
import Hero from "./components/Hero";
import NewsletterSubscribeSection from '../Community/components/NewsletterSubscribeSection';
import AIGoodChallengesSection from "../Community//components/AIGoodChallengesSection";

function Home() {
  return (
    <div>
      <Hero />  
      <AIGoodChallengesSection />
      <NewsletterSubscribeSection />
    </div>
  );
}

export default Home;
