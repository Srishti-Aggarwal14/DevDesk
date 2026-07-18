# Day 01 - Variables & Output

## What is a Variable?

A variable is a named container used to store data.

Examples:
- Name
- Age
- College
- Score

---

## Ways to Declare Variables

### let

Used when the value may change.

```javascript
let score = 10;
score = 20;
```

### const

Used when the value should not be reassigned.

```javascript
const college = "Chitkara";
```

### var

Older way of declaring variables.

Avoid using `var` in modern JavaScript projects unless required.

---

## Output Methods

### console.log()

Prints data to the browser console.

```javascript
console.log("Hello");
```

### alert()

Displays a popup message.

```javascript
alert("Welcome");
```

### document.write()

Writes directly to the webpage.

Rarely used in modern development.

---

## Best Practices

- Prefer `const` by default.
- Use `let` only when the value needs to change.
- Avoid `var`.
- Use meaningful variable names like `userName`, `projectName`, and `studentScore`.

---

## Quick Revision

- Variables store data.
- `let` → Reassignable.
- `const` → Cannot be reassigned.
- `var` → Legacy keyword.
- `console.log()` is used for debugging.
- `alert()` displays a popup.

# Day 02 - DOM Basics (Part 1)

## What is the DOM?

DOM stands for Document Object Model.

It represents the HTML page as objects that JavaScript can access and modify.

---

## document

`document` refers to the entire webpage.

Example:

```javascript
document.getElementById("heading");
```

---

## id

The `id` attribute uniquely identifies an HTML element.

Example:

```html
<h1 id="heading">Welcome</h1>
```

---

## getElementById()

Used to find an HTML element by its id.

```javascript
let heading = document.getElementById("heading");
```

---

## textContent

Used to change or read the text inside an element.

```javascript
heading.textContent = "Welcome Back!";
```

---

## Template Literals

