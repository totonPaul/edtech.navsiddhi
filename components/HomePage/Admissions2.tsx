import React from "react";
import "@/styles/HomePage.css";

const Admissions2: React.FC = () => {
  return (
    // <section className="admissions-section">
    //   <div className="admissions-content">
    //     <h2 className="section-title">Admissions Open</h2>
    //     <div className="admissions-details">
    //       <p className="section-description">Offline Live classes in Forbesganj will be starting from February 2025. Anyone currently enrolled in class 8-12 or any graduation course is eligible for admission. For more information, reach out to 9113363896 or 9431653636 .</p>
    //       <p className="section-description">We help you upskill through end to end computer programming and coding courses.</p>
    //     </div>

    //   </div>
    // </section>
    <section className="social-media-section">
      <div className="admissions-content">
        <div className="video-container flex justify-center mb-4">
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            {" "}
            {/* 16:9 Aspect Ratio */}
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/M080_ftaEfs"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <h2 className="section-title">Admissions Now Open</h2>
        <div className="admissions-details">
          <p className="section-description">
            Offline Live classes in Forbesganj will be starting from February
            2025. Anyone currently enrolled in class 8-12 or any graduation
            course is eligible for admission. For more information, reach out to
            9113363896 or 9431653636 .
          </p>
          <p className="section-description">
            We help you upskill through end to end computer programming and
            coding courses.
          </p>
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

export default Admissions2;
