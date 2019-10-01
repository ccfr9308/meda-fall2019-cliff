
// This is a single line comment.

/* This is a multi-line comment
See?

*/


//console.log() takes a value and passes it to the console.
console.log("Hello, my name is Cliff!");

console.log("This is a second line of text");

//Basic Datatypes of Javascript

//String Datatype
"This is a string of characters";
'This is also a strong';
"Yet another string!"
"1900"
"false"

//Number Datatype
1920;
100000;
5000;

//Boolean Datatype (keywords)
true;
false;

console.log("Yet another string");

//Creating a variable
//Syntax var nameOfVariable;
var message;

//Store a value into the message variable.
message = "This is stored inside of a variable";

//Grab the value of the message variable and send it to the console.
console.log(message);

//Variables can only hold one value at a time, so we are overwriting the previous value in message when we reassign.
message = "I overwrote the previous text in message variable";

//Because this console.log() happened after the update, we will get the new value to the console.
console.log(message);

var variable1 = "string"
var variable2 = 1000000;
var variable3 = false

console.log(variable1);
console.log (variable2, variable3);

//Bad example of a variable name;
var thisVariableIsReallyImportantBecauseOtherwiseIWillBeFired = 10;

//Acceptable example of a variable name;
var importantVar = 20;

//Bad example of a variable name, be a little descriptive with what the variable holds for its name.
var y = 10;

var value1 = 100;
var value2 = value1;

console.log(value2);

//Order of operations for equal sign:
// runs second = run first;

//Math Operators.
/*
+ addition
- subtraction
/ division
* multiplication
% modulo
*/

var sum = 39 + 74 + 1 + 48 + 32948;
var difference = 100 - 30;
var quotient = 10 / 3;
var product = 100 * 2;

//These math operators are only available to Number datatype.

/* You cannot do this:
var diff = true / "string";
var other = "another string" * 100;

*/

//The + operator has two usages.  The second one is called concatination.
var wholeSentence = "My name is " + "Eduardo"
console.log (wholeSentence);

//Good use of concatination

var userName = "Johnathan";
var sentencePart1 = "Hello there,";
var sentencePart2 = "How are you doing?";

var complete = sentencePart1 + userName + sentencePart2;

console.log (complete);

//Using variables to do math on changing data.

var num1 = 7;
var num2 = 40;

var sum1 = num1 + num2;
var difference1 = num1 - num2;
var difference2 = num2 - num1;

//Redefining Variables.
var createdVariable;
createdVariable = 100;

// createdVariable was already defined;
//var createdVariable = 100;

//Order of Operations

var someValue= 10 - 30 / 6 * 3;
//8,-8
//
console.log(someValue)