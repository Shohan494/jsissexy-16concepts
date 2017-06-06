	// We have been using dot notation so far in the examples above, here is another example again:​
	​var book = {title: "Ways to Go", pages: 280, bookMark1:"Page 20"};
	​
	​// To access the properties of the book object with dot notation, you do this:​
	console.log ( book.title); // Ways to Go​
	console.log ( book.pages); // 280


Bracket Notation

	// To access the properties of the book object with bracket notation, you do this:​
	console.log ( book["title"]); //Ways to Go​
	console.log ( book["pages"]); // 280​
	​
	​//Or, in case you have the property name in a variable:​
	​var bookTitle = "title";
	console.log ( book[bookTitle]); // Ways to Go​
	console.log (book["bookMark" + 1]); // Page 20 
	console.log (book["bookMark1"]); // Page 20 