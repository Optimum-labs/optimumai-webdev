import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/tailwind.css";
import "../assets/css/animate.css";
import "../assets/css/swiper-bundle.min.css";

import logoWhite from "../assets/images/logo/logo-white.png";


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent ${isMenuOpen ? 'open' : ''}`}>
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-2">
            <Link to="/optimumai-webpage/" className="navbar-logo block w-full py-5">
              <img src={logoWhite} alt="logo" className="header-logo w-full" />
            </Link>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button id="navbarToggler"
                className={`absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden ${isMenuOpen ? 'open' : ''}`}
                onClick={toggleMenu}>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
              </button>
              <nav id="navbarCollapse"
                className={`absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:px-4 lg:py-0 lg:shadow-none dark:lg:bg-transparent xl:px-6 ${isMenuOpen ? 'open' : ''}`}>
                <ul className="blcok lg:flex 2xl:ml-20">
                  <li>
                    <Link to="/optimumai-webpage/home" className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/optimumai-webpage/about" className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/optimumai-webpage/pricing" className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10">
                      Pricing
                    </Link>
                  </li>
                  {/* Add other links as needed */}
                </ul>
              </nav>
            </div>
            <div className="flex items-center justify-end pr-16 lg:pr-0">
              <label htmlFor="themeSwitcher" className="inline-flex cursor-pointer items-center" aria-label="themeSwitcher" name="themeSwitcher">
                {/* Add your theme switcher logic here */}
              </label>
              <div className="hidden sm:flex">
                <Link to="/optimumai-webpage/signin" className="loginBtn px-[22px] py-2 text-base font-medium text-white hover:opacity-70">
                  Sign In
                </Link>
                <Link to="/optimumai-webpage/signup" className="signUpBtn rounded-md bg-white bg-opacity-20 px-6 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
