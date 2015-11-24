// main.js //


// global variables
var cardDeck = [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14], // J = 11, Q = 12, K = 13, A = 14
	playerA = [],
    playerB = []
;

function dealCards(player) {
	var card;

	while (player.length < 26) {
	// pick random card between 2 and 14
	  card = Math.ceil(Math.random()*13 + 1);

	  // loop through card deck to find card;
	  for (var i = 0; i < cardDeck.length; i++) {
	      if (card === cardDeck[i]) {
	        cardDeck.splice(i, 1); // remove card from deck
	        player.push(card); // push card to player
	        break; // break loop after first card found
	      }
	  }
	}
};

// log cards to console
function logCards() {	
	console.log("Player A Cards = " + playerA + " Count: " + playerA.length);
	console.log("Player B Cards = " + playerB + " Count: " + playerB.length);
}

// initial deal
dealCards(playerA);
dealCards(playerB);
logCards();



// game play
$("#play").click(function() {
	var cardA,
		cardB,
		warCardsA,
		warCardsB
	;

	function spliceCards() {
		cardA = playerA.splice(0, 1);
		console.log("Card A = " + cardA);
		cardB = playerB.splice(0, 1);
		console.log("Card B = " + cardB);		
	}

	function spliceCardsWar() {
		warCardsA = playerA.splice(0, 5);
		console.log("War Cards A = " + warCardsA);
		warCardsB = playerB.splice(0, 5);
		console.log("War Cards B = " + warCardsB);
	}

	if (playerA.length > 0 && playerB.length > 0) {
		if (playerA[0] > playerB[0]) {
			console.log("Player A wins");
			spliceCards();
			playerA = playerA.concat(cardA, cardB);
			logCards();
		} else if (playerA[0] === playerB[0]) {		
			function playWar() {
				console.log("Play War");
				if (playerA[4] > playerB[4]) {
					console.log("Player A Wins War");
					spliceCardsWar();
					playerA = playerA.concat(warCardsA, warCardsB);
					logCards();
				} else if (playerA[4] === playerB[4]) {
					console.log("It's a stalemate! Redraw!");
					spliceCardsWar();
					playerA = playerA.concat(warCardsA);
					playerB = playerB.concat(warCardsB);
					playWar();
				} else {
					console.log("Player B Wins War");
					spliceCardsWar();
					playerB = playerB.concat(warCardsB, warCardsA);
					logCards();
				}
			};
			playWar();
		} else {
			console.log("Player B Wins");
			spliceCards();
			playerB = playerB.concat(cardB, cardA);
			logCards(); 
		}
	} else {
		console.log("You won the war!");
	}	
});
