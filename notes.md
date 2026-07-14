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