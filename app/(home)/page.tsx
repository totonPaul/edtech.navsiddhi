import { db } from "@/lib/db";
import getCoursesByCategory from "../actions/getCourses";
import Categories from "@/components/custom/Categories";
import CourseCard from "@/components/courses/CourseCard";
import categories from "@/resources/category"
import courses from "@/resources/courses"

import Hero from "@/components/HomePage/Hero";
import Features from "@/components/HomePage/Features";
import Admissions from "@/components/HomePage/Admissions";
import CourseOverview from "@/components/HomePage/CourseOverview";
import Testimonials from "@/components/HomePage/Testimonials";
import Partners from "@/components/HomePage/Partners";
import Footer from "@/components/HomePage/Footer";
import "@/styles/HomePage.css";

export default async function Home() {
  // const categories = await db.category.findMany({
  //   orderBy: {
  //     name: "asc",
  //   },
  //   include: {
  //     subCategories: {
  //       orderBy: {
  //         name: "asc",
  //       },
  //     },
  //   },
  // });

  // const courses = await getCoursesByCategory(null);
  return (
    // <div className="md:mt-5 md:px-10 xl:px-16 pb-16">
    //   <Categories categories={categories} selectedCategory={null} />
    //   <div className="flex flex-wrap gap-7 justify-center">
    //     {courses.map((course) => (
    //       <CourseCard key={course.id} course={course} />
    //     ))}
    //   </div>
    //   <h2> Hi</h2>
    // </div>
    <div className="home-container">
      <Hero />
      <Admissions />
      <Features />
      <CourseOverview />
      {/* <Testimonials /> */}
      {/* <Partners /> */}
      <Footer />
    </div>
  );
}
