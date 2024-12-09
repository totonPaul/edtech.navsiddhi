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
        subCategory: "Digital Data & Computer Electronics",
        categoryId: "1",
        subCategoryId: "1-1",
        level: "Begineer",
        imageUrl: "/resources/a/a.png",
        title: "Deep Dive into Computer Electronics",
        subtitle: "Basics about Electronic components inside computer",
        description: "In this course we are going to learn about the basics of computer electronics and how a computer's hardware and software work together. ", 
        instructor: "Sudeep Paul",
        sections: [{id: "a-1", title : "Introduction | Build the basics" }], // list of section ids, each section id constructed as courseId-sectionNumber
        price: "Free"
  },
  {
    id: "b",
    category: "IT & Software",
    subCategory: "Digital Data & Computer Electronics",
    categoryId: "1",
    subCategoryId: "1-1",
    level: "Begineer",
    imageUrl: "/resources/b/b.png",
    title: "Digital Data and Binary Storage in Computing",
    subtitle: "How digital data is stored for computation?",
    description: "In this course we are going to learn about digital data and how any type of data is stored in binary format for computations. ", 
    instructor: "Sudeep Paul",
    sections: [{id: "b-1", title : "Introduction | Build the basics" }], // list of section ids, each section id constructed as courseId-sectionNumber
    price: "Free"
  },
  {
    id: "c",
    category: "IT & Software",
    subCategory: "Computer Science Fundamentals",
    categoryId: "1",
    subCategoryId: "1-2",
    level: "Begineer",
    imageUrl: "/resources/c/c.png",
    title: "Operating System The Core Software",
    subtitle: "How softwares like windows and linux manage apps running on your device?",
    description: "In this course we are going to learn how an Operating system like Windows works and how it manages applications running on your device. ", 
    instructor: "Sudeep Paul",
    sections: [{id: "c-1", title : "Introduction | Build the basics" }], // list of section ids, each section id constructed as courseId-sectionNumber
    price: "Free"
  },
  {
    id: "d",
    category: "IT & Software",
    subCategory: "Computer Science Fundamentals",
    categoryId: "1",
    subCategoryId: "1-2",
    level: "Begineer",
    imageUrl: "/resources/d/d.png",
    title: "Computer Networks and The Internet",
    subtitle: "Everything about the Internet!",
    description: "In this course we are going to learn end to end computer networks and the Internet. ", 
    instructor: "Sudeep Paul",
    sections: [{id: "d-1", title : "Introduction | Build the basics" }], // list of section ids, each section id constructed as courseId-sectionNumber
    price: "Free"
  },
  {
    id: "e",
    category: "IT & Software",
    subCategory: "Basics of Programming",
    categoryId: "1",
    subCategoryId: "1-3",
    level: "Begineer",
    imageUrl: "/resources/e/e.png",
    title: "Python Programming Language",
    subtitle: "Python and its applications!",
    description: "In this course we are going to learn about python programming language and its applications.", 
    instructor: "Sudeep Paul",
    sections: [{id: "e-1", title : "Introduction | Build the basics" }], // list of section ids, each section id constructed as courseId-sectionNumber
    price: "Free"
  },
  {
    id: "f",
    category: "IT & Software",
    subCategory: "Application Development",
    categoryId: "1",
    subCategoryId: "1-4",
    level: "Begineer",
    imageUrl: "/resources/f/f.png",
    title: "Web Application Development",
    subtitle: "Build Web Applications end to end!",
    description: "In this course we are going to build web applications and learn how different components of a website coordinate together over the internet..", 
    instructor: "Sudeep Paul",
    sections: [{id: "f-1", title : "Introduction | Build the basics" }], // list of section ids, each section id constructed as courseId-sectionNumber
    price: "Free"
  },
  {
    id: "g",
    category: "IT & Software",
    subCategory: "Application Development",
    categoryId: "1",
    subCategoryId: "1-4",
    level: "Begineer",
    imageUrl: "/resources/g/g.png",
    title: "Android Application Development",
    subtitle: "Build Android Applications end to end!",
    description: "In this course we are going to build Android Applications and learn and how different components of an android application run on your android operating system.",
    instructor: "Sudeep Paul",
    sections: [{id: "g-1", title : "Introduction | Build the basics" }], // list of section ids, each section id constructed as courseId-sectionNumber
    price: "Free"
  },
  {
    id: "h",
    category: "IT & Software",
    subCategory: "Problem Solving",
    categoryId: "1",
    subCategoryId: "1-5",
    level: "Begineer",
    imageUrl: "/resources/h/h.png",
    title: "Problem Solving ( DSA ) in JAVA",
    subtitle: "Build Logic in Programming!",
    description: "In this course we are going to learn data structures and algorithms in JAVA.",
    instructor: "Sudeep Paul",
    sections: [{id: "h-1", title : "Introduction | Build the basics" }], // list of section ids, each section id constructed as courseId-sectionNumber
    price: "Free"
  },
];

export default courses;
