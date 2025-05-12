export const assignmentsData = [
  {
		id: 'asn16253',
    title: 'DX2361 | Build a UX Prototype for a Digital Product.',
  	duedate: '21 June',
	},
	{
		id: 'asn16165',
    title: 'DX1162 | Build a Responsive Web Application/Website.',
  	duedate: '27 June',
	},
	{
		id: 'asn16879',
    title: 'DX1164 | Creating a Service Experience Proposal.',
  	duedate: '30 June',
	}
];

export const ganttTasksData = [
  {
    id: 7,
    title: 'UX Design',
    start: new Date('2025-04-28T00:00:00.000Z'),
    end: new Date('2025-05-25T00:00:00.000Z'),
    percentComplete: 0.716253,
    isExpanded: true,
    subtasks: [
      {
        id: 8,
        title: 'User Flow',
        start: new Date('2025-04-28T00:00:00.000Z'),
        end: new Date('2025-04-30T00:00:00.000Z'),
        percentComplete: 1.00
      },
      {
        id: 9,
        title: 'Information Architecture',
        start: new Date('2025-05-01T00:00:00.000Z'),
        end: new Date('2025-05-03T00:00:00.000Z'),
        percentComplete: 0.756612
      },
      {
        id: 10,
        title: 'Sketched Wireframes',
        start: new Date('2025-05-03T00:00:00.000Z'),
        end: new Date('2025-05-08T00:00:00.000Z'),
        percentComplete: 0.756612
      },
      {
        id: 11,
        title: 'Digital Wireframes',
        start: new Date('2025-05-09T00:00:00.000Z'),
        end: new Date('2025-05-12T00:00:00.000Z'),
        percentComplete: 0.756612
      },
      {
        id: 12,
        title: 'Moodboards & Stylescapes',
        start: new Date('2025-05-06T00:00:00.000Z'),
        end: new Date('2025-05-12T00:00:00.000Z'),
        percentComplete: 0.357687
      }
    ],
  }
];

export const ganttTasksDependencies = [
  {
    id: 528,
    fromId: 8,
    toId: 9,
    type: 1
  },
  {
    id: 529,
    fromId: 8,
    toId: 10,
    type: 1
  },
  {
    id: 530,
    fromId: 9,
    toId: 10,
    type: 1
  },
  {
    id: 531,
    fromId: 10,
    toId: 11,
    type: 1
  }
];

export const homeTasksData = [
  {
    id: "8js61ns98ss6",
    assignment: "DX2361 | Build a UX Prototype for a Digital Product.",
    title: "Work on the 2nd Moodboard",
    duedate: new Date('2025-05-04T00:00:00.000Z'),
    percentCompleted: 0.8,
    dueSoon: true
  },
  {
    id: "16256ha6s57a",
    assignment: "DX2361 | Build a UX Prototype for a Digital Product.",
    title: "Work on the 3rd Moodboard",
    duedate: new Date('2025-05-06T00:00:00.000Z'),
    percentCompleted: 0.6,
    dueSoon: false
  },
  {
    id: "26172636556a",
    assignment: "DX1162 | Build a Responsive Web Application/Website.",
    title: "Refine the Sitemap for GoStart (w/ Lecturer Feedbacks)",
    duedate: new Date('2025-05-08T00:00:00.000Z'),
    percentCompleted: 0.25,
    dueSoon: false
  },
  {
    id: "b87a8s6576s",
    assignment: "DX1162 | Build a Responsive Web Application/Website.",
    title: "Start building the digital wireframes (web).",
    duedate: new Date('2025-05-09T00:00:00.000Z'),
    percentCompleted: 0,
    dueSoon: false
  },
  {
    id: "a78ns6765d8",
    assignment: "DX1162 | Build a Responsive Web Application/Website.",
    title: "Start building the digital wireframes (mobile).",
    duedate: new Date('2025-05-11T00:00:00.000Z'),
    percentCompleted: 0,
    dueSoon: false
  }
];

