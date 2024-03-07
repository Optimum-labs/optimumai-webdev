import React from "react";
import "./assets/css/tailwind.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Scroll from "./components/common/Ṣcroll";
import Routers from "./lib/Routers";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routers />
        <button
          className="back-to-top fixed bottom-8 left-auto right-8 z-[999] hidden h-10 w-10 items-center justify-center rounded-md bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-dark"
          style={{ display: "inline-block" }}
        >
          <Scroll />
        </button>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
