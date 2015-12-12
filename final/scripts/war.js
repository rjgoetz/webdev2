// war.js //

var
	cardDeck = [],
	player1 = [],
  player2 = [],
	player1Char = sessionStorage.player1,
	player2Char = sessionStorage.player2,
	card1,
	card2,
	warCards1,
	warCards2,
	count1,
	count2,
	played1 = 0,
	played2 = 0,
	playerCardsLength1,
	playerCardsLength2
;

// set character images
function setCharImage() {
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
	}

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
		}

		// logic to push new card to deck or issue new random card
		if (duplicate > 0) {
			randomCard();
			duplicate = 0;
		} else {
			cardDeck.push(card);
		}
	}

	// test statements
	if (cardDeck.length === 52) {
		console.log("Card Deck Built Successfully");
	} else {
		console.log("Card Deck Failed");
	}
}

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
 		}
 	}

	// add card img file to document
	$(".player1-card").append("<img id='card-1' src='cards/card-back.png'>");
	$(".player2-card").append("<img id='card-2' src='cards/card-back.png'>");

	// test statements
	if (player1.length === 26 && player2.length === 26) {
		console.log("Cards Dealt to Players Successfully");
	} else {
		console.log("Cards Not Dealt Correctly");
	}
}

function playGame() {

	// remove card from player deck
	function spliceCards(player) {
		if (player === "player1") {
			card1 = player1.splice(0, 1);
			console.log("Card Player 1 = " + card1[0][0]);
		} else if (player === "player2") {
			card2 = player2.splice(0, 1);
			console.log("Card Player 2 = " + card2[0][0]);
		}
	}

	// remove War cards from player deck
	function spliceCardsWar() {
		// cut up to four cards from player 1 and 2 deck
		warCards1 = player1.splice(0, 4);
		warCards2 = player2.splice(0, 4);
		console.log("War Cards Player 1 = " + warCards1 + " War Cards Player 2 = " + warCards2);
	}

	// log scores to console
	function logCards() {
		console.log("Player 1 Score = " + count1 + ", Player 2 Score = " + count2);
	}

	// count player cards and update scorebar
	function countCards() {
		count1 = player1.length;
		$(".player1-score p").text(count1);
		count2 = player2.length;
		$(".player2-score p").text(count2);
	}

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
		}
	}

	// display cards (war play)
	function displayWarCards() {
		// append war card graphics player 1
		for (var i = 0; i < warCards1.length; i++) {
			$(".war-cards1").append("<div class='col col1-4' style='position: relative'><img src='cards/" + warCards1[i][0] + "_" + warCards1[i][1] + ".png'></div>");
		}

		// append war card graphics player 2
		for (var i = 0; i < warCards2.length; i++) {
			$(".war-cards2").append("<div class='col-right col1-4' style='position: relative'><img src='cards/" + warCards2[i][0] + "_" + warCards2[i][1] + ".png'></div>");
		}
	}

	// reset war cards if present
	function resetWarCards() {
		$(".war-cards1").html("");
		$(".war-cards2").html("");
	}

	// war mode logic
	function playWar() {
		console.log("Play War");

		// last war card determines winner
		if (player1[playerCardsLength1][0] > player2[playerCardsLength2][0]) {
			// log winner to console and update war scoreboard
			console.log("Player 1 Wins War");
			$(".warbar").append("<p>Player 1 Wins War!</p>");

			// grab war cards from player1 and player2
			spliceCardsWar();

			// concatenate initial cards and warcards into player1's deck
			player1 = player1.concat(card1, warCards1, card2, warCards2);

			// display current score in scorebar
			countCards();

			// display card graphics
			displayWarCards();

			// style loser's war card
			$(".war-cards2 div:last-of-type").append("<p class='you-lost-war2'>X</p>");

			// add cards to console
			logCards();

		} else if (player1[playerCardsLength1][0] === player2[playerCardsLength2][0]) {
			// log tie to console - redraw
			console.log("It's a stalemate! Redraw!");

			// grab war cards from player1 and player2
			spliceCardsWar();

			// concatenate initial cards and warcards back into players' decks
			player1 = player1.concat(warCards1);
			player2 = player2.concat(warCards2);

			// display current score in scorebar
			countCards();

			// replay war
			playWar();

		} else {
			// log winner to console
			console.log("Player 2 Wins War");
			$(".warbar").append("<p>Player 2 Wins War!</p>");

			// grab war cards from player1 and player2
			spliceCardsWar();

			// concatenate initial cards and warcards into player2's deck
			player2 = player2.concat(card2, warCards2, card1, warCards1);

			// display current score in scorebar
			countCards();

			// display card graphics
			displayWarCards();

			// style loser's war card
			$(".war-cards1 div:last-of-type").append("<p class='you-lost-war1'>X</p>");

			// add cards to console
			logCards();
		}
	}

	// playing dynamics
	function playLogic() {
		if (card1[0][0] > card2[0][0]) {
			// log winner to console
			console.log("Player 1 Wins");

			// concatenate cards to player1's deck
			player1 = player1.concat(card1, card2);

			// style loser's card
			$(".player2-card").append("<p class='you-lost'>X</p>");

			// update score in scoreboard
			countCards();

			// add cards to console
			logCards();

			// war mode
		} else if (card1[0][0] === card2[0][0]) {
				// pre-war setup : find length of player cards in case there are less than 4 cards left in player hand
				if (player1.length <= 4) {
					playerCardsLength1 = player1.length - 1; // to account for indexing
				} else {
					playerCardsLength1 = 3;
				}

				if (player2.length <= 4) {
					playerCardsLength2 = player2.length - 1; // to account for indexing
				} else {
					playerCardsLength2 = 3;
				}

				// set yellow war scoreboard
				$("header").attr("class", "top-banner-war");

				// append war scorebar
				$(".scorebar-reg").append("<div class='warbar'></div>");

				// call war mode logic function
				playWar();
			} else {

				// log winner to console
				console.log("Player 2 Wins");

				// concatenate cards to player2's deck
				player2 = player2.concat(card2, card1);

				// style loser's card
				$(".player1-card").append("<p class='you-lost'>X</p>").fadeIn();

				// update score in scoreboard
				countCards();

				// add cards to console
				logCards();
			}
		}

	// trick logistics
	var callPlayer1 = function() {
		if (player1.length > 0) {
			if (played1 === 0 && played2 === 0) {

				// grab player1 card and display it
				spliceCards("player1");
				displayCard("player1");

				// set counter
				played1 = 1;

				//reset player2 card image
				$(".player2-card img").attr("src", "cards/card-back.png");
				$(".player2-card p").remove();

			} else if (played2 === 1) {

				// grab player1 card and display it
				spliceCards("player1");
				displayCard("player1");

				// add cards to console
				countCards();

				// run game logic
				playLogic();

				// reset counters
				played1 = 0;
				played2 = 0;
			}
		} else if (player1.length === 0) {
				console.log("You won the war!");

				// set player winner name
				if (player1.length === 0) {
					$(".winner-bg p").text("Player 2 Wins the Game!!!");
				} else if (player2.length === 0) {
					$(".winner-bg p").text("Player 1 Wins the Game!!!");
				}

				// fade in winner's background
				$(".winner-bg").fadeIn(1500);
			}
		}

	// click "play" for Player 1
	$("#player1-play").click(function() {
		// rest war mode graphics if needed
		$("header").attr("class", "top-banner-reg");
		$(".warbar").remove();

		resetWarCards();
		callPlayer1();
	});

	var callPlayer2 = function() {
		if (player2.length > 0) {
			if (played1 === 0 && played2 === 0) {

				// grab player2 card and display it
				spliceCards("player2");
				displayCard("player2");

				// set counter
				played2 = 1;

				//reset player1 card image
				$(".player1-card img").attr("src", "cards/card-back.png");
				$(".player1-card p").remove();

			} else if (played1 === 1) {

				// grab player2 card and display it
				spliceCards("player2");
				displayCard("player2");

				// add cards to console
				countCards();

				// run game logic
				playLogic();

				// reset counters
				played1 = 0;
				played2 = 0;
			}
		} else if (player2.length === 0) {
			console.log("You won the war!");

			// set player winner name
			if (player1.length === 0) {
				$(".winner-bg p").text("Player 2 Wins the Game!!!");
			} else if (player2.length === 0) {
				$(".winner-bg p").text("Player 1 Wins the Game!!!");
			}

			// fade in winner's background
			$(".winner-bg").fadeIn(1500);
		}
	}

	// click "play" for Player B
	$("#player2-play").click(function() {
		// rest war mode graphics if needed
		$("header").attr("class", "top-banner-reg");
		$(".warbar").remove();

		resetWarCards();
		callPlayer2();
	});

}; // end function playGame()


$(document).ready(function() {
	// fade out animation to game mode
	$(".fade-bg").fadeOut(1500);

	// display chosen characters
	setCharImage();

	// build 52 card deck
	createDeck();

	// deal cards to player1 and player 2
	dealCards();

	// initialize game
	playGame();
});
