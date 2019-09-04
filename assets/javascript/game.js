$(document).ready(function () {

    // jQuery methods go here...

    //  $("p").hide();

    var sum = 0;
    var ramdom =

        document.getElementById("ramdom").innerHTML =
        Math.floor(Math.random() * (120 - 19 + 1)) + 19;

    var rainbowNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    var blueNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    var greenNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    var redNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

    $("#rainbow").click(function () {
        document.getElementById("result").innerHTML = 
        sum += rainbowNumber;
        console.log(sum)
        isWinner();
    });

    $("#green").click(function () {
        document.getElementById("result").innerHTML = 
        sum += greenNumber;
        console.log(sum)
        isWinner();
    });

    $("#red").click(function () {
        document.getElementById("result").innerHTML = 
        sum += redNumber;
        console.log(sum)
        isWinner();

    });

    $("#blue").click(function () {
        document.getElementById("result").innerHTML = 
        sum += blueNumber;
        console.log(sum);
        isWinner();

    });


    document.getElementById("losses").innerHTML = 0;
    document.getElementById("wins").innerHTML = 0;



    function isWinner() {
        if (sum == ramdom) {
            var x = 0;
            x++;
            var z = x;
            document.getElementById("wins").innerHTML = z;
        }

        // else {
        //     var x = 0;
        //     x++;
        //     var z = x;
        //     document.getElementById("losses").innerHTML = z;

        // }
    }




});



