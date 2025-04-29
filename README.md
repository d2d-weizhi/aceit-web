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

## Work Breakdown
_(Potential Pages + Logical Work Units)_

### Student Dashboard Page (also Home):

#### Not Logged On

- Window/Dialog for Student Login
- Window/Dialog for Setting New Password (school assigned account)
- Background show greyed loading panel items.

#### Logged On

<details>
  <summary>Desktop/Tablet/Mobile (Landscape mode):</summary>

  - Top Panel:
    - Use Accordion to display list of assignments (by default: sort by deadline that is due soonest)
    - Top Accordion will be expanded by default, showing a Gantt chart.
    - Headings will show *"[Assignment name] - 5 Days to Next Check-in >"*
    - Provide a Sort DropDownList so students can also sort by most urgent milestones.
  - Middle Panel:
    - Summary listing of all the most urgent tasks across different modules/assignments.
    - We will display [Task title] - [Due Date] - [% completed + circular progress indicator]
    - Tapping on task item will bring user to task details page view.
  - Bottom Panel:
    - Header will have a "+" button for adding quick reminders.
    - Urgent + Overdue Reminders
    - Tapping on reminder item will open reminders details Window (with functionality to edit/save)
</details>

<details>
  <summary>Mobile (Portrait mode):</summary>

  - Top Panel:
    - Show a simple two-column table
      - 1st Col : Assignment Name
      - 2nd Col : Date for next milestone/due date
    - Provide a Sort DropDownList so students can also sort by most urgent milestones.
    - Tapping on the Assignment will bring it to the details page view.
  - Middle Panel:
    - Summary listing of all the most urgent tasks across different modules/assignments.
    - We will display [Task title (% completed)] - [Due Date]
    - Tapping on task item will bring user to task details page view.
  - Bottom Panel:
    - Header will have a "+" button for adding quick reminders.
    - Urgent + Overdue Reminders
    - Tapping on reminder item will open reminders details Window (with functionality to edit/save)
</details>

### Assignment Listing/Details Page (by Module):

#### Assignment Listing view

<details>
  <summary>Desktop/Tablet/Mobile (Landscape mode)</summary>

  - List all assignments according to their status:
    - **"On-going"**: Refers to current assignments.
    - **"Submitted"**: Assignments undergoing marking/final review.
    - **"Completed"**: Past assignments that are marked.
  - Use a clean, minimalistic UI:
  ```
  [On-going] 
  -------------------------------------------------
  | [Assignment 1]                [Progress Bar]  | 
  | Due: [Date]                   [Tags]          |
  -------------------------------------------------
  | [Assignment 2]                [Progress Bar]  | 
  | Due: [Date]                   [Tags]          |
  ------------------------------------------------- 

  [Submitted]
  -------------------------------------------------
  | [Assignment 3]                [Grade Awarded] |  
  | Submitted: [Date]             [Tags]          |
  ------------------------------------------------- 
  ```
  - Students can also easily drag-and-drop assignments into the relevant sections to automatically mark them as **"Submitted"**.
  - Assignments that are "Completed" cannot be edited/changed.
  - Students cannot drag assignments to "Completed" section. When a lecturer marks a student's assignment as "Completed", the next time the student logs on, the assignment will be reflected under the "Completed" section.
  - Tapping on the individual assignment will toggle the Assignment Details view.
</details>

