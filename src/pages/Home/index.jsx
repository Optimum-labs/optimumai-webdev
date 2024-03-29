import React from "react";
import Hero from "./components/Hero";
import NewsletterSubscribeSection from '../Community/components/NewsletterSubscribeSection';
import AIGoodChallengesSection from "../Community//components/AIGoodChallengesSection";
import CTASection from "./components/CTASection";
import '../../assets/css/swiper-bundle.min.css';

function Home() {
  return (
    <div>
      <Hero />  
      <AIGoodChallengesSection />
      <CTASection />
      <NewsletterSubscribeSection />
    </div>
  );
}

export default Home;
