let str = "Hello World";

console.log("String:", str);
console.log("Length of string:", str.length);
console.log("First character:", str.charAt(0));
console.log("Last character:", str.charAt(str.length - 1));
console.log("Substring (0, 5):", str.substring(0, 5));
console.log('Index of "World":', str.indexOf("World"));
console.log("Replaced string:", str.replace("World", "JavaScript"));
console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());
console.log("Trimmed string:", str.trim());

function showText() {
  document.querySelector(".string").innerText = "Hello JavaScript";
}
setTimeout(showText, 2000);

let words = str.split(" ");
console.log("Split string into array:", words);

let newStr = words.join(" - ");
console.log("Joined array into string:", newStr);
