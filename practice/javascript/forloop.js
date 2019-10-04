//A sample do while loop that will run 11 times

//Initialize counter variable for Loop.
var counter = 0;

//Create variable for the condition.
var continueLoop = true;

//Do while loop
do {
    //console.log("Loop number for Do While Loop: " + counter);
    //Iterator, change something to modify the condition
    counter = counter + 1;

    if (counter > 10) {
        continueLoop = false;
    }
    //Iterator End.

    
} while (continueLoop);

//While Loop
while (false) {
    //then run this code.
}
//A sample for Loop that will run 10 times.
//Syntax: for (Initialization ; Condition ; Iteration) {Code}

for (var counter = 0; counter < 10; counter=counter + 1){
    
    //console.log("Loop number for For Loop: " + counter);
}

//Default way of controlling a loop to run 45 times.
for (var counter = 0; counter < 45; counter = counter + 1) {
    console.log ("Hello")
}

//Control the amount of loops based on counter start and condition end.
for (var counter = 100; counter < 95; counter = counter + 1) {
    console.log("Hello!")
}

//Control the amount of loops based on counter jump.
for (var counter = 0; counter < 90; counter = counter + 2) {
    console.log ("Hello!")
}