Use backticks (`` ` ``) with `${}` to insert variables into strings.

```javascript
let name = "Srishti";

console.log(`Hello, ${name}`);
```

---

## Quick Revision

- DOM = HTML represented as objects.
- `document` represents the webpage.
- `getElementById()` finds an element.
- `textContent` changes displayed text.
- Template literals make string formatting easier.

# Day 03 - User Input with prompt()

## prompt()

`prompt()` is used to take input from the user.

Example:

```javascript
let userName = prompt("Enter your name");
```

The value entered by the user is stored in the variable.

---

## if Statement

Used to make decisions.

Syntax:

```javascript
if (condition) {
    // code to execute
}
```

---

## Handling Empty Input

If the user clicks Cancel or leaves the input empty, provide a default value.

Example:

```javascript
if (userName === null || userName === "") {
    userName = "Developer";
}
```

---

## Best Practice

Always validate user input before using it.

---

## Quick Revision

- `prompt()` takes input from the user.
- `if` checks a condition.
- `===` checks strict equality.
- `||` means OR.
- Always handle invalid input gracefully.

Easy
What is a variable in JavaScript?
What is the difference between let, const, and var?
Why is const preferred over let?
What is console.log() used for?
Why is document.write() generally avoided?
⭐ Must Know

The difference between let, const, and var is one of the most commonly asked JavaScript interview questions for freshers.
🎤 Interview Questions
What is the DOM?
What is the purpose of the document object?
Why do we use id?
What does getElementById() return?
What is textContent?
What are template literals, and why are they preferred over string concatenation?

Interview Questions
What is prompt()?
What does prompt() return if the user clicks Cancel?
Why should user input be validated?
What is an if statement?
What is the difference between == and ===? (We'll study this in detail later.)

# Day 04 - Events

## What is an Event?

An event is an action performed by the user.

Examples:

- Click
- Hover
- Typing
- Scroll
- Key Press

---

## addEventListener()

Used to listen for events on an element.

Syntax:

```javascript
element.addEventListener("click", function(){

});
```

---

## click Event

Runs code whenever the user clicks the element.

Example:

```javascript
button.addEventListener("click", function(){

    console.log("Button clicked");

});
```

---

## Why use addEventListener()?

- Keeps HTML and JavaScript separate.
- Can attach multiple events.
- Preferred over inline `onclick`.

---

## Quick Revision

- Events make webpages interactive.
- `click` is one of the most common events.
- `addEventListener()` listens for user actions.

🎤 Interview Questions
What is an event in JavaScript?
What is addEventListener()?
Why is addEventListener() preferred over onclick?
Name five common browser events.

# Day 05 - Functions

## What is a Function?

A function is a reusable block of code that performs a specific task.

---

## Syntax

```javascript
function functionName() {

}
```

---

## Calling a Function

```javascript
function greet() {
    console.log("Hello");
}

greet();
```

---

## Why Use Functions?

- Avoid repeating code.
- Improve readability.
- Make code easier to maintain.
- Reuse logic from multiple places.

---

## Best Practices

- Use descriptive function names.
- Keep one function responsible for one task.
- Call the function only when needed.

---

## Quick Revision

- Functions group related code.
- Creating a function does not execute it.
- A function runs only when it is called.

# Day 06 - Input Values

## .value

The `.value` property is used to read or set the value of form elements such as `<input>`.

Example:

```javascript
let name = input.value;
```

---

## Reading User Input

```javascript
let focus = focusInput.value;
```

This stores the text entered by the user.

---

## Event Listener

```javascript
button.addEventListener("click", updateFocus);
```

Runs the `updateFocus` function whenever the button is clicked.

---

## Why Validate Input?

Users may leave the input empty.

Always check input before using it.

---

## Quick Revision

- `textContent` → changes displayed text.
- `value` → reads input field value.
- `click` → listens for button clicks.
- Functions help organize related logic.

# Day 07 - Application State

## What is State?

State is the current data of an application.

Example:

```javascript
let todaysFocus = "Learn JavaScript";
```

---

## Why Use State?

Instead of storing data only on the webpage, keep it in JavaScript variables.

The UI should display the current state.

---

## trim()

Removes extra spaces from the beginning and end of a string.

Example:

```javascript
let text = "   Hello   ";

text.trim();
```

Output:

```
Hello
```

---

## return

Stops the execution of a function immediately.

Useful after validation fails.

---

## Quick Revision

- State stores current application data.
- UI displays the state.
- trim() removes unwanted spaces.
- return exits a function.

🎤 Interview Questions
What is application state?
Why should UI depend on state instead of hardcoded text?
What does trim() do?
Why do we use return inside validation?

# Day 08 - Structuring the Dashboard

## Why Use Containers?

A container groups related elements together.

Benefits:

- Better layout
- Easier styling
- Cleaner HTML
- More maintainable code

---

## Card Layout

Instead of placing all elements directly on the page, group related content into cards.

Example:

- Welcome Card
- Focus Card
- Notes Card

---

## Why are we restructuring?

As projects grow, clean HTML becomes more important than writing lots of code.

Professional projects organize UI into logical sections.

# Day 09 - Flexbox Basics

## What is Flexbox?

Flexbox is a CSS layout system used to align and distribute space among elements.

---

## display: flex

Turns an element into a flex container.

Example:

```css
display: flex;
```

---

## justify-content

Controls horizontal alignment.

Common values:

- center
- space-between
- flex-start
- flex-end

---

## align-items

Controls vertical alignment.

Example:

```css
align-items: center;
```

---

## flex-direction

Determines the direction of items.

```css
flex-direction: column;
```

Stacks items vertically.

---

## gap

Creates equal spacing between flex items.

---

## box-shadow

Adds depth to cards and components.

---

## Quick Revision

- Flexbox simplifies layouts.
- `display: flex` enables Flexbox.
- `justify-content` aligns horizontally.
- `align-items` aligns vertically.
- `gap` replaces repeated margins.
🎤 Interview Questions
What is Flexbox?
Difference between justify-content and align-items?
Why do we use box-sizing: border-box?
What does gap do?
What is the advantage of using display: flex over older layout methods?

💼 Interview Insight

If an interviewer asks:

"Why did you use focus()?"

A good answer is:

"After the user updates their focus, I automatically return the cursor to the input field so they can quickly enter another task without needing an extra click. It improves the user experience."

That's a much stronger answer than simply saying:

"Because I wanted the cursor there."
# Day 10 - Arrays

## What is an Array?

An array stores multiple values in a single variable.

Example:

```javascript
let fruits = ["Apple", "Mango", "Orange"];
```

---

## Empty Array

```javascript
let notes = [];
```

---

## push()

Adds an item at the end.

```javascript
notes.push("Complete DSA");
```

---

## Why Arrays?

Instead of creating

note1

note2

note3

use

notes[]

to store unlimited values.

---

## Quick Revision

- Arrays store collections.
- [] creates an array.
- push() adds data.

# Day 11 - Arrays + For Loop + Dynamic DOM

## createElement()

Creates a new HTML element.

Example:

```javascript
let li = document.createElement("li");
```

---

## appendChild()

Adds an element to the webpage.

Example:

```javascript
notesList.appendChild(li);
```

---

## innerHTML = ""

Removes all existing HTML inside an element.

Useful before re-rendering lists.

---

## for Loop

Used to iterate over arrays.

Example:

```javascript
for(let i=0; i<notes.length; i++){

}
```

---

## Why Loop?

Instead of manually creating every note,

the loop creates one `<li>` for each item in the array.

---

## Quick Revision

- Arrays store data.
- for loop visits every item.
- createElement creates HTML.
- appendChild displays HTML.

🎤 Interview Questions
Why do we use createElement() instead of writing HTML strings?
What does appendChild() do?
Why do we clear innerHTML before displaying notes?
How does a for loop work with arrays?
Why is the data stored in an array instead of directly writing into the HTML?

# Day 12 - splice()

## splice()

Used to remove or insert items inside an array.

Example

```javascript
notes.splice(2,1);
```

Deletes one element from index 2.

---

## dataset

Stores custom data inside HTML elements.

Example

```javascript
button.dataset.index=5;
```

Later

```javascript
button.dataset.index
```

returns

```
5
```

---

## CRUD

Create

Read

Update

Delete

Most web applications are CRUD applications.

💼 Interview Questions
Difference between slice() and splice()?
Why did we use dataset?
Why call displayNotes() after deleting?
What happens if you don't re-render the UI after modifying the array?
Explain CRUD with your DevDesk project.

# Day 13 - Update Operation (CRUD)

## Updating an Array

Arrays can be updated using their index.

Example:

```javascript
notes[0] = "Learn React";
```

---

## prompt()

Used to take input from the user.

Example:

```javascript
let name = prompt("Enter your name");
```

---

## CRUD

Create → Add

Read → Display

Update → Edit

Delete → Remove

---

## Revision

- Arrays can be updated by index.
- prompt() can accept a default value.
- Always validate user input before updating.

🧠 Today's Interview Questions
What is CRUD?
How do you update an element inside an array?
Why do we use dataset.index?
Difference between push() and notes[index] = value?
Why do we call displayNotes() after editing?

# Day 14 - Local Storage

## Problem

Data was disappearing after refresh because arrays exist only in memory.

---

## localStorage

Stores data inside the browser.

---

## setItem()

Used to save data.

Example

```javascript
localStorage.setItem("notes","Hello");
```

---

## getItem()

Reads data.

```javascript
localStorage.getItem("notes");
```

---

## JSON.stringify()

Converts

Array

↓

String

Needed because localStorage stores only strings.

---

## JSON.parse()

Converts

String

↓

Array
# Day 15 - Storage Module

## Local Storage

Local Storage is used to save data inside the browser.

Data remains available even after refreshing or closing the browser.

---

## Functions Created

saveNotes()

Stores notes.

loadNotes()

Reads notes.

saveFocus()

Stores today's focus.

loadFocus()

Reads today's focus.

saveUser()

Stores username.

loadUser()

Reads username.

---

## Keys Used

devdeskNotes

devdeskFocus

devdeskUser

# Day 15 - Focus Module

## Purpose

This file manages the "Today's Focus" feature.

---

## Functions

### updateTagline()

Updates the text displayed on the screen.

---

### updateFocus()

- Reads user input
- Validates input
- Updates today's focus
- Saves data to Local Storage
- Refreshes the UI
- Clears the input field
- Places the cursor back into the input

---

## New Concept

saveFocus()

Stores the latest focus inside Local Storage.

This allows the focus to remain even after refreshing the browser.

# Day 15 - Notes Module

## Purpose

This file manages the Quick Notes feature.

---

## CRUD Operations

Create

- Add a new note

Read

- Display all notes

Update

- Edit an existing note

Delete

- Remove a note

---

## Validation

- Empty notes are not allowed.
- Duplicate notes are not allowed.
- Maximum of 5 notes can be added.

---

## DOM Concepts Used

- createElement()
- appendChild()
- dataset
- addEventListener()

---

## Local Storage

Every Create, Update, and Delete operation immediately saves data using saveNotes().

# Day 17 - Navigation Bar

## Objective

Create a navigation bar that displays:

- Application Name
- Current Date
- Current Time

## New HTML Tags

- nav
- div
- p

## New IDs

currentDate

currentTime

These IDs will later be updated dynamically using JavaScript.

# Day 17 - Live Date & Time

## Objective

Display the current date and time in the navigation bar.

## Concepts Learned

### new Date()

Creates a Date object containing the current date and time.

### toLocaleDateString()

Formats the date according to the selected locale.

### toLocaleTimeString()

Formats the current time.

### setInterval()

Executes a function repeatedly after a specified interval.

Example:

setInterval(updateDateTime, 1000);

This updates the clock every second.

## Interview Question

Why do we use setInterval()?

Answer:

It is used when we want to execute a function repeatedly after a fixed interval, such as updating a live clock.

# Day 17 - Dynamic Greeting

## Objective

Display different greetings based on the current time.

## Method Used

new Date().getHours()

Returns the current hour (0-23).

## Conditions

5-11

Good Morning

12-16

Good Afternoon

17-20

Good Evening

21-4

Good Night

## Concepts Learned

- if else
- Logical AND (&&)
- Date Object
- DOM Manipulation
- Dynamic UI

🏆 Interview Question (Very Important)

If an interviewer asks:

"Why did you use getHours() instead of checking the full time string?"

A good answer is:

"getHours() returns a numeric value from 0 to 23, making it easy to compare ranges using conditional statements. It's more reliable and efficient than parsing a formatted time string."

# Day 18 - Dark Mode

## Objective

Implement Dark Mode with theme persistence.

## Features

- Toggle between Light and Dark Mode
- Save user preference using Local Storage
- Automatically restore the saved theme on page load

## Concepts Learned

- classList
- classList.toggle()
- Local Storage
- Event Listeners
- UI Personalization

## Why Dark Mode?

Dark Mode improves user experience, especially in low-light environments, and is a common feature in modern web applications.
## CSS Concepts Learned

### .dark-mode

A CSS class applied to the `<body>` element to switch the application's appearance.

### Descendant Selectors

Example:

.dark-mode .container

Styles the container only when Dark Mode is active.

### Transition

Used to create a smooth effect while switching between themes.
## JavaScript Concepts Learned

### classList.toggle()

Adds the class if it doesn't exist and removes it if it does.

Example:

document.body.classList.toggle("dark-mode");

---

### Local Storage

Theme preference is saved using:

localStorage.setItem()

and restored using:

localStorage.getItem()

---

### Theme Persistence

The application remembers the user's preferred theme even after refreshing or reopening the browser.
# Day 19 - Pomodoro Timer

## Objective

Build a Pomodoro timer to improve productivity.

## What is the Pomodoro Technique?

A time management technique where you:

- Work for 25 minutes
- Take a 5-minute break
- Repeat

## Features Planned

- Start Timer
- Pause Timer
- Reset Timer
- Countdown
- Session Counter
- Local Storage
- Productivity Statistics

## New Concepts

- setInterval()
- clearInterval()
- Timer State
- Countdown Logic

## Functions Added

### updateTimerDisplay()

Converts total seconds into MM:SS format.

### startPomodoro()

Starts the countdown using setInterval().

### pausePomodoro()

Stops the timer using clearInterval().

### resetPomodoro()

Resets the timer back to 25 minutes.

---

## Concepts Learned

- setInterval()
- clearInterval()
- padStart()
- Countdown Logic
- Timer State

🎤 Interview Questions
Q1. Why did you use setInterval()?

Answer:
It repeatedly executes a function after a fixed interval. I used it to decrease the timer every second and update the UI.

Q2. Why did you use clearInterval()?

Answer:
To stop the running timer when the user pauses, resets, or when the countdown finishes.

Q3. Why did you use isRunning?

Answer:
It prevents multiple intervals from being created if the Start button is clicked repeatedly, ensuring only one timer runs at a time.

---

## Challenges Completed

### Challenge 1

Disabled the Start button while the timer is running to prevent multiple intervals.

### Challenge 2

Disabled the Pause button until the timer starts.

### Challenge 3

Displayed "Completed" for 2 seconds before resetting.

### Bonus Challenge

Changed the timer color dynamically based on remaining time.

- Blue → More than 10 minutes
- Orange → 5 to 10 minutes
- Red → Less than 5 minutes

🎤 Interview Questions
Q1. Why did you disable the Start button?

Answer:

To improve user experience and prevent users from accidentally starting multiple timer instances.

Q2. Why use setTimeout() after completion?

Answer:

setTimeout() delays execution once. I used it to display the completion message for 2 seconds before resetting the timer.

Q3. Why change the timer color?

Answer:

It provides visual feedback about urgency, making the timer easier to interpret without reading the exact time.

# Milestone 3 - Pomodoro Timer

## Features Added

- Added 25-minute Pomodoro timer
- Start, Pause and Reset controls
- Prevented multiple timers from running simultaneously
- Disabled buttons based on timer state
- Dynamic timer colors
  - Blue (>10 min)
  - Orange (5–10 min)
  - Red (<5 min)
- Completion message after timer ends
- Timer resets automatically after completion
- Integrated with Dark Mode

# Milestone 4 - Productivity Dashboard

## Features Added

### 📊 Productivity Dashboard
- Created a dashboard to display productivity statistics.
- Added three live counters:
  - 📝 Notes Count
  - 🎯 Focus Updates Count
  - 🍅 Pomodoro Sessions Count

### 💾 Local Storage
- Dashboard statistics are stored in Local Storage.
- Statistics remain available even after refreshing the page.

### 📈 Daily Progress Bar
- Added a dynamic progress bar.
- Progress is calculated based on:
  - Notes Added
  - Focus Updates
  - Completed Pomodoro Sessions
- Maximum daily progress is capped at 100%.
- Progress bar updates automatically whenever statistics change.

### 🎨 UI Improvements
- Responsive dashboard layout.
- Hover animation for statistic cards.
- Dark Mode support for dashboard and progress bar.

## Concepts Learned

- DOM Manipulation
- JavaScript Objects
- Local Storage
- Updating UI Dynamically
- Progress Bar using CSS
- JavaScript Functions
- Event Handling
- Responsive Design

# Milestone 5

## Features Added

- Task Manager
- Task Priority
- Due Date
- Task Filters
- Live Search
- Task Sorting
- Task Analytics Dashboard
- Completion Progress Bar

## JavaScript Concepts Learned

- Arrays of Objects
- CRUD Operations
- Dynamic DOM Manipulation
- Event Listeners
- Local Storage
- Array Sorting
- Array Filtering
- Searching
- Progress Calculations

# Milestone 6 – Daily Planner

## Features Added

- Daily planner
- Time-based planning
- Sort by time
- Mark completed
- Delete plans
- LocalStorage support
- Responsive planner UI

## Concepts Learned

- Sorting arrays
- LocalStorage
- DOM Manipulation
- Event Listeners
- Object Arrays

# Milestone 7 – Productivity Insights

## Features Added

- Dynamic productivity insights.
- Personalized motivational messages.
- Messages update automatically based on daily activity.
- Connected with dashboard statistics.

# Milestone 8 – Productivity Dashboard

## Features Added

- Built a complete Productivity Dashboard.
- Added live dashboard statistics.
- Displayed Notes count.
- Displayed Focus updates count.
- Displayed Pomodoro sessions completed.
- Displayed Planner entries count.
- Added Goal Completion Percentage.
- Added Overall Productivity Percentage.
- Added Productivity Status indicator.
- Added Dynamic Motivation Line.
- Dashboard updates automatically whenever user activity changes.

## Files Updated

- insights.js
- app.js
- notes.js
- focus.js
- planner.js
- tasks.js
- index.html
- style.css

## Outcome

Users can now monitor their daily productivity from a single dashboard.

# Milestone 9 – XP & Gamification System

## Features Added

- Introduced XP (Experience Points) System.
- Added Level Progression.
- Different activities reward different XP.
- Focus Update gives XP.
- Notes give XP.
- Pomodoro Completion gives XP.
- Automatic Level Up after reaching 100 XP.
- XP resets after every Level Up.
- Dashboard now displays:
  - Current XP
  - Current Level
  - Level Title

## XP Rewards

- Focus Update → +15 XP
- Add Note → +10 XP
- Complete Pomodoro → +30 XP

## Files Updated

- storage.js
- insights.js
- app.js
- focus.js
- notes.js

## Outcome

DevDesk now motivates users using a gamified productivity system.

# Milestone 10 – Dashboard Enhancements

## Features Added

### Weekly Productivity Chart

- Added Weekly Productivity Analytics.
- Implemented Chart.js.
- Dashboard displays weekly activity graph.
- Graph updates automatically.

### Export Dashboard as PDF

- Added Export Dashboard feature.
- Dashboard can now be downloaded as PDF.
- Used html2pdf.js library.

### Toast Notifications

Replaced traditional alert boxes with modern toast notifications.

Implemented notifications for:

- Note Added
- Focus Updated
- Task Added
- Task Completed
- Task Deleted
- Plan Added
- Plan Completed
- Plan Deleted
- Pomodoro Completed
- Validation Messages

## Files Updated

- chart.js
- pdf.js
- app.js
- notes.js
- planner.js
- tasks.js
- focus.js
- index.html
- style.css

## Outcome

Improved overall user experience with modern dashboard interactions and visual feedback.

# 📅 Day 11 – Premium UI & Dashboard Enhancement

## 🎯 Milestone Goal

Transform DevDesk into a modern, premium productivity dashboard with smooth animations and polished UI inspired by Notion, GitHub, and Linear.

---

## ✨ Features Added

### 🎨 Premium Dashboard UI

- Added floating card animations.
- Added staggered animation delays for each dashboard card.
- Added glassmorphism effect to all cards.
- Added premium hover lift effect with glowing shadows.
- Added shine animation on hover.

---

### 📊 Dashboard Enhancements

- Animated dashboard counters.
- Animated Goal Completion percentage.
- Animated Overall Productivity percentage.
- Animated XP counter.
- Dynamic progress bar updates.

---

### 🌈 Background Improvements

- Added animated gradient background.
- Added floating blurred blobs.
- Improved overall visual depth.
- Enhanced dashboard aesthetics.

---

### 🌙 Dark Mode Improvements

- Glassmorphism support.
- Better shadows.
- Improved contrast.
- Enhanced premium appearance.

---

## 🛠 Files Updated

- `index.html`
- `assets/css/style.css`
- `assets/js/insights.js`

---

## 💡 UI Improvements

- Smooth floating cards
- Glassmorphism
- Animated counters
- Animated gradient
- Floating blobs
- Better hover effects
- Improved dark mode
- Premium dashboard feel

---

## 🧠 Concepts Used

- CSS Animations
- CSS Keyframes
- CSS Transitions
- Glassmorphism
- Backdrop Filter
- JavaScript DOM Manipulation
- Dynamic UI Updates
- Dashboard Design Principles

---

## 🚀 Outcome

DevDesk now provides a much more polished user experience with modern dashboard animations, premium visuals, and improved interaction feedback suitable for a portfolio project.

---

## ✅ Milestone Status

**Completed ✅**

# Day 12 – Login System & UI Enhancements

## Features Added

### 🔐 Login System

- Added welcome login screen.
- User enters name before accessing dashboard.
- Guest mode support.
- Remember Me functionality using Local Storage.
- Automatic dashboard loading for remembered users.

---

### 🚪 Logout

- Added Logout button.
- Clears saved user.
- Returns to Login Screen.

---

### 🎨 UI Improvements

- Modern login card.
- Premium blue gradient background.
- Smooth popup animation.
- Better spacing and typography.

---

### 📊 Productivity Dashboard

- Animated counters.
- Smooth progress bar animations.
- XP and Level system improvements.
- Better dashboard updates.

---

### 🛠 Improvements

- Cleaner initialization.
- Improved Local Storage handling.
- Better user flow.

---

## Concepts Learned

- Authentication flow (Frontend)
- Local Storage
- Conditional rendering
- DOM manipulation
- CSS animations
- Session management
# Day 12 - Notifications & Productivity Improvements

## Features Implemented

### 1. Login System
- Added Login Screen
- Continue as Guest option
- Remember Me functionality
- User data stored using localStorage

---

### 2. Browser Notifications
Implemented Browser Notification API.

Notifications added for:
- Welcome Back
- Guest Login
- Pomodoro Completion
- Planner Reminder

---

### 3. Planner Reminder System
Created reminder.js.

Features:
- Checks planner every 30 seconds.
- Shows browser notification when task time matches current time.
- Displays in-app toast notification.
- Prevents duplicate reminders using `notified` flag.

---

### 4. Daily Reminder Reset
Implemented automatic planner reminder reset.

Features:
- Resets reminder status once per day.
- Allows recurring planner reminders every day.
- Similar behaviour to Google Calendar and Microsoft To Do.

---

### 5. Dashboard Improvements
- Live Dashboard Updates
- XP Updates
- Productivity Updates
- Badge Refresh
- Weekly Chart Refresh

---

### 6. Better UX
- Replaced alert() with toast notifications.
- Premium notification experience.
- Improved login flow.

---

## Files Added

assets/js/reminder.js

---

## Files Modified

index.html

assets/js/app.js

assets/js/planner.js

assets/js/storage.js

assets/js/notifications.js

assets/js/insights.js

---

## Concepts Learned

- Browser Notification API
- Notification Permission Handling
- setInterval()
- Date & Time Comparison
- LocalStorage
- Daily State Reset
- Real-time Dashboard Updates
- Modular JavaScript Architecture

---

## Git Commit

Day 12: Login, Notifications, Planner Reminders & Dashboard Enhancements

# Day 13 - Responsive UI & Premium Experience

## Objective

Transform DevDesk into a fully responsive and premium-looking productivity dashboard suitable for desktop, tablet, and mobile devices.

---

## Features Implemented

### 📱 Responsive Layout

- Responsive dashboard for desktop, tablet and mobile.
- Automatic column stacking on smaller screens.
- Improved spacing and alignment.
- Responsive input fields.
- Responsive buttons.

---

### ☰ Mobile Navigation

Implemented Hamburger Menu for mobile devices.

Features:

- Mobile navigation toggle.
- Hidden navigation on small screens.
- Expandable navigation menu.
- Improved mobile usability.

---

### ✨ Premium UI

Improved overall appearance using:

- Glassmorphism cards
- Better shadows
- Floating hover effects
- Smooth transitions
- Better typography
- Premium spacing

---

### 🎨 Animations

Added:

- Card hover animation
- Button hover animation
- Smooth dashboard fade animation
- Greeting animation
- Progress bar animation
- Smooth dark/light theme transition

---

### 📊 Dashboard Polish

Improved:

- Productivity progress animation
- Dashboard responsiveness
- Better visual hierarchy
- Cleaner UI

---

### 🎉 UX Improvements

- Animated buttons
- Better mobile experience
- Premium hover interactions
- Custom scrollbar
- Modern dashboard feel

---

## Files Modified

index.html

assets/css/style.css

assets/js/app.js

assets/js/insights.js

assets/js/storage.js

---

## Concepts Learned

- CSS Media Queries
- Responsive Design
- Flexbox
- CSS Grid
- Glassmorphism
- CSS Animations
- CSS Transitions
- Mobile First UI
- Hamburger Navigation
- Modern Dashboard Design
- Responsive Components

---

## Git Commit

Day 13: Responsive Layout, Premium UI & Mobile Navigation