# AceIt: A Student Assignment Tracker

AceIt is a visually-driven student assignment tracker web application built with React, Next.js, and TypeScript, designed to help students stay organized, manage deadlines effectively, and gain insights into their academic performance. It is also part of a series of portfolio showcase projects that I'm currently managing.

## Why AceIt?

At the time of writing this, I am still a part-time student myself, I knew firsthand the challenges of juggling coursework, deadlines, and a life outside of academics. Going back to my time as a full-time student, I still remember how easy it can be to feel overwhelmed by the sheer volume of assignments, especially when juggling multiple courses or modules.

I've chosen to build AceIt as a way to address a personal need for a more visually driven, intuitive assignment tracker. I wanted a tool that would fulfil a few core functionalities:

- 👀 Provide a clear overview of upcoming deadlines and progress. No more scrambling to remember due dates or feeling lost in a sea of tasks.

- 🍕 Help me break down large assignments into manageable tasks. Conquering a project, one step at a time.

- 📊 Offer insights into my study habits and performance. Understanding my strengths and areas for improvement.

AceIt is crafted with simplicity and effectiveness in mind. It leverages the power of data visualization to empower students to take control of their academic journey and, as the name suggests, **AceIt**!

## Skills Involved

- React, Next.js, and TypeScript
- KendoReact
- Tailwind CSS, CSS3
- MobX (state management)
- PostgreSQL (sample database)

## Core Features

### I. Dashboard:

- Upcoming Deadlines Visual Timeline: Displays assignments due soonest, visually grouped by module/subject (Gantt chart style).
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

### Student Dashboard Page (also Home/Stats):

#### Not Logged On

- Window/Dialog for Student Login
- Window/Dialog for Setting New Password (school assigned account)
- Background show greyed loading panel items.

#### Logged On (Home View)

<details>
  <summary>Desktop/Tablet/Mobile (Landscape mode):</summary>

- Top Panel:
  - Use Accordion to display list of assignments (by default: sort by deadline that is due soonest)
  - Top Accordion will be expanded by default, showing a Gantt chart.
  - Headings will show _"[Assignment name] - 5 Days to Next Check-in >"_
  - Provide a Sort DropDownList so students can also sort by most urgent milestones.
- Middle Panel:
  - Summary listing of all the most urgent tasks across different modules/assignments.
  - We will display [Task title] - [Due Date] - [% completed + circular progress indicator]
  - Tapping on task item will bring user to task details page view.
- Bottom Panel: - Header will have a "+" button for adding quick reminders. - Urgent + Overdue Reminders - Tapping on reminder item will open reminders details Window (with functionality to edit/save)
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
- Bottom Panel: - Header will have a "+" button for adding quick reminders. - Urgent + Overdue Reminders - Tapping on reminder item will open reminders details Window (with functionality to edit/save)
</details>

#### Logged On (Stats View)

<details>
  <summary>Desktop/Tablet/Mobile (Landscape mode):</summary>

- Left-Top Panel:
  - Key Stats Summary section
  - Consists of **THREE** widgets:
    - Average Grade: a student might have an average rating of "B+".
    - Average Submission Rating: a percentage of on-time versus late submissions.
    - Average Appraisal Rating: the average appraisal rating of the student from their peers and lecturers.
  - Tapping on each widget will also open up a summarized history of that particular stat.
  - All summary data/information will be presented in the right panel.
  - Each widget's title will also have an "i" icon which provides a tooltip to explain what that stat represents to the student.
- Left-Bottom Panel:
  - A spider/radar chart will be used here to show the student's overall rating/stats across key soft skills when it comes to project work/management.
  - **FIVE** skills will be presented here:
    - Collaboration
    - Problem-solving
    - Critical Thinking
    - Time Management
    - Presentation Skills
  - When a student clicks on one of those skill/points on the chart, it will display summarized information/data in the right panel.
