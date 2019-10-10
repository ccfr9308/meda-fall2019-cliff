//We have two divs, one is #story, and the other was called #choices

//Make sure the DOM is ready before running jQuery Code.

//Start of the story with a sentence when we load the page.
$(document).ready(function () {
   
$("#story").append("<p>Cliff woke up.</p>");

//add a button for raining.
$("#choices").append("<button id='raining'>It is raining.</button>");

//add a button for sunny
$("#choices").append("<button id='sunny'>It is sunny.</button>")
//attach an event listener for the raining button.
$("#raining").click(function (){

    //if clicked...

    //add to the story with a sentence.
        $("#story").append("<p>Unfortunately it is pouring like a tsunami outside.</p>");

    //remove the old choice buttons.
        $("#raining").remove();
        $("#sunny").remove();
    
    //add the new choice buttons.
        $("#choices").append("<button id='umbrella'>Find umbrella</button>");
        $("#choices").append("<button id='forget'>Forget about the umbrella</button>")

        //attach an event listener for the umbrella button.
        $("#umbrella").click(function () {

            //if clicked...
            $("#story").append("<p>Cliff took the umbrella, and lived happily ever after.</p>");
            
            //remove the old choice buttons
            $("#umbrella").remove ();
            $("#forget").remove ()

        });

        $("#forget").click(function) {
            $("#story").append("<p>Cliff forgot his umbrella, and then got soaked, and got sick.</p>");

            $("#umbrella").remove ();
            $("#forget").remove ();
        });




});
