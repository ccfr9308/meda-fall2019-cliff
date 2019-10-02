

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

//Take random number and multiply by -1.  negative variable will hold negative version of random
var negative = random * -1;

//take random number and multiply by 10, range will hold product.
var range = random * 10;

//take range value and round up, then store number in wholeNumber variable.
var wholeNumber = Math.ceil(range)

//Send wholeNumber value to console.
console.log(wholeNumber);

//parseInt attempts to convert a string datatype into a number datatype.
parseInt("1000"); //Number 1000
parseInt("Hello"); //probably NaN
parseInt("100Hello"); //Number 100
parseInt("Hello100"); //NaN

var floatNumber = parseFloat("1000.303000"); // 1000.30300

console.log (floatNumber);

//example of complex code that generates a number between 1 and 10 and sends it directly to the console.
console.log (Math.floor( (Math.random() * 10 ) +1 ) );


//Finds the character at position 7 (starting from 0) and sends that character to the console.
console.log("Hello World!".charAt(7));

//Find the character in the string, and return the position number.
console.log( "Hello World!".indexOf("W")
);

//A method is a function that belongs to an object.
//Object.method()
//A property is a value stored in an object.
//Object.property

//Pi number
Math.PI;

//Length of a string.
"This is somewhat long.".length // 22





