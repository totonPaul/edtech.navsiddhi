import React from "react";
import CourseCard from "@/components/courses/CourseCard";
import courses from "@/resources/courses";
import "@/styles/HomePage.css";

const CourseOverview: React.FC = () => {
  return (
    <section className="course-overview-section">
      <h2 className="section-title">Explore Our Courses</h2>
      <div className="courses-container">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default CourseOverview;
