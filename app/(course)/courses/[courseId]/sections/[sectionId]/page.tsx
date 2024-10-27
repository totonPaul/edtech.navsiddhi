import SectionsDetails from "@/components/sections/SectionsDetails";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { Resource } from "@prisma/client";
import { redirect } from "next/navigation";
import courses from "@/resources/courses"

const SectionDetailsPage = async ({
  params,
}: {
  params: { courseId: string; sectionId: string };
}) => {
  const { courseId, sectionId } = params;
  const { userId } = auth();

  if (!userId) {
    return redirect("/sign-in");
  }

  // const course = await db.course.findUnique({
  //   where: {
  //     id: courseId,
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

  // if (!course) {
  //   return redirect("/");
  // }
  function getCourseById(courseId: string) {
    return courses.find((courseObj) => courseObj.id === courseId);
  }
  const course = getCourseById(params.courseId)
  if (!course) {
    return redirect("/");
  }

  // const section = await db.section.findUnique({
  //   where: {
  //     id: sectionId,
  //     courseId,
  //     isPublished: true,
  //   },
  // });

  // if (!section) {
  //   return redirect(`/courses/${courseId}/overview`);
  // }
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
  const section = publishedSections.find((pub_section) => pub_section.id === sectionId);
  if (!section) {
      return redirect(`/courses/${courseId}/overview`);
    }

  // const purchase = await db.purchase.findUnique({
  //   where: {
  //     customerId_courseId: {
  //       customerId: userId,
  //       courseId,
  //     },
  //   },
  // });

  // let muxData = null;
  // let resources: Resource[] = [];

  // if (section.isFree || purchase) {
  //   muxData = await db.muxData.findUnique({
  //     where: {
  //       sectionId,
  //     },
  //   });
  // }

  // if (purchase) {
  //   resources = await db.resource.findMany({
  //     where: {
  //       sectionId,
  //     },
  //   });
  // }

  // const progress = await db.progress.findUnique({
  //   where: {
  //     studentId_sectionId: {
  //       studentId: userId,
  //       sectionId,
  //     },
  //   },
  // });
  const purchase = true

  return (
    <SectionsDetails
      course={course}
      section={section}
      // purchase={purchase}
      // muxData={muxData}
      // resources={resources}
      // progress={progress}
    />
  );
};

export default SectionDetailsPage;
