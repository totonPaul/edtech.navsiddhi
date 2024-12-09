const categories = [
    {
      name: "IT & Software",
      id: "1",
      subCategories: [
          { name: "Digital Data & Computer Electronics", id: "1-1" },
          { name: "Computer Science Fundamentals", id: "1-2" },
          { name: "Basics of Programming", id: "1-3" },
          { name: "Application Development", id: "1-4" },
          { name: "Problem Solving", id: "1-5" },
          { name: "Others", id: "1-6" },
      ],
      courses: [
        "a", "b", "c", "d", "e", "f", "g", "h"
      ]
    },
    {
      name: "Business",
      id: "2",
      subCategories: [
          { name: "E-Commerce", id: "2-1" },
          { name: "Marketing", id: "2-2" },
          { name: "Finance", id: "2-3" },
          { name: "Others", id: "2-4" },
      ],
      courses: []
    },
    {
      name: "Design",
      id: "3",
      subCategories: [
          { name: "Graphic Design", id: "3-1" },
          { name: "3D & Animation" , id: "3-2"},
          { name: "Interior Design", id: "3-3" },
          { name: "Others", id: "3-4" },
      ],
      courses: []
    },
    {
      name: "Health",
      id:"4",
      subCategories: [
          { name: "Fitness", id: "4-1" },
          { name: "Yoga", id: "4-2" },
          { name: "Nutrition", id: "4-3" },
          { name: "Others", id: "4-4"},
      ],
      courses: []
    },
  ];

export default categories
