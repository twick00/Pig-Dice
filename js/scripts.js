$(document).ready(function() {
    $(".play-button").click(function() {
        $(".player-one").addClass("panel-default > current-player");
        $("#player-one-controls").show();
        var scores = [0, 0];
        main(scores);
        //To-Do: Set so when play button is clicked, reset all fields.
    });
    
});
function swapPlayer(playerOneTurn) {
    if (playerOneTurn) {
        playerOneTurn = false;
        $("#player-one-controls").hide();
        $(".player-one").removeClass("panel-default > current-player");
        $("#player-two-controls").show();
        $(".player-two").addClass("panel-default > current-player");
    }
    else if (!playerOneTurn) {
        playerOneTurn = true;
        $("#player-two-controls").hide();
        $(".player-two").removeClass("panel-default > current-player");
        $("#player-one-controls").show();
        $(".player-one").addClass("panel-default > current-player");
    }
    else {
        console.log("Error, this shouldn't happen");
    }
    return playerOneTurn;
}
function main(scores) {
    var turnScore = 0;
    var roundScore = 0;
    var playerOneTurn = swapPlayer(false);
    $(".roll").click(function() {
        turnScore = checkScore(diceRoll());
        if (turnScore === 1) {
            roundScore = 0;
            playerOneTurn = swapPlayer(playerOneTurn);
            $(".current-roll").text("");
        }
        else {
            roundScore += turnScore;
            $(".current-roll").text(turnScore);
        } 
        console.log("Turn: ", turnScore, "Round: ", roundScore);
    });
    $(".hold").click(function() {
        if (playerOneTurn) {
            scores[0] += roundScore;
            roundScore = 0;
            $("#player-one-score").text(scores[0]);
            playerOneTurn = swapPlayer(playerOneTurn);
        }
        else {
            scores[1] += roundScore;
            roundScore = 0;
            $("#player-two-score").text(scores[1]);
            playerOneTurn = swapPlayer(playerOneTurn);
        }
        $(".current-roll").text("");
        console.log("Turn: ", turnScore, "Round: ", roundScore);
        console.log(scores[0], scores[1]);
    });
}
function diceRoll() {
    return Math.floor(Math.random() * Math.floor(6)) + 1;
}

function checkScore(diceRoll, score) {


    return diceRoll;
}