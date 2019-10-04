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