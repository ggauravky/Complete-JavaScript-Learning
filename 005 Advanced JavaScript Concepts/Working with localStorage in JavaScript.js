let box = document.querySelector(".box");
let form = document.querySelector("form");
let input = document.getElementById("text");
let clearBtn = document.getElementById("clear");

// Load saved text from localStorage on page load
window.onload = function () {
  let savedText = localStorage.getItem("userText");
  if (savedText) {
    box.textContent = savedText;
  }
};

// Save text to localStorage on form submit
form.onsubmit = function (e) {
  e.preventDefault();
  let userInput = input.value;
  box.textContent = userInput;
  localStorage.setItem("userText", userInput);
  input.value = "";
};

// Clear localStorage and box content on clear button click
clearBtn.onclick = function () {
  localStorage.removeItem("userText");
  box.textContent = "";
};
