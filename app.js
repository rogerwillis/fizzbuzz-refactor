$(document).ready(function(e) {

    $(".btn-submit").on('click', function() {

        //reset input
        $('tr').remove();
        //get input
        inputNumber($("#input").val());
    });


    //one named function
    var inputNumber = function(number) {

        //Prevent Browser Destruction
        if (+number > 777) {

            $("#myModal").modal("show");
            $(".modal-body").html("Really? <strong>" + number + "</strong> is a bit too big there sparky! Numbers are cool and all but that is just a bit ridiculous.");


        }
        //check to see if it is a decimal
        else if (number % 1 != 0) {
            $("#myModal").modal("show");
            $(".modal-body").html("Really? <strong>" + number + "</strong> is not a whole number. I only deal in big numbers jerky! Try again!!!!");

        }
        //is the input blank??
        else if (number == "") {
            $("#myModal").modal("show");
            $(".modal-body").html("Um... Please put in a number there sailor!");

        }

        //is the input blank??
        else if (number == "0") {
            $("#myModal").modal("show");
            $(".modal-body").html("Sorry, Zero is going to output zero items... Nice try there buckaroo!");

        } else {
            //Loop it baby!
            for (var i = 1; i <= number; i++) {

                //if divisible by 15 - Why do I need to put divisible by 15 first for it to work?
                if (i % 15 === 0) {
                    $(".list").append("<tr class='danger'><td><strong><span class='glyphicon glyphicon-star'></span>   Fizz Buzz</strong></td></tr>");
                }

                //if divisibkle by 3
                else if (i % 3 === 0) {

                    $(".list").append("<tr class='warning'><td>Fizz</td></tr>");

                }

                //if divisible by 5
                else if (i % 5 === 0) {

                    $(".list").append("<tr class='success'><td>Buzz</td></tr>");

                }

                //if divisible by 3 and 5
                else {

                    $(".list").append("<tr><td>" + i + "</td></tr>");

                }
            }

        }


    };

});