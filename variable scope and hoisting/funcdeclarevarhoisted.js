// Function Declaration Overrides Variable Declaration When Hoisted

// Both the variable and the function are named myName​
​
var myName; ​
function myName() {
	console.log("Rich");
}​​ // The function declaration overrides the variable name​
console.log(typeof myName); // function

// But in this example, the variable assignment overrides the function declaration​
​
var myName = "Richard"; // This is the variable assignment (initialization) that overrides the function declaration.​
​​
function myName() {
	console.log("Rich");
}​
console.log(typeof myName); // string

// need to initialize the string variable, 
// otherwise the same name function will overrride the variable