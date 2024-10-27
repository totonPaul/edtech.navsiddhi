import { clerkClient } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";
import courses from "@/resources/courses"

// import { db } from "@/lib/db";
import ReadText from "@/components/custom/ReadText";
import SectionMenu from "@/components/layout/SectionMenu";

const CourseOverview = async ({ params }: { params: { courseId: string } }) => {
  // const course = await db.course.findUnique({
  //   where: {
  //     id: params.courseId,
  //     isPublished: true,
  //   },
  //   include: {
  //     sections: {
  //       where: {
  //         isPublished: true,
  //       },
  //     },
  //   },
  // });
  function getCourseById(courseId: string) {
    return courses.find((courseObj) => courseObj.id === courseId);
  }
  const course = getCourseById(params.courseId)
  if (!course) {
    return redirect("/");
  }

  // const instructor = await clerkClient.users.getUser(course.instructorId);

  let level;

  if (course.level) {
    level = course.level
  }

  return (
    <div className="px-6 py-4 flex flex-col gap-5 text-sm">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">{course.title}</h1>
        <SectionMenu course={course} />
      </div>

      <p className="font-medium">{course.subtitle}</p>

      <div className="flex gap-2 items-center">
        {/* <Image
          src={
            instructor.imageUrl
              ? instructor.imageUrl
              : "/avatar_placeholder.jpg"
          }
          alt={instructor.fullName ? instructor.fullName : "Instructor photo"}
          width={30}
          height={30}
          className="rounded-full"
        /> */}
        <p className="font-bold">Instructor:</p>
        <p>{course.instructor}</p>
      </div>

      <div className="flex gap-2">
        <p className="font-bold">Price:</p>
        <p>${course.price}</p>
      </div>

      <div className="flex gap-2">
        <p className="font-bold">Level:</p>
        <p>{level}</p>
      </div>

      <div className="flex flex-col gap-2">
        <p className="font-bold">Description:</p>
        <ReadText value={course.description!} />
      </div>
    </div>
  );
};

export default CourseOverview;
