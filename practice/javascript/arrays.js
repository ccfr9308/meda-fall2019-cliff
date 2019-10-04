var myVariable = "One thing at a time";

myVariable = "This is a new value";

var firstDay = "Monday";
var secondDay = "Tuesday";
// ..

//Array syntax: [ firstValue, secondValue, thirdValue]
var weekNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",]

//Call the whole array and send it to the console.
console.log (weekNames);

//Call the second value in the array, and send it to the console.
console.log (weekNames [1]);

console.log (weekNames [4]);

//Array methods/Functions

//Add element to the end of the array: push ();
weekNames.push ("Superday");

console.log (weekNames);

weekNames.push("Funday");

console.log (weekNames)

//Remove an element at the start of the array: shift();

weekNames.shift ();
console.log (weekNames);

//Restoring Array using Array Methods

weekNames.unshift("Tuesday");
weekNames.unshift ("Monday");
//weekNames.unshift("Monday", "Tuesday",)

weekNames.pop();
weekNames.pop ();

console.log (weekNames);

//Challenge: Move Sunday to the beginning of the array without writing any strings in your code.

var day = weekNames.pop()
weekNames.unshift(day);
console.log (weekNames);

//weekNames.unshift( weekNames.pop())