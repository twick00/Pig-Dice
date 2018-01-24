$(document).ready(function () {
    $(".play-button").click(function () {
        $(".player-one").addClass("panel-default > current-player");
        $("#player-one-controls").show();
        var scores = [0, 0];
        $(".current-roll").text("");
        $("#player-one-score").text("");
        $("#player-two-score").text("");
        $(".current-turn").text("");
        $("#result-output").prepend("------------------"+"&#13;&#10;" +"New Game!" +"&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;")
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
    } else if (!playerOneTurn) {
        playerOneTurn = true;
        $("#player-two-controls").hide();
        $(".player-two").removeClass("panel-default > current-player");
        $("#player-one-controls").show();
        $(".player-one").addClass("panel-default > current-player");
    } else {
        console.log("Error, this shouldn't happen");
    }
    return playerOneTurn;
}

function resultOutput(prepend, result, append, playerOneTurn) {
    var player;
    if (prepend) {

    }
    if (playerOneTurn) {
        player = "Player 1";
    } else {
        player = "Player 2";
    }

    $("#result-output").prepend("> " + prepend + player + append + result + '&#13;&#10;');
}

function main(scores) {
    var turnScore = 0;
    var roundScore = 0;
    var playerOneTurn = swapPlayer(false);
    $(".roll").click(function () {
        turnScore = checkScore(diceRoll());
        if (turnScore === 1) {
            roundScore = 0;
            playerOneTurn = swapPlayer(playerOneTurn);
            $(".current-roll").text("");
            resultOutput("Oh no! ", " rolled a 1!", "", playerOneTurn);
        } else {
            roundScore += turnScore;
            $(".current-roll").text(turnScore);
            resultOutput("", " rolled a " + turnScore, "", playerOneTurn);
        }
        $(".current-turn").text(roundScore);
        console.log("Turn: ", turnScore, "Round: ", roundScore);
    });
    $(".hold").click(function () {
        if (roundScore !== 0) {
            if (playerOneTurn) {
                scores[0] += roundScore;
                roundScore = 0;
                $("#player-one-score").text(scores[0]);
                playerOneTurn = swapPlayer(playerOneTurn);
            } else {
                scores[1] += roundScore;
                roundScore = 0;
                $("#player-two-score").text(scores[1]);
                playerOneTurn = swapPlayer(playerOneTurn);
            }
            resultOutput("", roundScore + " points!", " held on to their ", playerOneTurn);
            $(".current-roll").text("");
            console.log("Turn: ", turnScore, "Round: ", roundScore);
            console.log(scores[0], scores[1]);
        }
        else {
            resultOutput("Hey! ", "", " you can't bank 0 points!", playerOneTurn);
        }

    });
}

function diceRoll() {
    return Math.floor(Math.random() * Math.floor(6)) + 1;
}

function checkScore(diceRoll, score) {


    return diceRoll;
}