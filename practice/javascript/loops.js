//Do While Loop
//For Loop
//While Loop
// .foreach () (not covered)


// Syntax of Do While

//do { /* code */} while (true); //because the value of true never changes, the loop will never end.

var aVariable = true;
var counter = 0;
do {
    //Grab the value of counter (after the = sign), then add a 1 to it, finally store the results back into counter (before the =).
    counter = counter + 1;//counter ++

    console.log ("The value of counter is: " + counter);

   if (counter > 5) {
       aVariable = false;
   }

} while (aVariable);


var stringToTest = "This has to be a really long sentence so we have a chance to count a character twice."
var counter = 0;
var loopContinue = true;
do {

    counter = counter + 1;
    var character = stringToTest.charAt(counter);

console.log (character)
    if (counter > 10) {
        loopContinue = false;

    }

}

while ( loopContinue );