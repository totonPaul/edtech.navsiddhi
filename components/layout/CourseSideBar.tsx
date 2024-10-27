import { db } from "@/lib/db";
// import { Course, Section } from "@prisma/client";
import { CourseType, SectionType } from "@/lib/types";
import courses from "@/resources/courses"

import Link from "next/link";
import { Progress } from "../ui/progress";

interface CourseSideBarProps {
  course: CourseType & { sections: SectionType[] };
  studentId: string;
}

const CourseSideBar = async ({ course, studentId }: CourseSideBarProps) => {
  // const publishedSections = await db.section.findMany({
  //   where: {
  //     courseId: course.id,
  //     isPublished: true,
  //   },
  //   orderBy: {
  //     position: "asc",
  //   },
  // });
  function getCourseSections(courseId: string) {
    const course = courses.find((course) => course.id === courseId);
    
    if (course) {
      return course.sections; // returns an array of SectionType objects
    } else {
      console.warn(`Course with id ${courseId} not found.`);
      return []; // Return an empty array if course not found
    }
  }
  const publishedSections = getCourseSections(course.id)

  const publishedSectionIds = publishedSections.map((section) => section.id);

  // const purchase = await db.purchase.findUnique({
  //   where: {
  //     customerId_courseId: {
  //       customerId: studentId,
  //       courseId: course.id,
  //     },
  //   },
  // });
  // const purchase = true

  // const completedSections = await db.progress.count({
  //   where:{
  //     studentId,
  //     sectionId: {
  //       in: publishedSectionIds,
  //     },
  //     isCompleted: true,
  //   }
  // });

  // const progressPercentage = (completedSections / publishedSectionIds.length) * 100;

  return (
    <div className="hidden md:flex flex-col w-64 border-r shadow-md px-3 my-4 text-sm font-medium">
      <h1 className="text-lg font-bold text-center mb-4">{course.title}</h1>
      {/* {purchase && (
        <div>
          <Progress value={progressPercentage} className="h-2" />
          <p className="text-xs">{Math.round(progressPercentage)}% completed</p>
        </div>
      )} */}
      <Link
        href={`/courses/${course.id}/overview`}
        className={`p-3 rounded-lg hover:bg-[#FFF8EB] mt-4`}
      >
        Overview
      </Link>
      {publishedSections.map((section) => (
        <Link
          key={section.id}
          href={`/courses/${course.id}/sections/${section.id}`}
          className="p-3 rounded-lg hover:bg-[#FFF8EB] mt-4"
        >
          {section.title}
        </Link>
      ))}
    </div>
  );
};

export default CourseSideBar;
