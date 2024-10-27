// import { db } from "@/lib/db";
// import { clerkClient } from "@clerk/nextjs/server";
// import { Course } from "@prisma/client";
import { CourseType } from "@/lib/types";
import { Gem } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CourseCard = async ({ course }: { course: CourseType  }) => {
  // const instructor = await clerkClient.users.getUser(course.instructorId);

  // let level;

  // if (course.levelId) {
  //   level = await db.level.findUnique({
  //     where: {
  //       id: course.levelId,
  //     },
  //   });
  // }
  const courseData = course;
  const level = courseData.level
  return (
    <Link
      href={`/courses/${courseData.id}/overview`}
      className="border rounded-lg cursor-pointer"
    >
      <Image
        src={courseData.imageUrl ? courseData.imageUrl : "/image_placeholder.webp"}
        alt={courseData.title}
        width={500}
        height={300}
        className="rounded-t-xl w-[320px] h-[180px] object-cover"
      />
      <div className="px-4 py-3 flex flex-col gap-2">
        <h2 className="text-lg font-bold hover:[#FDAB04]">{courseData.title}</h2>
        <div className="flex justify-between text-sm font-medium">
          {/* {instructor && (
            <div className="flex gap-2 items-center">
              <Image
                src={
                  instructor.imageUrl
                    ? instructor.imageUrl
                    : "/avatar_placeholder.jpg"
                }
                alt={
                  instructor.fullName ? instructor.fullName : "Instructor photo"
                }
                width={30}
                height={30}
                className="rounded-full"
              />
              <p>{instructor.fullName}</p>
            </div>
          )} */}
          {level && (
            <div className="flex gap-2">
              <Gem size={20} />
              <p>{level}</p>
            </div>
          )}
        </div>

        <p className="text-sm font-bold">$ {courseData.price}</p>
      </div>
    </Link>
  );
};

export default CourseCard;
