import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/About';
import TeamSignup from './pages/TeamSignup';
import GoogleFormsDashboard from './pages/GoogleFormsDashboard';
import Products from './pages/Products';
import MockInterviewBot from './pages/MockInterviewBot';
import ContactUs from './pages/ContactUs';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignInForm from './components/form/SignInForm';
import SignUpForm from './components/form/SignUpForm';
import Pricing from './pages/home/Pricing'

function App() {
  return (
    <Router>
      <div className='App'>   
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/team-signup" element={<TeamSignup />} />
          <Route path="/google-forms-dashboard" element={<GoogleFormsDashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/mock-interview-bot" element={<MockInterviewBot />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/sign-in-form" element={<SignInForm />} />
          <Route path="/sign-up-form" element={<SignUpForm />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />        
      </div>
    </Router>
  );
}

export default App;
