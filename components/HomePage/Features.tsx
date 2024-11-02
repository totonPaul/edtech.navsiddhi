import React from "react";
import "@/styles/HomePage.css";

const Features: React.FC = () => {
  const featureList = [
    "Coding Classes for any age group!",
    "Practical Computer lab sessions!",
    "Learn from expert IITians!",
    "Offline Live Courses!",
    "Free Resources Online!",
    // "Access to resources",
    // "Certification upon completion"
  ];

  return (
    <section className="features-section">
      <h2 className="section-title">Features & Benefits</h2>
      <div className="features-box-container">
        {featureList.map((feature, index) => (
          <div key={index} className="feature-box">
            <p className="feature-text">{feature}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
