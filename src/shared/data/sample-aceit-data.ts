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
        percentComplete: 0.615263
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
    title: "Work on the 2nd Moodboard",
    duedate: new Date('2025-05-04T00:00:00.000Z'),
    percentCompleted: 0.85,
    dueSoon: true
  },
  {
    id: "16256ha6s57a",
    title: "Work on the 3rd Moodboard",
    duedate: new Date('2025-05-06T00:00:00.000Z'),
    percentCompleted: 0.6,
    dueSoon: false
  },
  {
    id: "26172636556a",
    title: "Refine the Sitemap for GoStart (w/ Lecturer Feedbacks)",
    duedate: new Date('2025-05-08T00:00:00.000Z'),
    percentCompleted: 0.25,
    dueSoon: false
  },
  {
    id: "b87a8s6576s",
    title: "Start building the digital wireframes (web).",
    duedate: new Date('2025-05-09T00:00:00.000Z'),
    percentCompleted: 0,
    dueSoon: false
  },
  {
    id: "a78ns6765d8",
    title: "Start building the digital wireframes (mobile).",
    duedate: new Date('2025-05-11T00:00:00.000Z'),
    percentCompleted: 0,
    dueSoon: false
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