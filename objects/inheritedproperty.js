var school = {schoolName:"MIT", schoolAccredited: true, schoolLocation:"Massachusetts"};
 

//Use of the for/in loop to access the properties in the school object​
for (var eachItem in school) {
console.log(eachItem); // Prints schoolName, schoolAccredited, schoolLocation​

}

console.log('\n');

function HigherLearning () {
this.educationLevel = "University";
}

// Implement inheritance with the HigherLearning constructor​
var school = new HigherLearning ();
school.schoolName = "MIT";
school.schoolAccredited = true;
school.schoolLocation = "Massachusetts";


//Use of the for/in loop to access the properties in the school object
for (var eachItem in school) {
console.log(eachItem); // Prints educationLevel, schoolName, schoolAccredited, and schoolLocation​
}