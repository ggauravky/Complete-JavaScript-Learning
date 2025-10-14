const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.stopPropagation(); // Stop event bubbling
    alert("Box clicked: " + box.textContent);
  });
});

document.body.addEventListener("click", () => {
  alert("Body clicked");
});

document.addEventListener("click", () => {
  alert("Document clicked");
});

window.addEventListener("click", () => {
  alert("Window clicked");
});

// Example of preventing default action
document.body.insertAdjacentHTML(
  "beforeend",
  '<a href="https://www.example.com" id="myLink">Go to Example.com</a>'
);
const myLink = document.getElementById("myLink");
myLink.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent the default action of the link
  alert("Link click prevented!");
});
