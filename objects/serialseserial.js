var christmasList = {mike:"Book", jason:"sweater", chelsea:"iPad" }
var string = JSON.stringify (christmasList);
console.log(string);
console.log('\n');
// Prints this string:
// "{"mike":"Book","jason":"sweater","chels":"iPad"}"
// To print a stringified object with formatting, add "null" and "4" as 
// parameters:
var string2 = JSON.stringify (christmasList, null, 4);
console.log(string);
console.log('\n');
/* "{
    "mike": "Book",
    "jason": "sweater",
    "chels": "iPad"
}"
*/// JSON.parse Examples \\
// The following is a JSON string, so we cannot access the properties with dot notation (like christmasListStr.mike)
var christmasListStr = '{"mike":"Book","jason":"sweater","chels":"iPad"}';

// Let’s convert it to an object
var christmasListObj = JSON.parse (christmasListStr); 

// Now that it is an object, we use dot notation
console.log(christmasListObj.mike); // Book