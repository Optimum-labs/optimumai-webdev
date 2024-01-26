import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/About';
// import TeamSignup from './pages/TeamSignup';
import GoogleFormsDashboard from './pages/GoogleFormsDashboard';
import Products from './pages/Products';
import MockInterviewBot from './pages/MockInterviewBot';
import Contact from './pages/Contact';
import "./assets/css/tailwind.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignInForm from './components/form/SignInForm';
import SignUpForm from './components/form/SignUpForm';
import Pricing from './pages/home/Pricing';
import Team from './components/Team';
// import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div className='App'>   
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/google-forms-dashboard" element={<GoogleFormsDashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/mock-interview-bot" element={<MockInterviewBot />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign-in-form" element={<SignInForm />} />
          <Route path="/sign-up-form" element={<SignUpForm />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<SignInForm />} />
          <Route path="/optimumai-webdev" element={<Home />} />
        </Routes>
        <Footer />        
      </div>
    </Router>
  );
}

export default App;