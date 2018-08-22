$(document).ready(function() {

var userScore = 0;
var wins = 0;
var losses = 0;
var magicNumber = Math.floor(Math.random() * 120) + 1;
var emeraldVal = Math.floor(Math.random() * 12) + 1;
var garnetVal = Math.floor(Math.random() * 12) + 1;
var sapphireVal = Math.floor(Math.random() * 12) + 1;
var topazVal = Math.floor(Math.random() * 12) + 1;
$("#magic-number").text("Magic Number: " + magicNumber);
$("#wins").text("Wins: " + wins);
$("#losses").text("Losses: " + losses);
$("#your-score").text("Your Score: " + userScore);

function resetGame() {
    userScore = 0;
    magicNumber = Math.floor(Math.random() * 120) + 1;
    emeraldVal = Math.floor(Math.random() * 12) + 1;
    garnetVal = Math.floor(Math.random() * 12) + 1;
    sapphireVal = Math.floor(Math.random() * 12) + 1;
    topazVal = Math.floor(Math.random() * 12) + 1;
    $("#magic-number").text("Magic Number: " + magicNumber);
    $("#your-score").text("Your Score: " + userScore);
}

function winMessage() {
    $("#message-box").text("CRIKEY! YOU WIN");
}

function loseMessage() {
    $("#message-box").text("YOU HAVE DIED OF A TERRIBLE CURSE");
}

    $(".emerald-img").on("click", function() {
        userScore += emeraldVal;
        $("#your-score").text("Your Score: " + userScore);
    });

    $(".garnet-img").on("click", function() {
        userScore += garnetVal;
        $("#your-score").text("Your Score: " + userScore);
    });

    $(".sapphire-img").on("click", function() {
        userScore += sapphireVal;
        $("#your-score").text("Your Score: " + userScore);
    });

    $(".topaz-img").on("click", function() {
        userScore += topazVal;
        $("#your-score").text("Your Score: " + userScore);
    });

    $("body").on("click", function() {
        if (userScore == magicNumber) {
            wins++;
            $("#wins").text("Wins: " + wins);
            winMessage();
            resetGame();
        }
        else if (userScore > magicNumber) {
            losses++;
            $("#losses").text("Losses: " + losses);
            loseMessage();
            resetGame();
        }
    })

});