export const homeRemindersData = [
  {
    id: "17127367s7d",
    title: "Your first task reminder.",
    hasAlarm: true,
    alarmDate: new Date('2025-05-04T13:30:00.000Z'),
    timeZone: "Asia/Singapore",
    isDone: true
  },
  {
    id: "727266s773",
    title: "Your second task reminder.",
    hasAlarm: false,
    alarmDate: new Date('2025-05-11T00:00:00.000Z'),
    timeZone: "Asia/Singapore",
    isDone: false
  },
  {
    id: "ahs765sjj2",
    title: "Your third task reminder.",
    hasAlarm: false,
    alarmDate: new Date('2025-05-11T00:00:00.000Z'),
    timeZone: "Asia/Singapore",
    isDone: false
  }
];

export const pmProfileData = [
  {
      name: 'Collaboration',
      score: 6
  },
  {
      name: 'Problem-solving',
      score: 9
  },
  {
      name: 'Critical Thinking',
      score: 8
  },
  {
      name: 'Time Management',
      score: 6
  },
  {
      name: 'Presentation Skills',
      score: 7
  },
];

export const avgGradeHistoData = [0, 0, 2, 9, 3, 1];
export const gradeCategoriesData = ["E", "D", "C", "B", "A", "AD"];
export const assignmentHistoryData = [
  {
    id: "12761",
    assignment: "Assignment 1",
    module: "DX8172",
    dateCompleted: new Date("2023-05-04").toLocaleDateString("en-SG"),
    finalGrade: "AD"
  },
  {
    id: "12872",
    assignment: "Assignment 2",
    module: "DX8173",
    dateCompleted: new Date("2023-05-06").toLocaleDateString("en-SG"),
    finalGrade: "A"
  },
  {
    id: "11726",
    assignment: "Assignment 7",
    module: "DX1625",
    dateCompleted: new Date("2024-11-06").toLocaleDateString("en-SG"),
    finalGrade: "A"
  },
  {
    id: "11734",
    assignment: "Assignment 6",
    module: "DX1127",
    dateCompleted: new Date("2023-11-12").toLocaleDateString("en-SG"),
    finalGrade: "A"
  },
  {
    id: "16726",
    assignment: "Assignment 5",
    module: "DX3227",
    dateCompleted: new Date("2023-05-11").toLocaleDateString("en-SG"),
    finalGrade: "B"
  },
  {
    id: "15263",
    assignment: "Assignment 11",
    module: "DX7672",
    dateCompleted: new Date("2024-05-16").toLocaleDateString("en-SG"),
    finalGrade: "B"
  },
  {
    id: "11234",
    assignment: "Assignment 10",
    module: "DX10237",
    dateCompleted: new Date("2023-05-15").toLocaleDateString("en-SG"),
    finalGrade: "B"
  }
];

export const submissionRatingData = [
  {
    kind: "On-time",
    percent: .87
  },
  {
    kind: "Late",
    percent: .13
  }
];

export const submissionHistoryData = [
  {
    id: "12761",
    assignment: "Assignment 1",
    module: "DX8172",
    submission: "On-time",
    finalGrade: "AD"
  },
  {
    id: "12872",
    assignment: "Assignment 2",
    module: "DX8173",
    submission: "On-time",
    finalGrade: "A"
  },
  {
    id: "11726",
    assignment: "Assignment 7",
    module: "DX1625",
    submission: "Late",
    finalGrade: "A"
  },
  {
    id: "11734",
    assignment: "Assignment 6",
    module: "DX1127",
    submission: "On-time",
    finalGrade: "A"
  },
  {
    id: "16726",
    assignment: "Assignment 5",
    module: "DX3227",
    submission: "On-time",
    finalGrade: "B"
  },
  {
    id: "15263",
    assignment: "Assignment 11",
    module: "DX7672",
    submission: "On-time",
    finalGrade: "B"
  },
  {
    id: "11234",
    assignment: "Assignment 10",
    module: "DX10237",
    submission: "On-time",
    finalGrade: "B"
  }
];

