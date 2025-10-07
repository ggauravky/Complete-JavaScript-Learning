// Select the element
const myElement = document.getElementById("myElement");

// Get an attribute
const title = myElement.getAttribute("title");
console.log("Title attribute:", title);

// Set an attribute
myElement.setAttribute("data-info", "Some additional info");
console.log("Data-info attribute set to:", myElement.getAttribute("data-info"));

// Remove an attribute
myElement.removeAttribute("title");
console.log("Title attribute after removal:", myElement.getAttribute("title"));

// Working with classes
// Add a class
myElement.classList.add("new-class");
console.log("Classes after adding new-class:", myElement.className);

// Remove a class
myElement.classList.remove("my-class");
console.log("Classes after removing my-class:", myElement.className);

// Toggle a class
myElement.classList.toggle("toggle-class");
console.log("Classes after toggling toggle-class:", myElement.className);

// Check if a class exists
const hasNewClass = myElement.classList.contains("new-class");
console.log("Does it have new-class?", hasNewClass);

// Replace a class
myElement.classList.replace("new-class", "replaced-class");

console.log(
  "Classes after replacing new-class with replaced-class:",
  myElement.className
);

// Final state of the element
console.log("Final state of the element:", myElement.outerHTML);
