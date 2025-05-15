
export const assignmentsData = [
  // Ongoing
  {
    id: "11726",
    assignmentTitle: "Create a UX Prototype",
    module: "DX8172",
    milestone: {
      title: "Group Presentation",
      date: new Date("2025-05-16").toLocaleDateString("en-SG"), 
    },
    progressPercent: 0.88,
    isGroup: true,
    status: "ongoing",
    tags: [
      { id: "1", tagTitle: "UX" },
      { id: "2", tagTitle: "Figma" }
    ]
  },
  {
    id: "12374",
    assignmentTitle: "Build Core eCommerce Features",
    module: "DX7172",
    milestone: {
      title: "Code Review Session",
      date: new Date("2025-05-19").toLocaleDateString("en-SG"),
    },
    progressPercent: 0.71,
    isGroup: false,
    status: "ongoing",
    tags: [
      { id: "3", tagTitle: "Coding" },
      { id: "4", tagTitle: "Web" },
      { id: "5", tagTitle: "JS" }
    ]
  },
  {
    id: "13921",
    assignmentTitle: "Research Paper: AI Ethics in Design",
    module: "DX9001",
    milestone: {
      title: "Lecturer Check-in",
      date: new Date("2025-05-17").toLocaleDateString("en-SG"), 
    },
    progressPercent: 0.55,
    isGroup: false,
    status: "ongoing",
    tags: [
      { id: "6", tagTitle: "AI" },
      { id: "7", tagTitle: "Ethics" },
      { id: "8", tagTitle: "Research" }
    ]
  },

  // Upcoming
  {
    id: "14568",
    assignmentTitle: "Final Project Proposal",
    module: "DX8172",
    milestone: {
      title: "Proposal Submission",
      date: new Date("2025-05-28").toLocaleDateString("en-SG"), 
    },
    progressPercent: 0.20,
    isGroup: true,
    status: "ongoing",
    tags: [
      { id: "1", tagTitle: "UX" },
      { id: "9", tagTitle: "Project Management" }
    ]
  },
  {
    id: "15293",
    assignmentTitle: "Build an interactive Web App",
    module: "DX7172",
    milestone: {
      title: "Second Lecturer Check-in",
      date: new Date("2025-06-05").toLocaleDateString("en-SG"), 
    },
    progressPercent: 0, 
    isGroup: false,
    status: "ongoing",
    tags: [
      { id: "3", tagTitle: "Coding" },
      { id: "4", tagTitle: "Web" },
      { id: "10", tagTitle: "HTML" },
      { id: "5", tagTitle: "JS" }
    ]
  },
  {
    id: "16017",
    assignmentTitle: "UI Trends",
    module: "DX8172",
    milestone: {
      title: "Final Lecturer Check-in",
      date: new Date("2025-06-10").toLocaleDateString("en-SG"), 
    },
    progressPercent: 0,
    isGroup: false,
    status: "ongoing",
    tags: [
      { id: "1", tagTitle: "UX" },
      { id: "11", tagTitle: "UI" },
      { id: "12", tagTitle: "Trends" }
    ]
  },

  // Completed
  {
    id: "17652",
    assignmentTitle: "Assignment 1: Introduction to JavaScript",
    module: "DX7172",
    milestone: {
      title: "Assignment Submitted",
      date: new Date("2025-05-10").toLocaleDateString("en-SG"), 
    },
    progressPercent: 1,
    isGroup: false,
    status: "submitted",
    tags: [
      { id: "3", tagTitle: "Coding" },
      { id: "5", tagTitle: "JS" }
    ]
  },
  {
    id: "18379",
    assignmentTitle: "Group Project: Design Thinking Workshop",
    module: "DX8172",
    milestone: {
      title: "Project Completed",
      date: new Date("2025-05-08").toLocaleDateString("en-SG"), 
    },
    progressPercent: 1,
    isGroup: true,
    status: "submitted",
    tags: [
      { id: "1", tagTitle: "UX" },
      { id: "13", tagTitle: "Design Thinking" }
    ]
  },
  {
    id: "19103",
    assignmentTitle: "Reading Response: The Design of Everyday Things",
    module: "DX8172",
    milestone: {
      title: "Response Submitted",
      date: new Date("2025-04-25").toLocaleDateString("en-SG"), 
    },
    progressPercent: 1, 
    isGroup: false,
    status: "completed",
    tags: [
      { id: "1", tagTitle: "UX" },
      { id: "14", tagTitle: "Reading" }
    ]
  }
];

export const assignmentDetails = {
  id: "11726",
  assignmentTitle: "Create a UX Prototype",
  dueDate: new Date("2025/05/18").toLocaleDateString("en-SG"),
  description: "<p>We will generate a simple description here. But it can store&nbsp;<strong>rich text</strong>&nbsp;also.</p><p><ul><li>List Item 1</li><li>List Item 2</li><li>List Item 3</li></ul></p>",
  module: "DX8172",
  progressPercent: 0.88,
  isGroup: true,
  status: "ongoing",
  teamMembers: [
    {
      id: "172638C",
      studentName: "Agnes Yeo Ting Ting",
      profileImg: "/female-student-chinese.jpg"
    },
    {
      id: "172123B",
      studentName: "Michael Chan Chu Leng",
      profileImg: "/male-student-chinese.jpg"
    },
    {
      id: "273653F",
      studentName: "Avathi Kumar",
      profileImg: "/female-student-indian.jpg"
    },
  ],
  tags: [
    { id: "1", tagTitle: "UX" },
    { id: "2", tagTitle: "Figma" }
  ]
};