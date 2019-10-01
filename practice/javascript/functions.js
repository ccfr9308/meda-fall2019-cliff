// Function syntax.
// function keyword + function name + parenthesis + code block

var number = 10;


//datatypes//
10000
"this is a string"
true;
false;


/* Pseudo-code for if statement nesting

if (raining) {
    if (umbrella) {
        "take umbrella";

    } else {
        "take uber";
    }
} else {

    "enjoy your day"

}

*/

mathify(22, 47);

mathify (2343, 230234)

mathify(34234, 5)

mathify(234987, 234987);

function mathify( firstNumber, secondNumber ) {

    var description = "The following values were generated from " + firstNumber + " and " + secondNumber + ".";

    console.log(description);

    var sum = firstNumber + secondNumber;
    var sumSentence = "The sum is: " + sum;
    console.log(sumSentence);

    var difference = firstNumber - secondNumber;
    var differenceSentence = "the difference is: " + difference;
    console.log(differenceSentence);

    var quotient = firstNumber / secondNumber;
    var quotientSentence = "the quotient is: "+ quotient;
    console.log(quotientSentence);

    var product = firstNumber * secondNumber;
    var productSentence = "the product is: " + product;
    console.log(productSentence);

}