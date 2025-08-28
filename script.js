// ===== PART 1: JavaScript Basics =====

// Variables
let userCount = 0;
const maxUsers = 10;

function checkAge() {
  // Get user input
  const age = document.getElementById("ageInput").value;
  let message;

  // Conditional logic
  if (age === "") {
    message = "Please enter your age.";
  } else if (age < 0) {
    message = "Age cannot be negative.";
  } else if (age < 18) {
    message = `You are ${age} years old. You are a minor. You cant drive`;
  } else if (age >= 18 && age < 65) {
    message = `You are ${age} years old. You can drive.`;
  } else {
    message = `You are ${age} years old. You are too old, get a chauffer`;
  }

  // Output result
  document.getElementById("ageOutput").textContent = message;
}

// Number Comparison function
function compareNumbers() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    result = "Please enter valid numbers.";
  } else if (num1 > num2) {
    result = `${num1} is greater than ${num2}`;
  } else if (num1 < num2) {
    result = `${num1} is less than ${num2}`;
  } else {
    result = `${num1} is equal to ${num2}`;
  }

  document.getElementById("comparisonOutput").textContent = result;
}

// ===== PART 2: JavaScript Functions =====

// Calculator function
function calculate(operation) {
  const num1 = parseFloat(document.getElementById("calcNum1").value);
  const num2 = parseFloat(document.getElementById("calcNum2").value);
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    result = "Please enter valid numbers.";
  } else {
    switch (operation) {
      case "add":
        result = `${num1} + ${num2} = ${num1 + num2}`;
        break;
      case "subtract":
        result = `${num1} - ${num2} = ${num1 - num2}`;
        break;
      case "multiply":
        result = `${num1} × ${num2} = ${num1 * num2}`;
        break;
      case "divide":
        result =
          num2 !== 0
            ? `${num1} ÷ ${num2} = ${num1 / num2}`
            : "Cannot divide by zero";
        break;
      default:
        result = "Invalid operation";
    }
  }

  document.getElementById("calcOutput").textContent = result;
}

// Text formatting function
function formatText(formatType) {
  const text = document.getElementById("formatInput").value;
  let formattedText;

  if (text === "") {
    formattedText = "Please enter some text.";
  } else {
    switch (formatType) {
      case "upper":
        formattedText = text.toUpperCase();
        break;
      case "lower":
        formattedText = text.toLowerCase();
        break;
      default:
        formattedText = text;
    }
  }

  document.getElementById("formatOutput").textContent = formattedText;
}

// ===== PART 3: JavaScript Loops =====

// Count numbers using a for loop
function countNumbers() {
  const countTo = parseInt(document.getElementById("countInput").value);
  let output = "";

  if (isNaN(countTo) || countTo < 1) {
    output = "Please enter a positive number.";
  } else {
    for (let i = 1; i <= countTo; i++) {
      output += i + " ";

      if (i % 10 === 0) {
        output += "<br>";
      }
    }
  }

  document.getElementById("countOutput").innerHTML = output;
}

// ===== PART 4: DOM Manipulation =====

// Toggle content visibility
function toggleContent() {
  const content = document.getElementById("toggledContent");

  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}

// Change styles of the demo box
function changeStyles() {
  const demoBoxes = document.querySelectorAll("#part4 .demo-box");
  const lastBox = demoBoxes[demoBoxes.length - 1];

  // Modify multiple styles
  lastBox.style.backgroundColor = "#ffeaa7";
  lastBox.style.borderLeft = "4px solid #e17055";
  lastBox.style.color = "#d63031";
  lastBox.style.fontWeight = "bold";
}

// Reset styles
function resetStyles() {
  const demoBoxes = document.querySelectorAll("#part4 .demo-box");
  const lastBox = demoBoxes[demoBoxes.length - 1];

  // Reset to original styles
  lastBox.style.backgroundColor = "";
  lastBox.style.borderLeft = "";
  lastBox.style.color = "";
  lastBox.style.fontWeight = "";
}
