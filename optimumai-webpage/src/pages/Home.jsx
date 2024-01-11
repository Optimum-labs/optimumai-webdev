import React from 'react';
import '../assets/css/Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="hero">
        <h1>Welcome to OptimumAI</h1>
        <p>Your Gateway to AI Excellence</p>
      </header>

      <section className="features">
        <div className="feature">
          <h2>Transformative AI Solutions</h2>
          <p>Explore cutting-edge AI solutions that transform industries and redefine possibilities.</p>
        </div>
        <div className="feature">
          <h2>Expert Team</h2>
          <p>Meet our expert team dedicated to pushing the boundaries of AI innovation.</p>
        </div>
        <div className="feature">
          <h2>Mock Interview Bot</h2>
          <p>Experience our state-of-the-art Mock Interview Bot designed to enhance your interview skills.</p>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Revolutionize with OptimumAI?</h2>
        <p>Join us on this journey towards AI excellence. Sign up now!</p>
        <button className="cta-button">Sign Up</button>
      </section>
    </div>
  );
}

export default Home;
