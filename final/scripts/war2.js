// war.js //

var
	cardDeck = [],
	player1 = [],
  player2 = []
;

// set character images
function setCharImage() {
	var
		player1Char = sessionStorage.player1,
		player2Char = sessionStorage.player2
	;

	// set player characters
	$(".player1-char img").attr("src", "images/" + player1Char + "-main.jpg");
	$(".player2-char img").attr("src", "images/" + player2Char + "-main.jpg");
}

// create initial deck of cards
function createDeck() {
	/*  Card Values = 2 through 14; 11 = J, 12 = Q, 13 = K, 14 = A
		Suit Values : 1 = Clubs, 2 = Diamonds, 3 = Hearts, 4 = Spades */

	var
		card,
		duplicate = 0
	;

	// generate random card value and suit
	function randomCard() {
		card = [Math.ceil(Math.random()*13 + 1), Math.ceil(Math.random()*4)];
	};

	// add first card to deck
	randomCard();
	cardDeck.push(card);

	// build 52 card deck
	while (cardDeck.length < 52) {

		// search for duplicate card
		for (var i = 0, len = cardDeck.length; i < len; i++) {
			// find card value
			if (card[0] === cardDeck[i][0]) {
				// find card suit
				for (var j = 0, len2 = cardDeck[i].length; j < len2; j++) {
					if (j > 0 && card[1] === cardDeck[i][j]) {
						duplicate++;
					}
				}
			}
		};

		// logic to push new card to deck or issue new random card
		if (duplicate > 0) {
			randomCard();
			duplicate = 0;
		} else {
			cardDeck.push(card);
		};
	};

	// test statements
	if (cardDeck.length === 52) {
		console.log("Card Deck Built Successfully");
	} else {
		console.log("Card Deck Failed");
	};
};

// deal cards to player 1 and player 2
function dealCards() {
	var
		card,
		a = 0
	;

	// push cards to players 1 and 2 one by one
 	for (var i = 0; i < cardDeck.length; i++) {
 		if (a === 0) {
 			card = cardDeck[i].splice(0, 2);
 			player2.push(card);
 			a = 1;
 		} else {
 			card = cardDeck[i].splice(0, 2);
 			player1.push(card);
 			a = 0;
 		};
 	};

	// add card img file to document
	$(".player1-card").append("<img id='card-1' src='cards/card-back.png'>");
	$(".player2-card").append("<img id='card-2' src='cards/card-back.png'>");

	// test statements
	if (player1.length === 26 && player2.length === 26) {
		console.log("Cards Dealt to Players Successfully");
	} else {
		console.log("Cards Not Dealt Correctly");
	};
};

