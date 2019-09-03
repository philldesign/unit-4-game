$(document).ready(function () {

    // jQuery methods go here...

    //  $("p").hide();

    document.getElementById("ramdom").innerHTML =
        Math.floor(Math.random() * (120 - 19 + 1)) + 19;

    $("#rainbow").click(function () {
        console.log(Math.floor(Math.random() * (12 - 1 + 1)) + 1);

    });

    $("#green").click(function () {
        console.log(Math.floor(Math.random() * (12 - 1 + 1)) + 1);

    });

    $("#blue").click(function () {
        console.log(Math.floor(Math.random() * (12 - 1 + 1)) + 1);

    });

        $("#red").click(function () {
            document.getElementById("result").innerHTML =
            (Math.floor(Math.random() * (12 - 1 + 1)) + 1);

        });
        

        var red =
            
            $("#red").click(function () {
            document.getElementById("result").innerHTML =
            (Math.floor(Math.random() * (12 - 1 + 1)) + 1);

        });

        document.getElementById("result").innerHTML =
        (0 + red);

        
});



