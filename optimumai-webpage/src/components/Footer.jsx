import React from 'react';
import '../assets/css/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="https://avatars.githubusercontent.com/u/126138092?s=200&v=4" alt="OptimumAI Logo" />
          <span>OptimumAI</span>
        </div>
        <div className="footer-links">
          <Link to="/optimumai-webpage/about">About</Link>
          <Link to="/optimumai-webpage/team-signup">Team Sign Up</Link>
          <Link to="/optimumai-webpage/google-forms-dashboard">Google Forms Dashboard</Link>
          <Link to="/optimumai-webpage/products">Products</Link>
          <Link to="/optimumai-webpage/mock-interview-bot">Mock Interview Bot</Link>
          <Link to="/optimumai-webpage/contact-us">Contact Us</Link>
        </div>
        <div className="footer-social">
          <Link to="#" className="social-icon" target="_blank" rel="noopener noreferrer">Facebook</Link>
          <Link to="#" className="social-icon" target="_blank" rel="noopener noreferrer">Twitter</Link>
          <Link to="#" className="social-icon" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} OptimumAI. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
