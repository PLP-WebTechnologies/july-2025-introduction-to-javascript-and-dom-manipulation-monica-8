// Part 1: Variable declarations and conditionals
let age = 20;
let name = "Sam";

function checkIfAdult() {
  // Using conditional if-else to check age
  if (age >= 18) {
    return name + " is an adult.";
  } else {
    return name + " is a minor.";
  }
}

// Part 2: Custom functions
// Function to calculate square of a number
function squareNumber(num) {
  return num * num;
}

// Function to greet user with a message
function greetUser(username) {
  return "Hello, " + username + "! Welcome to the site.";
}

// Part 3: Loop examples

// For loop example - prints numbers 1 through 5
function runForLoop() {
  let result = "For Loop:\n";
  for (let i = 1; i <= 5; i++) {
    result += i + "\n";
  }
  return result;
}

// While loop example - countdown from 5 to 1
function runWhileLoop() {
  let count = 5;
  let result = "While Loop:\n";
  while (count > 0) {
    result += count + "\n";
    count--;
  }
  return result;
}

// Part 4: DOM interactions

const outputDiv = document.getElementById("output");
const greetingPara = document.getElementById("greeting");

document.getElementById("checkAgeBtn").addEventListener("click", () => {
  const message = checkIfAdult();
  outputDiv.textContent = message;
});

document.getElementById("squareBtn").addEventListener("click", () => {
  const number = 7;
  const squared = squareNumber(number);
  outputDiv.textContent = `The square of ${number} is ${squared}.`;
});

document.getElementById("loopForBtn").addEventListener("click", () => {
  outputDiv.textContent = runForLoop();
});

document.getElementById("loopWhileBtn").addEventListener("click", () => {
  outputDiv.textContent = runWhileLoop();
});

// DOM interaction: Change greeting text on load
window.addEventListener("load", () => {
  greetingPara.textContent = greetUser(name);
});
