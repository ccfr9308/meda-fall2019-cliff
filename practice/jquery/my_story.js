
$(document).ready(function () {

    $("#story").append("<p>Cliff woke up.</p>");

 
    $("#choices").append("<button id='inside'>Stay inside</button>");

    $("#choices").append("<button id='walk'>Take a walk</button>");

    $("#walk").click(function () {
        
        $("#story").append("<p>Cliff decided to take a walk.</p>");

        
        $("#inside").remove();
        $("#walk").remove();

        $("#choices").append("<button id='north'>Walk north</button>");

        $("#choices").append("<button id='south'>Walk south</button>");

        $("#north").click(function () {

            $("#story").append("<p>Cliff decided to walk north.</p>");
    
            $("#north").remove();
            $("#south").remove();

        });

        $("#south").click(function () {
            $("#story").append("<p>Cliff decided to walk south.</p>");

            $("#north").remove();
            $("#south").remove();
            $("#choices").append("<button id='west'>Walk west</button>");

           
        });
        $("#west").click(function () {

            $("story").append("<p>Cliff decided to walk west.</p>")
            $("#west").remove();
        
        })

    });
    $("#inside").click(function () {
    
        $("#story").append("<p>Cliff stayed inside.</p>");

        
        $("#inside").remove();
        $("#walk").remove();

        $("#choices").append("<button id='videoGames'>Play video games</button>");

        $("#choices").append("<button id='book'>Read a book</button>");

        $("#videoGames").click(function () {
            $("#story").append("<p>Cliff decided to play video games.</p>");
    
            $("#videoGames").remove();
            $("#book").remove();
        $("book").click(function () {
            $("#story").append("<p>Cliff decided to read a book.</p>");

            $("#videoGames").remove();
            $("#book").remove();

        });
        });
    });


   $("#fortnight").click(function () {

        $("#book").click(function () {
            $("#story").append("<p>Cliff read a book.</p>");
            $("#videoGames").remove();
            $("#book").remove();
        });

    });

});