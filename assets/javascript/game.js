$(document).ready(function () {

    // jQuery methods go here...

    //  $("p").hide();

    document.getElementById("ramdom").innerHTML =
         Math.floor(Math.random() * (120 - 19 + 1) ) + 19;
      
    // $("#rainbow").click(function () {
    //     $(".crystals").hide();
    // });

    // $("#green").click(function () {
    //     $(".crystals").hide();
    // });

    // $("#blue").click(function () {
    //     $(".crystals").hide();
    // });

    // $("#red").click(function () {
    //     $(".crystals").hide();
    // });

    $("#rainbow").click(function () {

    document.getElementById("#green").innerHTML =
         Math.floor(Math.random() * (120 - 19 + 1) ) + 19;
         
        });


});



