const box = document.querySelector(".box");

// Mouse Events
box.addEventListener("click", () => {
  console.log("Box clicked");
});

box.addEventListener("dblclick", () => {
  console.log("Box double clicked");
});

box.addEventListener("mouseenter", () => {
  console.log("Mouse entered the box");
});

box.addEventListener("mouseleave", () => {
  console.log("Mouse left the box");
});

// Keyboard Events
document.addEventListener("keydown", (event) => {
  console.log(`Key down: ${event.key}`);
});

document.addEventListener("keyup", (event) => {
  console.log(`Key up: ${event.key}`);
});

// Form Events
const form = document.createElement("form");
const input = document.createElement("input");
input.type = "text";
input.name = "name";
form.appendChild(input);
document.body.appendChild(form);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Form submitted");
});

input.addEventListener("focus", () => {
  console.log("Input focused");
});

input.addEventListener("blur", () => {
  console.log("Input blurred");
});
