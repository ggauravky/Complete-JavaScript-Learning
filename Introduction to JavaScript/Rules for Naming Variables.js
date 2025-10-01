/*
         * Rules for Naming Variables in JavaScript
         * ========================================
         * 
         * 1. Variable names can include letters, digits, underscores (_), and dollar signs ($).
         * 2. Variable names must begin with a letter, underscore (_), or dollar sign ($). They cannot start with a digit.
         * 3. Variable names are case-sensitive (e.g., 'myVar' and 'myvar' are different).
         * 4. Variable names cannot be JavaScript reserved keywords (e.g., 'let', 'const', 'if', 'else', etc.).
         * 5. Variable names should not contain spaces. Use camelCase or underscores to separate words (e.g., 'myVariable' or 'my_variable').
         * 6. Variable names should be descriptive and meaningful to improve code readability.
         * 
         * Examples of valid variable names:
         * - myVariable
         * - _myVariable
         * - $myVariable
         * - my_variable
         * - variable123
         * 
         * Examples of invalid variable names:
         * - 123variable (starts with a digit)
         * - my-variable (contains a hyphen)
         * - my variable (contains a space)
         * - let (reserved keyword)
*/

let myVariable = "Hello, World!";
console.log(myVariable);
let _myVariable = "Hello, World!";
console.log(_myVariable);
let $myVariable = "Hello, World!";
console.log($myVariable);
let my_variable = "Hello, World!";
console.log(my_variable);
let variable123 = "Hello, World!";
console.log(variable123);
// let 123variable = "Hello, World!"; // Invalid: starts with a digit
// let my-variable = "Hello, World!"; // Invalid: contains a hyphen 
