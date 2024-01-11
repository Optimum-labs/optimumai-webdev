import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import TeamSignup from './pages/TeamSignup';
import GoogleFormsDashboard from './pages/GoogleFormsDashboard';
import Products from './pages/Products';
import MockInterviewBot from './pages/MockInterviewBot';
import ContactUs from './pages/ContactUs';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className='App'>   
        <Navbar />
        <Routes>
          <Route path="/optimumai-webpage/about" element={<About />} />
          <Route path="/optimumai-webpage/team-signup" element={<TeamSignup />} />
          <Route path="/optimumai-webpage/google-forms-dashboard" element={<GoogleFormsDashboard />} />
          <Route path="/optimumai-webpage/products" element={<Products />} />
          <Route path="/optimumai-webpage/mock-interview-bot" element={<MockInterviewBot />} />
          <Route path="/optimumai-webpage/contact-us" element={<ContactUs />} />
          <Route path="/optimumai-webpage/" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
