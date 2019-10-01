

var someNumber = 50.30786;

var results = Math.round(someNumber);

var sentence = "The Number " + someNumber + " rounded is " + results + "!";

console.log(sentence);

//Rounds to the top integer
console.log(Math.ceil(45.2) );
//Rounds to the lower integer
console.log (Math.floor(45.8) );

//argument 1 power to argument 2.
console.log (Math.pow(10, 2) );

//Square root of Argument 1.
console.log(Math.sqrt(144) );

//Create a random number between 0 and .99999~
var random = Math.random();

var negative = random * -1;

var range = random * 10;

var wholeNumber = Math.ceil(range)
console.log(wholeNumber);