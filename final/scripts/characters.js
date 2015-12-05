// characters.js

var
  player1CharName,
  player2CharName,
  player1Active = 1,
  player2Active = 0
;

function addCharacter() {
  $(".mario-characters img").click(function() {
    if (player1Active === 1 && player2Active === 0) {
      player1CharName = $(this).attr("alt");
      $(".player1-choice img").attr("src", "images/" + player1CharName + "-pick.jpg");
      console.log("Player 1 : " + player1CharName);
      sessionStorage.setItem("player1", player1CharName);
    } else if (player2Active === 1 && player1Active === 0) {
      player2CharName = $(this).attr("alt");
      $(".player2-choice img").attr("src", "images/" + player2CharName + "-pick.jpg");
      console.log("Player 2 : " + player2CharName);
      sessionStorage.setItem("player2", player2CharName);
    };
  });
};

function choosePlayerBox() {
  $("#one").click(function() {
    if (player1Active === 1) {

    } else {
      player2Active = 0;
      player1Active = 1;
    }
  });

  $("#two").click(function() {
    if (player2Active === 1) {

    } else {
      player1Active = 0;
      player2Active = 1;
    }
  });
};

/* NEED TO WORK ON THIS */
// var activeBox1 = function() {
//   setInterval($(".player1-choice").fadeToggle(600), 900);
// };
//
// function stopActiveBox1() {
//   clearInterval(activeBox1);
// };

$(document).ready(function() {
  addCharacter();
  choosePlayerBox();
});
