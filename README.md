# AceIt: A Student Assignment Tracker

AceIt is a visually-driven student assignment tracker web application built with React, Next.js, and TypeScript, designed to help students stay organized, manage deadlines effectively, and gain insights into their academic performance. It is also part of a series of portfolio showcase projects that I'm currently managing.

## Why AceIt?

At the time of writing this, I am still a part-time student myself, I knew firsthand the challenges of juggling coursework, deadlines, and a life outside of academics.  Going back to my time as a full-time student, I still remember how easy it can be to feel overwhelmed by the sheer volume of assignments, especially when juggling multiple courses or modules. 

I've chosen to build AceIt as a way to address a personal need for a more visually driven, intuitive assignment tracker.  I wanted a tool that would fulfil a few core functionalities:

- 👀 Provide a clear overview of upcoming deadlines and progress. No more scrambling to remember due dates or feeling lost in a sea of tasks.

- 🍕 Help me break down large assignments into manageable tasks. Conquering a project, one step at a time.

- 📊 Offer insights into my study habits and performance. Understanding my strengths and areas for improvement.

AceIt is crafted with simplicity and effectiveness in mind. It leverages the power of data visualization to empower students to take control of their academic journey and, as the name suggests, **AceIt**!

## Core Features

### I. Dashboard:

- Upcoming Deadlines Visual Timeline:  Displays assignments due soonest, visually grouped by module/subject (Gantt chart style).
  - Progress Summary:
    - Overall assignment completion percentage.
    - (Optional) Current overall grade average (if applicable/integrates with grading system).
  - Reminders & Notifications:
    - Visually prominent alerts for approaching deadlines, review sessions, etc.

### II. Assignments:

- List View:
  - Displays all assignments from all modules/subjects.
  - Sortable/filterable by due date, module/subject, completion status. 
  - Each assignment entry shows:
    - Title
    - Module/Subject
    - Due Date
    - Progress (e.g., % complete, visual indicator)
    - Quick action button (e.g., "View Details")
- Calendar View:
  - Alternative visual representation of assignment deadlines across all modules/subjects.
  - Users can switch between List and Calendar views.
- Assignment Details (Individual Assignment View):
  - Accessed by clicking an assignment from the List or Calendar view.
  - Displays full assignment details:
    - Title
    - Module/Subject
    - Description
    - Due Date
    - Attached Files (if applicable)
    - Notes section (for student's own notes)
  - Task Management section (see below)

### III. Task Management (within Assignment Details):


- Task List:
  - Breakdown of tasks for the selected assignment.
  - Each task shows:
    - Title
    - Due Date (can be different from the overall assignment due date)
    - Status (To Do, In Progress, Complete)
  - Actions:
    - Add new tasks
    - Edit existing task details
    - Mark tasks as complete
    - Re-order tasks (optional drag-and-drop)

### IV. Settings:

- (Future Consideration) Notifications:
  - Customize notification preferences (types, frequency).
- (Future Consideration) Integrations:
  - Potentially link with learning management systems (Canvas, Moodle, etc.)

## Daily Logs (Latest to Oldest)

### 29th Apr, Tue: Scope Breakdown & UX Wireframes

#### Goal for Today

- Break down the high-level scope into detailed functionalities and features for each page of the app that we're showcasing.
- Keep the scope to within 3~5 pages. There can be smaller pop-ups like KendoReact Windows/Dialogs within those pages, and it's fine. Within the context of this project, we're referring to actual web pages/navigation.
- Generate a series of hand-drawn wireframes for the different pages and key sections.

#### What was Done
- Generated the Next.js boilerplate project.
- Updated the README file.
- 

#### What I've Learned/Discovered
-

#### Potential Challenges/Solutions
-

### 28th Apr, Mon: Opening Project Discussion

- Worked with Gemini to brainstorm and decide on the next showcase project.
- Decided to name it "AceIt".
- This will be a school assignment tracking app.
- Defined the scope (high-level), and core features.

