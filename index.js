var totalButtons =  ["green","red","yellow","blue"];
var targetButton = [];
var userChoice = [];
var gameRunning = false;
var level = 1;

$(document).on("keypress", function(){
    if(gameRunning === false){
        $("h1").text("Level " + level);
        moveForward();
        gameRunning = true;
    }
});

$(".boxes").on("click", function(){
        var clickedButton = $(this).attr("id");
        userChoice.push(clickedButton);
        playAnimation(clickedButton);
        playSound(clickedButton);
        checkResult(userChoice.length - 1);
});

function moveForward(){
    userChoice = [];
    $("h1").text("Level " + level);
    level++;
    var randomNum = Math.floor(Math.random() * 4);
    var randomColor = totalButtons[randomNum];
    targetButton.push(randomColor);
    playAnimation(randomColor);
    playSound(randomColor);
}
function playAnimation(playIt){
    var selectedButton = "#" + playIt;
    $(selectedButton).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

}
function playSound(justPlayIt){
    var selectedBtn = justPlayIt + ".mp3";
    var audio = new Audio(selectedBtn);
    audio.play();
}
function checkResult(justCheckIt){
    if(targetButton[justCheckIt] === userChoice[justCheckIt]){
       if(targetButton.length === userChoice.length){
            setTimeout(function(){
                moveForward();
            }, 1000);
       }
    }
    else{
        $("h1").text("Game Over, Press Any Key to Restart the Game");
        $("body").addClass("wrong");
        playSound("wrong");
        setTimeout(function(){
            $("body").removeClass("wrong");
        }, 200);
        restartGame();
    }
}
function restartGame(){
    var targetButton = [];
    var gameRunning = false;
    var level = 1;
}






















// var buttonColours = ["red", "blue", "green", "yellow"];

// var gamePattern = [];
// var userClickedPattern = [];

// var started = false;
// var level = 0;

// $(document).keypress(function() {
//   if (!started) {
//     $("#level-title").text("Level " + level);
//     nextSequence();
//     started = true;
//   }
// });

// $(".btn").click(function() {

//   var userChosenColour = $(this).attr("id");
//   userClickedPattern.push(userChosenColour);

//   playSound(userChosenColour);
//   animatePress(userChosenColour);

//   checkAnswer(userClickedPattern.length-1);
// });

// function checkAnswer(currentLevel) {

//     if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
//       if (userClickedPattern.length === gamePattern.length){
//         setTimeout(function () {
//           nextSequence();
//         }, 1000);
//       }
//     } else {
//       playSound("wrong");
//       $("body").addClass("game-over");
//       $("#level-title").text("Game Over, Press Any Key to Restart");

//       setTimeout(function () {
//         $("body").removeClass("game-over");
//       }, 200);

//       startOver();
//     }
// }


// function nextSequence() {
//   userClickedPattern = [];
//   level++;
//   $("#level-title").text("Level " + level);
//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);

//   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
//   playSound(randomChosenColour);
// }

// function animatePress(currentColor) {
//   $("#" + currentColor).addClass("pressed");
//   setTimeout(function () {
//     $("#" + currentColor).removeClass("pressed");
//   }, 100);
// }

// function playSound(name) {
//   var audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }

// function startOver() {
//   level = 0;
//   gamePattern = [];
//   started = false;
// }
