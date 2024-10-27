import { db } from "@/lib/db"
// import { Course } from "@prisma/client"
import { CourseType } from "@/lib/types";
import courses from "@/resources/courses"


const getCoursesByCategory = async (categoryId: string | null): Promise<CourseType[]> => {
  // const whereClause: any = {
  //   ...(categoryId ? { categoryId, isPublished: true } : { isPublished: true }),
  // }
  // const courses = await db.course.findMany({
  //   where: whereClause,
  //   include: {
  //     category: true,
  //     subCategory: true,
  //     level: true,
  //     sections: {
  //       where: {
  //         isPublished: true,
  //       }
  //     },
  //   },
  //   orderBy: {
  //     createdAt: "desc",
  //   },
  // })
  // const courses = []

  return courses
}

export default getCoursesByCategory