- Right Panel: - Average Grade: use a historical chart of the user's score over time. - Average Submission Rating: submission donut chart. Like percentage on-time vs late submissions. - Average Appraisal Rating: use a historical chart to show the ratings over time. - Spider Chart Breakdown: - Use a gauge to show student's average performance over time in that category. Use percentage. - Use a line chart to show student's performance in this category over time. - Right below it, we can also display the relevant feedback the student has received (most recent to oldest)
</details>

<details>
  <summary>Mobile (Portrait mode):</summary>

- Top Panel：
  - Consists of the same THREE widgets, but will be displayed in a vertical top-down layout.
  - There will be a collapsible button allowing the student to view the summary info directly below (but still within the top panel).
- Bottom Panel: - Similar to the top panel, the bottom panel can be expanded and collapsed to display additional information.
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
- Left Panel will display both a Task List (Table) view as well as a KanBan version.
  - (Top) Stats and Chart:
    - Total no. of Task Completed, In-Progress, Pending
    - Tasks Distribution (across Modules/Assignments)
  - (Bottom) KanBan/Table
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

### TODOs:

- When I have the time, I should do some digging to see if we can scroll the view to the current date.
- I also want to figure out how to customize the dates in Week View mode to just `"dd/MM"`, and remove the short day of the week (e.g. "Mon", "Tue", etc).

### 29th May, Thu: Tasks Page (Left Panel)

- Began putting together the Stats section.
- Top section will contain Key Stats for each category of Tasks:
  - "Pending"
  - "In-Progress"
  - "Completed"
- Middle section will feature a horizontal bar chart show "Tasks Distribution (across Assignments)".
- **TODO:** Create a mouseover/tooltip effect for the `<CircularProgressBar />` component.

### 24th May, Sat: Assignment Details (Edit Mode)

- Added the `Tags` editing mode.
- Added the `tags` sample data.
- Added the `MultiSelect` UI component for selecting the tags.
- While reviewing the Dashboard/Home layout, noticed the margins/paddings were off. Corrected them.
- Fixed the z-index issue with left/right panels.
- Added the `ButtonGroup` UI component.
- Selected button will have the `primary` theme for now.

### 22nd May, Thu: Assignment Details (Edit Mode)

- Added the `Calendar` UI component for selecting Due Date.
- Modified the `dueDate`'s type to `Date | null`

### 21st May, Wed: Assignment Details (Edit Mode)

- Added the KendoReact Editor for the assignment description.
- Added the KendoReact Window component via `@progress/kendo-react-dialogs`.
- TODO: Still need to add a DatePicker component to the Window and the Save Due Date UI functionality.

### 20th May, Tue: Intermission/Break

- I'm currently on a break so that I can prioritise my part-time studies and any work-related commitments.
- I currently have two months of studies left to complete, so it's the final stretch.
- I'll continue to work on this project quietly and I will share my updates on my [DEV Community Profile](https://dev.to/d2d_weizhi) whenever I have something meaningful to share.
- Started adding the Edit mode functionality.
- Created a state object for assignment details.
- Added the conditional logic for rendering the field and display value.
- When the field loses focus, the `isEditTitle` state value will change.

### 16th May, Fri: Group Discussions & Lecturer Feedbacks

- Right Panel Setup: Successfully implemented the right panel layout that houses both the Group Discussion and Lecturer Feedbacks sections. We decided on a fixed h-[80%] height for the panel after testing different options and considering zoom levels.
- Group Discussion UI:
  - Built out the core structure of the Group Discussion area using Tailwind CSS for styling.
  - Implemented chat bubbles with profile pictures, timestamps, and realistic back-and-forth conversations spanning multiple days.
  - Designed the message input area with a textarea, a send button, and an attachment button. We iterated on the layout of these elements to ensure clarity and avoid potential overlay issues.
  - Added support for displaying image attachments within chat messages, experimenting with aspect ratios and spacing to achieve the desired visual presentation.
- Add the modal overlay for display the attached images to a message bubble.
- Added simple Chevron buttons for navigating between the images.
- Images now can display with the right aspect ratio within the overlay.

### 15th May, Thu: UI Prototyping for Assignments Details view (WIP)

