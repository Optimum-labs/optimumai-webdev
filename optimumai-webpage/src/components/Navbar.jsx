import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
      <div className="logo">
        <Link to="/optimumai-webpage/">
          <span>OptimumAI</span>
        </Link>
      </div>
      <div className={`menu-icon ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="/optimumai-webpage/about" onClick={toggleMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/optimumai-webpage/team-signup" onClick={toggleMenu}>
            Team Sign Up
          </Link>
        </li>
        <li>
          <Link
            to="/optimumai-webpage/google-forms-dashboard"
            onClick={toggleMenu}
          >
            Google Forms Dashboard
          </Link>
        </li>
        <li>
          <Link to="/optimumai-webpage/products" onClick={toggleMenu}>
            Products
          </Link>
        </li>
        <li>
          <Link
            to="/optimumai-webpage/mock-interview-bot"
            onClick={toggleMenu}
          >
            Mock Interview Bot
          </Link>
        </li>
        <li>
          <Link to="/optimumai-webpage/contact-us" onClick={toggleMenu}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
