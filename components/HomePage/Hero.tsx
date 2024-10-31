import React from "react";
import "@/styles/HomePage.css";

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <h1 className="hero-title">Welcome to Navsiddhi Edutech</h1>
      <p className="hero-description">Empowering minds, shaping Future!</p>
      <a className="hero-button" href="/learning">
            Get Started
      </a>
    </section>
  );
};

export default Hero;