<details>
  <summary>Mobile (Portrait mode)</summary>

  - List all assignments according to their status:
    - **"On-going"**: Refers to current assignments.
    - **"Submitted"**: Assignments undergoing marking/final review.
    - **"Completed"**: Past assignments that are marked.
  - Possible to include a sort button to the top-right of each section header (we'll see).
    - Due dates
    - Grades
    - Level
  - For "On-going" and "Submitted" assignments, we can display the Assignment name, module title, and due dates.
  - For "Completed" assignments, we can display the grade awarded as well. 
  - Students can also easily drag-and-drop assignments into the relevant sections to automatically mark them as **"Submitted"**.
  - Assignments that are "Completed" cannot be edited/changed.
  - Students cannot drag assignments to "Completed" section. When a lecturer marks a student's assignment as "Completed", the next time the student logs on, the assignment will be reflected under the "Completed" section.
  - Tapping on the individual assignment will toggle the Assignment Details view.
</details>

#### Assignment Details View (both Portrait & Landscape)

<details>
  <summary>Desktop/Tablet (Landscape mode)</summary>

  - The organization of content here will be the same as in the portrait mode for mobile devices.
  - Here, the lecturers and team comments section will shift to the right panel, while the assignment details, progressbar, and manage tasks button will appear on the left panel.
  - Main content area here will be reserved for the assignment details/description.
  - We can allow a collapsible button to reveal more description if it is longer.
</details>

<details>
  <summary>Mobile (Landscape/Portrait mode)</summary>

  ```
  Assignment Title
  -------------------------------
  Due: [Date]
  Subject: [Subject Name]
  Description: [Description] 

  [ 60% Completed Progress Bar (spanning full width) ] 

  Team Members (if applicable)
  -------------------------------
  [Add Team Member input] 

  [Lecturer Feedback Section]
  [Team Discussion Section]

  [Manage Tasks Button] 
  ```

  - After student adds assignment details, the details will be saved.
  - A single, full width progressbar will stretch across next. It will say, "% Completed".
  - They will then see the option to add othr team members.
  - Below the team members section, we will also have a comments section for collaboration. All comments will include a simple timestamp.
  - There will also be a lecturer feedback section with a simple timestamp (e.g. 14 Mar, Fri 13:10pm).
  - All feedbacks and comments will be listed by newest to oldest.
  - A large manage tasks button will be displayed right below which will bring the student to the tasks list/details page.
  - We can allow a collapsible button to reveal more description if it is longer.
</details>
  

### Task Listing/Details (by Assignments):

#### Tasks Listing view

<details>
  <summary>Desktop/Tablet (Landscape mode)</summary>

  - Have a two-column/panel layout.
  - Left panel will display a full list of assignment tasks and who's assigned to them.
  - The task list will show information like:
    - Task title
    - Due Date
    - % completed
    - Assigned to
  - Tapping on the Task item will open the task details in the right panel.
  - Right panel will also show the DateRangePicker control.
  - We could use a full on Scheduler in Calendar view.
  - Tapping on the Edit Icon button will switch the details into editing mode.
</details>

<details>
  <summary>Mobile (Portrait mode)</summary>

  - Have a table listing of all the tasks.
  - Tasks will be grouped according to the status:
    - "Pending"
    - "WIP"
    - "Completed"
  - Clicking on each task row will show it on the DateRangePicker below.
  - The background for each task item can also act as a progressbar indicator.
  - Changing the dates will automatically update the task as well.
  - Tapping on the Edit button for each task will switch to the task details view.
</details>

#### Tasks Details view

- IMPORTANT NOTE: We don't need a separate view for desktop/tablet devices in landscape mode.

<details>
  <summary>Mobile (Portrait mode)</summary>

  - We will display the details of the task here.
  - The description will include a collapsible option.
  - Below the details section will also show the DateRangePicker control.
  - Tapping on the Edit Icon button will switch the details into editing mode.
</details>

## Daily Logs (Latest to Oldest)

### 29th Apr, Tue: Scope Breakdown & UX Wireframes

#### Goal for Today

- Break down the high-level scope into detailed functionalities and features for each page of the app that we're showcasing.
- Keep the scope to within 3~5 pages. There can be smaller pop-ups like KendoReact Windows/Dialogs within those pages, and it's fine. Within the context of this project, we're referring to actual web pages/navigation.
- Generate a series of hand-drawn wireframes for the different pages and key sections.

#### What was Done
- Generated the Next.js boilerplate project.
- Updated the README file.
- Finished the work breakdown. There could be other pages/features we can include later.

#### What I've (Re)Learned/Discovered
-

#### Potential Challenges/Solutions
-

### 28th Apr, Mon: Opening Project Discussion

- Worked with Gemini to brainstorm and decide on the next showcase project.
- Decided to name it "AceIt".
- This will be a school assignment tracking app.
- Defined the scope (high-level), and core features.

