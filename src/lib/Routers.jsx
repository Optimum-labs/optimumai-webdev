import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Projects";
import MockInterviewBot from "../pages/MockInterviewBot";
import Contact from "../pages/Contact";
import Login from "../components/form/Login";
import Pricing from "../pages/Pricing";
import Community from "../pages/Community";
import AIForHealthcareAccessibility from "../pages/Community/components/challenges/challange-2";
import AIForClimateAction from "../pages/Community/components/challenges/challenge-1";
import Team from "../pages/Community/components/TeamMemberList";
import PrivacyPolicy from "../pages/terms-conditions/PrivacyPolicy";
import TermOfServices from "../pages/terms-conditions/TermsOfServices";

const Routers = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/team" element={
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px] text-dark dark:text-white"><Team /></div>
      } />
      <Route path="/products" element={<Products />} />
      <Route path="/mock-interview-bot" element={<MockInterviewBot />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Login />} />
      <Route path="/optimumai-webdev" element={<Home />} />
      <Route path="/community" element={<Community />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-services" element={<TermOfServices />} />
      <Route
        path="/challanges/ai-financial-planner-using-multi-agent-architecture"
        element={<AIForHealthcareAccessibility />}
      />
      <Route path="/challanges/ai-system-for-habit-building-using-recipes-of-soft-skills" element={<AIForClimateAction />} />
    </Routes>
  );
};

export default Routers;