let name = "John";
let age = 30;

let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log("Template Literal:", greeting);

function showText() {
  document.querySelector(".template-literal").innerText = greeting;
}
setTimeout(showText, 2000);
