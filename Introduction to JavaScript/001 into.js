let name="gaurav";
console.log(name);
console.log("hello world");
console.log("hello"+" "+name);

// alert("hello"+name);
document.write("hello"+name);
// console.log(5+6);
// console.log(5-6);
// console.log(5*6);
// console.log(5/6);
// console.log(5%6);
// console.log(5**6);
console.log("hello\nworld");
console.log("hello\tworld");
console.log("hello\"world");
console.log('hello\'world');
console.log("hello\\world");
console.log(5+"6");
console.log("5"+6);
console.log("5"+6+7);
console.log(5+6+"7");
console.log("5"+(6+7));

/*
 * JavaScript Introduction Notes
 * ===========================
 * 
 * 1. Basic Output Methods:
 *    - console.log() : prints to browser console
 *    - document.write() : writes directly to HTML document
 *    - alert() : shows popup message box
 * 
 * 2. Variables:
 *    - let : block-scoped variable
 *    - const : constant value
 *    - var : function-scoped (older way)
 * 
 * 3. Data Types:
 *    - String: "Hello", 'World'
 *    - Number: 42, 3.14
 *    - Boolean: true, false
 *    - null
 *    - undefined
 *    - Object: {name: "John", age: 30}
 *    - Array: [1, 2, 3]
 * 
 * 4. String Escape Sequences:
 *    \n - newline
 *    \t - tab
 *    \" - double quote
 *    \' - single quote
 *    \\ - backslash
 * 
 * 5. Type Coercion:
 *    - String + Number = String
 *    - Number + Number = Number
 *    - String + String = Concatenated String
 * 
 * 6. Basic Operators:
 *    + : addition/concatenation
 *    - : subtraction
 *    * : multiplication
 *    / : division
 *    % : modulus
 *    ** : exponentiation
 * 
 * 7. Best Practices:
 *    - Use camelCase for variable names
 *    - Use meaningful variable names
 *    - Comment your code
 *    - Use semicolons at the end of statements
 */

// Example Usage:
let greeting = "Hello";
let user = "World";
console.log(greeting + " " + user); // Output: Hello World