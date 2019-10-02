function myFunction () {
    var text = "Goodbye"
    return text;
}



//Practice: Create Three Different Functions, each one returns a different datatype.  Console.log the results of your functions.

function firstFunction () {
    var text = "What's Up?";
    return text;
    
}

var anyName = firstFunction ();
console.log (anyName);


function secondFunction () {
    var moretext = 1000;
    return moretext;
}

var anyName2 = secondFunction ();
console.log(anyName2);

function thirdFunction () {
    var finaltext = true;
    return finaltext;

}

var boolean = thirdFunction();
console.log(boolean);

//Data flow using a built in function.

var aNumber = 22000;

//Provide data to the Math.round() function using aNumber as an argument.
Math.round(aNumber)

//* Do not write this in code Math.round() will return a value of 22000, based on line 42, and the line 42 would now look like
22000;


function ourOwnRound(theNumber) {
    var results;
    var decimalOfTheNumber = theNumber % 1;
    
    if (decimalOfTheNumber >= .5) {
        results = Math.ceil(theNumber);
}   else {
        results = Math.floor(theNumber);
        return results;
    }

    return results;
}

console.log (ourOwnRound (63.2938));
var values = ourOwnRound(392.983);
console.log(values);



//Equation to figure out just the decimal value.
