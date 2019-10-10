
$(document).ready(function () {

    $("#story").append("<p>Cliff woke up.</p>");

 
    $("#choices").append("<button id='inside'>Stay inside</button>");

 
    $("#choices").append("<button id='walk'>Take a walk</button>");

    $("#walk").click(function () {

        $("#story").append("<p>Cliff decided to take a walk.</p>");

        $("#inside").remove();
        $("#walk").remove();

        $("choices").append("<button id='north'>Walk North</button>")
        $("choices").append("button id='south'>Walk south</button>")
        });

    $("#inside").click(function () {
    
        $("#story").append("<p>Cliff stayed inside and lived happily ever after.</p>");

        
        $("#inside").remove();
        $("#walk").remove();


        $("#umbrella").remove()
        $("#forget").remove ()
      

        // attach an event listener for the forget button.
        $("#forget").click(function () {
            
            // if clicked...

            // add to the story with a sentence.     
            $("#story").append("<p>Eduardo forgot his umbrella, and then get soaked, and get sick.</p>");

            // remove the old choice buttons
            $("#umbrella").remove();
            $("#forget").remove();
        });


    });




    







});