export const overallAppraisalRating = [
  {
    name: 'Communication',
    score: 7
  },
  {
    name: 'Contribution',
    score: 6
   },
  {
    name: 'Problem-Solving',
    score: 8
  },
  {
    name: 'Teamwork',
    score: 6
  },
  {
    name: 'Professionalism',
    score: 7
  },
];

export const sem1Appraisal = [
  {
    name: 'Communication',
    min: 6.5,
    max: 7.6
  },
  {
    name: 'Contribution',
    min: 6.8,
    max: 8.7
  },
  {
    name: 'Problem-Solving',
    min: 7.1,
    max: 8.6
  },
  {
    name: 'Teamwork',
    min: 6.5,
    max: 7.8
  },
  {
    name: 'Professionalism',
    min: 5.6,
    max: 6.9
  },
];

export const sem2Appraisal = [
  {
    name: 'Communication',
    min: 6.7,
    max: 7.5
  },
  {
    name: 'Contribution',
    min: 7.0,
    max: 8.5
  },
  {
    name: 'Problem-Solving',
    min: 6.8,
    max: 8.2
  },
  {
    name: 'Teamwork',
    min: 6.8,
    max: 8.2
  },
  {
    name: 'Professionalism',
    min: 6.0,
    max: 7.4
  },
];

export const sem3Appraisal = [
  {
    name: 'Communication',
    min: 7.0,
    max: 8.1
  },
  {
    name: 'Contribution',
    min: 7.5,
    max: 8.5
  },
  {
    name: 'Problem-Solving',
    min: 7.2,
    max: 8.2
  },
  {
    name: 'Teamwork',
    min: 7.3,
    max: 8.6
  },
  {
    name: 'Professionalism',
    min: 7.0,
    max: 8.1
  },
];

export const semesters = [
  { text: "Semester 1", id: 1 },
  { text: "Semester 2", id: 2 },
  { text: "Semester 3", id: 3 }
];

export const sem1PMProfile = [
  {
    name: 'Collaboration',
    min: 5.6,
    max: 7.7
  },
  {
    name: 'Problem-solving',
    min: 6.1,
    max: 7.8
  },
  {
    name: 'Critical Thinking',
    min: 7.1,
    max: 8.4
  },
  {
    name: 'Time Management',
    min: 7.6,
    max: 8.6
  },
  {
    name: 'Presentation Skills',
    min: 6.1,
    max: 7.3
  },
];

export const sem2PMProfile = [
  {
    name: 'Collaboration',
    min: 6.4,
    max: 7.3
  },
  {
    name: 'Problem-solving',
    min: 6.8,
    max: 8.1
  },
  {
    name: 'Critical Thinking',
    min: 7.0,
    max: 8.6
  },
  {
    name: 'Time Management',
    min: 6.9,
    max: 8.1
  },
  {
    name: 'Presentation Skills',
    min: 7.1,
    max: 7.9
  },
];

export const sem3PMProfile = [
  {
    name: 'Collaboration',
    min: 6.1,
    max: 7.3
  },
  {
    name: 'Problem-solving',
    min: 6.8,
    max: 7.9
  },
  {
    name: 'Critical Thinking',
    min: 6.7,
    max: 8.5
  },
  {
    name: 'Time Management',
    min: 6.5,
    max: 7.5
  },
  {
    name: 'Presentation Skills',
    min: 6.5,
    max: 7.6
  },
];