- Began adding the "view mode" content layout to the details view.
- Some of the UI elements are not very responsive at the moment, but they can be enhanced later.
- Added a basic navigation between the ListView items to Details view (really, we're just toggling a state variable).

**(Next Steps)**

- Thinking of adding that swiping user gesture so it can work uniformly across both desktop and mobile browsers.
- Group Discussions & Lecturer's Feedbacks views (right panel).
- Edit mode for the Details View.

### 14th May, Wed: UI Prototyping for Assignments Listing view (Completed)

- Just finished the UI prototyping for the Assignments Listing view.
- Today, I did most of it without using Gemini Pro.
- Gemini Pro did help with the CSS Animations.
- Need to trust my own instincts and insights more.
- Used the `status` field from the sample data to filter.
- Only needed one `assignmentsRender()` function
- Styling inside each item can be refined later.
- Still need to add CSS Animation for the "collapsing/expanding" effect for each panel.

**(Next Steps)**

- Start creating the Details view.
- Add navigation for simulating the user flow.

### 13th May, Tue: SideDrawer Updated + Started on Assignment Page

- Extracted the menu and close button from SideDrawer component and placed them within the top bar. of individual pages.
- Adjusted the z-index values for the relevant DOM elements so the SideDrawer remains on top after sliding out.
- Added subtle animations to the SVG icons so it feels smoother than just switching between the two.
- Copied the top bar over to the Assignments Page (Left Panel).
- Work begins on the Assignments page.

### 12th May, Mon: Completed the Summary Drill-Down (Right Panel)

- Gemini Pro seems to have issues with copying-and-pasting text and code these last two days.
- I stopped work, nearly lost the momentum.
- Decided to continue work without collaboration with Gemini Pro.
- Managed to complete the UI prototyping for the PM profile Feedbacks section.
- Finally have a much better and clearer understanding of the basic `FlexBox` related tailwind classes.

### 7th May, Wed: Stats View > Summary Drill-Down (Right Panel)

- Added the relevant charts and grids for each Key Stats.
- Added the state variables to toggle between the different summary views.
- Decided to modify the Appraisal Rating Summary Chart into a RangeBar series.
- The Appraisal Summary chart can be toggled by a DropDownList control.
- Did part of the summary drilldown for "Project Management Profile".
- Laid the groundwork for adding in the current semester feedback list and it's items.

### 4th May, Sun: Home View UI Prototyping

- Added the `ExpansionPanel`. It is no longer called Accordion.
- By default, I will display top 3 on-going assignments with upcoming deadlines.
- I've also added a sample Gantt Chart view into the content areas.
- Added some sample data into `sample-aceit-data.ts`.
- Finished UI prototyping for Home View section of Dashboard (`page.tsx`)

### 3rd May, Sat: Continue with UI Prototyping

- Remembered that the Dashboard page should also have two column layout.
- Decided to create a simple Tab Bar component called `AceItTabBar` instead of using KendoReact's TabStrip component.
- Added theRadar/Spider chart to the Stats View section.
- Reminder: Important to know when to use Margins versus Paddings.
- Added some placeholder UI files (one-time use components).

### 2nd May, Fri: Started UI Prototyping

- Start by implementing the 2-column layout for both Assignments & Tasks pages.
- Added CSS animations for the transitions when user interacts with the left panels.
- Left Panel will slide to the left. And Right Panel will transition from an opacity value of 0 to 1.
- When closing the Right Panel, the Left Panel will wait until Right Panel is fully hidden from view before sliding back to the middle.
- Used a single grid layout for Dashboard Page.
- The SideDrawer's Close button has been added to the overlay.
- Increased the font size of the menu items.
- Added some more padding.
- Enlarged the width of the menu for more spacing.
- For the Stats Widgets, I have managed to align the contents the way I want it.
- Stats figures will be in `<div></div>` instead of `<span></span>` to make it easier to align them.
- The Stats titles are shifted to the top of the widget.

### 1st May, Thu: Completed the UX Wireframes

- Created the sketched wireframes for our app.
- Realized that there might be a challenge when it comes to page navigation when viewing the app in mobile (portrait) mode. Will need to consider this solution later.

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
