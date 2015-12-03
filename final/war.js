// war.js //

var
	cardDeck = [],
	playerA = [],
   	playerB = []
;

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

	// buid 52 card deck
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
};

// deal cards to player A (computer) and player B (user)
function dealCards() {
	var
		card,
		a = 0
	;

	// push cards to player A and B one by one
 	for (var i = 0; i < cardDeck.length; i++) {
 		if (a === 0) {
 			card = cardDeck[i].splice(0, 2);
 			playerB.push(card);
 			a = 1;
 		} else {
 			card = cardDeck[i].splice(0, 2);
 			playerA.push(card);
 			a = 0;
 		};
 	};

	// add card img file to document
	$("#cards-a").append("<img id='card-a' src='cards/card-back.png'>");
	$("#cards-b").append("<img id='card-b' src='cards/card-back.png'>");

};

$("#play").click(function() {
	var cardA,
		cardB,
		warCardsA,
		warCardsB,
		countA,
		countB,
		winStatus
	;

	// remove played card from player deck
	function spliceCards() {
		cardA = playerA.splice(0, 1);
		cardB = playerB.splice(0, 1);
		console.log("Card A = " + cardA[0][0] + ", Card B = " + cardB[0][0]);
	}

	// remove played War cards from player deck
	function spliceCardsWar() {
		warCardsA = playerA.splice(0, 5);
		warCardsB = playerB.splice(0, 5);
		console.log("War Cards A = " + warCardsA + " War Cards B = " + warCardsB);
	}

	// log cards to console
	function logCards() {
		console.log("Player A = " + countA + ", Player B = " + countB);
	}

	// count player cards
	function countCards() {
		countA = playerA.length;
		$("#card-status-a span").text(countA);
		countB = playerB.length;
		$("#card-status-b span").text(countB);
	}

	countCards();

	// display cards
	function displayCards() {
		// reset cards
		$("#cards-a").html("");
		$("#cards-b").html("");

		// add initial card state
		$("#cards-a").append("<img id='card-a'>");
		$("#cards-b").append("<img id='card-b'>");

		// add player card
		$("#card-a").attr("src", "cards/" + cardA[0][0] + "_" + cardA[0][1] + ".png");
		$("#card-b").attr("src", "cards/" + cardB[0][0] + "_" + cardB[0][1] + ".png");
	}

	function displayWarCards() {
		$("#cards-a").html("");
		$("#cards-b").html("");

		for (var i = 0; i < warCardsA.length; i++) {
			$("#cards-a").append("<img src='cards/" + warCardsA[i][0] + "_" + warCardsA[i][1] + ".png'>");
		}

		$("#cards-b").html("");
		for (var j = 0; j < warCardsB.length; j++) {
			$("#cards-b").append("<img src='cards/" + warCardsB[j][0] + "_" + warCardsB[j][1] + ".png'>");
		}
	}

	// playing dynamics
	if (countA > 0 && countB > 0) {
		if (playerA[0][0] > playerB[0][0]) {
			console.log("Player A Wins");
			spliceCards();
			playerA = playerA.concat(cardA, cardB);
			countCards();
			displayCards();

			// win status
			$("#win-status-b").text("");
			$("#win-status-a").text("You win this round!");

			logCards();
		} else if (playerA[0][0] === playerB[0][0]) {
			function playWar() {
				console.log("Play War");
				if (playerA[4][0] > playerB[4][0]) { //need to fix this bug (not always 4 cards in war)
					console.log("Player A Wins War");
					spliceCardsWar();
					playerA = playerA.concat(warCardsA, warCardsB);
					countCards();
					displayWarCards();

					// highlight last "War" card
					$("#cards-a img:last-of-type").attr("class", "war-card");

					// win status
					$("#win-status-b").text("");
					$("#win-status-a").text("You win war!");

					logCards();
				} else if (playerA[4][0] === playerB[4][0]) {
					console.log("It's a stalemate! Redraw!");
					spliceCardsWar();
					playerA = playerA.concat(warCardsA);
					playerB = playerB.concat(warCardsB);
					countCards();

					// win status
					$("#win-status-a").text("You tie! Redraw!");
					$("#win-status-b").text("You tie! Redraw!");

					playWar();
				} else {
					console.log("Player B Wins War");
					spliceCardsWar();
					playerB = playerB.concat(warCardsB, warCardsA);
					countCards();
					displayWarCards();

					// highlight last "War" card
					$("#cards-b img:last-of-type").attr("class", "war-card");

					// win status
					$("#win-status-a").text("");
					$("#win-status-b").text("You win war!");

					logCards();
				}
			};
			playWar();
		} else {
			console.log("Player B Wins");
			spliceCards();
			playerB = playerB.concat(cardB, cardA);
			countCards();
			displayCards();

			// win status
			$("#win-status-a").text("");
			$("#win-status-b").text("You win this round!");

			logCards();
		}
	} else {
		console.log("You won the war!");
		if (countA === 0) {
			$("#win-status-a").text("You lost!");
			$("#win-status-b").text("You Won the Game!");
		} else if (countB === 0) {
			$("#win-status-b").text("You lost!");
			$("#win-status-a").text("You Won the Game!");
		}
	}
});

$(document).ready(function() {
	createDeck();
	dealCards();
});
