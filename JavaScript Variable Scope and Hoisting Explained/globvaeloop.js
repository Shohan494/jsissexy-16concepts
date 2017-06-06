for (var i = 1; i <= 10; i++) {
	console.log(i); // outputs 1, 2, 3, 4, 5, 6, 7, 8, 9, 10;
}
// The variable i is a global variable and it is accessible in the following 
// function with the last value it was assigned above

function aNumber() {
	console.log(i);
}
// The variable i in the aNumber function below is the global 
// variable i that was changed in the for loop above. Its last value was 11, set just before the for loop exited:
aNumber(); // 11