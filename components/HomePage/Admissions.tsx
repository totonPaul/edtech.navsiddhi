import React from "react";
import "@/styles/HomePage.css";

const Admissions: React.FC = () => {

  return (
    <section className="admissions-section">
      <div className="admissions-content">
        <h2 className="section-title">Admissions Open</h2>
        <div className="admissions-details">
          <p className="section-description">Enroll now for the upcoming session.</p>
          {/* <button className="enroll-button" onClick={handleEnrollClick}>
            Enroll Now
          </button> */}
          <a className="enroll-button" href="/enroll">
            Enroll Now
      </a>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