export const sem1Feedbacks = [
  {
    id: 3,
    feedbackContent: "This is a sample feedback by a lecturer about how the student has performed under a particular category of the project management. We want this text to be longer to see if the spacing and dimension is good enough.",
    module: "DX1625",
    category: "Collaboration",
    profilePic: "/female-lecturer-profile-image-01.jpg",
    lecturer: "Mandy Mok",
    dateGiven: new Date("2023-05-17").toLocaleDateString("en-SG"),
  },
  {
    id: 2,
    feedbackContent: "This is a sample feedback by a lecturer about how the student has performed under a particular category of the project management. We want this text to be longer to see if the spacing and dimension is good enough.",
    module: "DX8173",
    category: "Problem-solving",
    profilePic: "/male-lecturer-profile-image-01.jpg",
    lecturer: "Jimmy Yuen",
    dateGiven: new Date("2023-05-17").toLocaleDateString("en-SG"),
  },
  {
    id: 1,
    feedbackContent: "This is a sample feedback by a lecturer about how the student has performed under a particular category of the project management. We want this text to be longer to see if the spacing and dimension is good enough.",
    module: "DX3227",
    category: "Time Management",
    profilePic: "/male-lecturer-profile-image-02.jpg",
    lecturer: "Tee Soon Lok",
    dateGiven: new Date("2023-05-15").toLocaleDateString("en-SG"),
  }
];

export const sem2Feedbacks = [
  {
    id: 6,
    feedbackContent: "This is a sample feedback by a lecturer about how the student has performed under a particular category of the project management. We want this text to be longer to see if the spacing and dimension is good enough.",
    module: "DX10237",
    category: "Collaboration",
    profilePic: "/male-lecturer-profile-image-02.jpg",
    lecturer: "Tee Soon Lok",
    dateGiven: new Date("2023-11-09").toLocaleDateString("en-SG"),
  },
  {
    id: 5,
    feedbackContent: "This is a sample feedback by a lecturer about how the student has performed under a particular category of the project management. We want this text to be longer to see if the spacing and dimension is good enough.",
    module: "DX1127",
    category: "Problem-solving",
    profilePic: "/male-lecturer-profile-image-01.jpg",
    lecturer: "Jimmy Yuen",
    dateGiven: new Date("2023-11-08").toLocaleDateString("en-SG"),
  },
  {
    id: 4,
    feedbackContent: "This is a sample feedback by a lecturer about how the student has performed under a particular category of the project management. We want this text to be longer to see if the spacing and dimension is good enough.",
    module: "DX8172",
    category: "Time Management",
    profilePic: "/female-lecturer-profile-image-01.jpg",
    lecturer: "Mandy Mok",
    dateGiven: new Date("2024-05-04").toLocaleDateString("en-SG"),
  }
];

export const sem3Feedbacks = [
  {
    id: 6,
    feedbackContent: "This is a sample feedback by a lecturer about how the student has performed under a particular category of the project management. We want this text to be longer to see if the spacing and dimension is good enough.",
    module: "DX10237",
    category: "Collaboration",
    profilePic: "/male-lecturer-profile-image-02.jpg",
    lecturer: "Tee Soon Lok",
    dateGiven: new Date("2024-05-09").toLocaleDateString("en-SG"),
  },
  {
    id: 5,
    feedbackContent: "This is a sample feedback by a lecturer about how the student has performed under a particular category of the project management. We want this text to be longer to see if the spacing and dimension is good enough.",
    module: "DX1127",
    category: "Problem-solving",
    profilePic: "/female-lecturer-profile-image-01.jpg",
    lecturer: "Mandy Mok",
    dateGiven: new Date("2024-05-08").toLocaleDateString("en-SG"),
  },
  {
    id: 4,
    feedbackContent: "This is a sample feedback by a lecturer about how the student has performed under a particular category of the project management. We want this text to be longer to see if the spacing and dimension is good enough.",
    module: "DX8172",
    category: "Time Management",
    profilePic: "/male-lecturer-profile-image-01.jpg",
    lecturer: "Jimmy Yuen",
    dateGiven: new Date("2024-05-04").toLocaleDateString("en-SG"),
  }
];