function playGame() {
	var card1,
		card2,
		warCards1,
		warCards2,
		count1,
		count2,
		played1 = 0,
		played2 = 0,
		winStatus
	;

	// remove card from player deck
	function spliceCards(player) {
		if (player === "player1") {
			card1 = player1.splice(0, 1);
			console.log("Card Player 1 = " + card1[0][0]);
		} else if (player === "player2") {
			card2 = player2.splice(0, 1);
			console.log("Card Player 2 = " + card2[0][0]);
		};
	};

	// remove War cards from player deck
	function spliceCardsWar() {
		warCards1 = player1.splice(0, 5);
		warCards2 = player2.splice(0, 5);
		console.log("War Cards Player 1 = " + warCards1 + " War Cards Player 2 = " + warCards2);
	};

	// log scores to console
	function logCards() {
		console.log("Player 1 Score = " + count1 + ", Player 2 Score = " + count2);
	};

	// count player cards
	function countCards() {
		count1 = player1.length;
		$(".player1-score p").text(count1);
		count2 = player2.length;
		$(".player2-score p").text(count2);
	};

	// display cards (regular play)
	function displayCard(player) {
		if (player === "player1") {
			// reset card
			$(".player1-card").html("");

			// add initial card state
			$(".player1-card").append("<img id='card-1'>");

			// add player card
			$(".player1-card img").attr("src", "cards/" + card1[0][0] + "_" + card1[0][1] + ".png");
		} else if (player === "player2") {
			// reset card
			$(".player2-card").html("");

			// add initial card state
			$(".player2-card").append("<img id='card-2'>");

			// add player card
			$(".player2-card img").attr("src", "cards/" + card2[0][0] + "_" + card2[0][1] + ".png");
		};
	};

	// display cards (war play)
	function displayWarCards() {
		$("#cards-a").html("");
		$("#cards-b").html("");

		for (var i = 0; i < warCardsA.length; i++) {
			$("#cards-a").append("<img src='cards/" + warCardsA[i][0] + "_" + warCardsA[i][1] + ".png'>");
		};

		for (var j = 0; j < warCardsB.length; j++) {
			$("#cards-b").append("<img src='cards/" + warCardsB[j][0] + "_" + warCardsB[j][1] + ".png'>");
		};
	};

	// playing dynamics
	function playLogic() {
		if (count1 > 0 && count2 > 0) {
			if (card1[0][0] > card2[0][0]) {
				console.log("Player 1 Wins");
				player1 = player1.concat(card1, card2);
				$(".player2-card").append("<p class='you-lost'>X</p>");
				countCards();
				logCards();
			} else if (card1[0][0] === card2[0][0]) {
				function playWar() {
					console.log("Play War");

						if (player1[4][0] > player2[4][0]) { //need to fix this bug (not always 4 cards left in deck)
						console.log("Player 1 Wins War");
						spliceCardsWar();
						player1 = player1.concat(warCards1, warCards2);
						countCards();
						//displayWarCards();

						// highlight last "War" card
						//$("#cards-a img:last-of-type").attr("class", "war-card");

						logCards();
					} else if (player1[4][0] === player2[4][0]) {
						console.log("It's a stalemate! Redraw!");
						spliceCardsWar();
						player1 = player1.concat(warCards1);
						player2 = player2.concat(warCards2);
						countCards();
						playWar();
					} else {
						console.log("Player 2 Wins War");
						spliceCardsWar();
						player2 = player2.concat(warCards2, warCards1);
						countCards();
						//displayWarCards();

						// highlight last "War" card
						//$("#cards-b img:last-of-type").attr("class", "war-card");

						logCards();
					};
				};
				playWar();
			} else {
				console.log("Player 2 Wins");
				player2 = player2.concat(card2, card1);
				$(".player1-card").append("<p class='you-lost'>X</p>");
				countCards();
				logCards();
			}
		} else {
			console.log("You won the war!");
			// if (count1 === 0) {
			// 	$("#win-status-a").text("You lost!");
			// 	$("#win-status-b").text("You Won the Game!");
			// } else if (count2 === 0) {
			// 	$("#win-status-b").text("You lost!");
			// 	$("#win-status-a").text("You Won the Game!");
			// }
		};
	};


	// Play Functions
	var callPlayer1 = function() {
		if (played1 === 0 && played2 === 0) {
			spliceCards("player1");
			displayCard("player1");
			played1 = 1;

			//reset player2 card image
			$(".player2-card img").attr("src", "cards/card-back.png");
			$(".player2-card p").remove();


		} else if (played2 === 1) {
			spliceCards("player1");
			displayCard("player1");
			countCards();
			playLogic();
			played1 = 0;
			played2 = 0;
		};
	};

	// click "play" for Player 1
	$("#player1-play").click(callPlayer1);
	// press "a" for Player 1
	// $(document).keypress(function(e) {
	// 	if (e.which === 65) {
	// 		callPlayerA;
	// 	}
	// });

	var callPlayer2 = function() {
		if (played1 === 0 && played2 === 0) {
			spliceCards("player2");
			displayCard("player2");
			played2 = 1;

			//reset player1 card image
			$(".player1-card img").attr("src", "cards/card-back.png");
			$(".player1-card p").remove();


			
		} else if (played1 === 1) {
			spliceCards("player2");
			displayCard("player2");
			countCards();
			playLogic();
			played1 = 0;
			played2 = 0;
		};
	};

	// click "play" for Player B
	$("#player2-play").click(callPlayer2);
	// press "L" for Player B
	// window.onkeypress = function(event) {
	// 	if (event.keyCode === 76) {
	// 		callPlayerB;
	// 	}
	// };

};

$(document).ready(function() {
	$(".fade-bg").fadeOut(1500);

	setCharImage();
	createDeck();
	dealCards();
	playGame();
});
