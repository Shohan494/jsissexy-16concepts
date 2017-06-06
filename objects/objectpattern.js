var mangoFruit = {
	color: "yellow",
	sweetness: 8,
	fruitName: "Mango",
	nativeToLand: ["South America", "Central America"],
	​
	​showName: function () {
	console.log("This is " + this.fruitName);
	},
	​nativeTo: function () {
	 this.nativeToLand.forEach(function (eachCountry)  {
	            console.log("Grown in:" + eachCountry);
	        });
	}
	}