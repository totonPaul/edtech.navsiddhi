// Architecture for static free public rendering of courses
// with paid offline courses

// and moving forward, full fledged paid online courses

// 1) store individual course meta data as a list in resource/courses.js ,
// [
//     courseId : {
//         id: "axhg",
//         category: "Coding",
//         subCategory: "Problem Solving",
//         level: "Begineer",
//         course_image: "resource/courseId/courseImages/intro.jpg",
//         title: "Basic Mathematics for programming",
//         subTitle: "For class 9 and 10 students",
//         instructor: "Sudeep Paul",
//         sections: [], // list of section ids, each section id constructed as courseId-sectionNumber
//         overViewPath: "resource/courseId/courseOverview/overview.js",
//         sectionPaths:["resource/courseId/courseSections/sectionId.js"]
//     }
// ]

// 2) Store images in "resource/courseId/courseImages"
// 3) Store overview in "resource/courseId/courseOverview"
// 4) Store section content in "resource/courseId/courseSections"

const courses = [
  {
        id: "a",
        category: "IT & Software",
        subCategory: "Others",
        categoryId: "1",
        subCategoryId: "1-4",
        level: "Begineer",
        imageUrl: "/resources/a/a.png",
        title: "Basic Mathematics for programming",
        subtitle: "Maths for Problem solving",
        description: "This course is to build problem solving skills for class 9 and 10 students", 
        instructor: "Sudeep Paul",
        sections: [{id: "a-1", title : "Introduction" }], // list of section ids, each section id constructed as courseId-sectionNumber
        price: "Free"
  },
];

export default courses;
