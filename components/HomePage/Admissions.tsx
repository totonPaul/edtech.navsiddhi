import React from "react";
import "@/styles/HomePage.css";

const Admissions: React.FC = () => {
  return (
    <section className="admissions-section">
      <div className="admissions-content">
      <div className="video-container flex justify-center mb-4"> {/* Added flex classes */}
        <iframe
          width="70%" // Set width to 600 pixels
          height="400" // Height remains the same
          src="https://www.youtube.com/embed/M080_ftaEfs" // Embed URL with the video ID
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

        <h2 className="section-title">Admissions Now Open</h2>
        <div className="admissions-details">
          <p className="section-description">
            Enroll now for the upcoming session at Forbesganj, Araria, Bihar!
          </p>
          {/* <button className="enroll-button" onClick={handleEnrollClick}>
            Enroll Now
          </button> */}
          <a className="enroll-button" href="/enroll">
            Enroll Now
          </a>
        </div>
      </div>
      <div className="admissions-content">
        {/* <h2 className="section-title">Follow Us</h2> */}
        <div className="social-icon-container">
          <a
            href="https://www.instagram.com/clickvidya.navsiddhi/"
            aria-label="instagram-link"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
          >
            <img
              src="/images/instagram.jpg"
              alt="Instagram"
              width={48} // Larger width
              height={48} // Larger height
            />
          </a>
          <a
            href="https://www.youtube.com/@ClickVidya.navsiddhi"
            aria-label="youtube-link"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
          >
            <img
              src="/images/youtube.png"
              alt="YouTube"
              width={48}
              height={48}
            />
          </a>
          <a
            href="mailto:clickvidya.navsiddhi@gmail.com"
            aria-label="gmail-link"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
          >
            <img src="/images/gmail.jpg" alt="Gmail" width={48} height={48} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
