## Flow of closure2.js file
```
function celebrityName(firstName) {
	var nameIntro = "This celebrity is ";
	// this inner function has access to the outer function's variables, including the parameter
	function lastName(theLastName) {
		return nameIntro + firstName + " " + theLastName;
	}
	return lastName;
}

var mjName = celebrityName("Michael");
mjName("Jackson");

// This celebrity is Michael Jackson
```

- At first the declared variable name 'mjName' calls the 'celebrityName' function passing the "Michael"

- Then the function 'celebrityName' calls the 'lastName' function as it returns this function

- The closure (lastName) is called here after the outer function has returned above​. Yet, the closure still has access to the outer function's variables and parameter​

- So this function returns like this: nameIntro + firstName + " " + theLastName;

- And basically it already got the first two values, so the output will be like:

```
This celebrity is Michael + ........ the ongoing process calls the  "theLastName" property
```
- So that means this inner function still got access to the outer variable even the outer function "celebrityName" has returned

- This variable mjName("Jackson") passes then the 'theLastName' parameter

- So together they outputs:
```
This celebrity is Michael Jackson
```
