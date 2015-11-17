// main.js

// function reveals state capital and new background image
function flashCardReveal() {
	var $flashCard = $("article").find("img");
	var stateCapitals = ["Montgomery", "Juneau", "Phoenix", "Little Rock", "Sacramento", "Denver"];
	var i = [0,0,0,0,0,0];
	
	$flashCard.click(function() {
		// store image index
		var flashCardNumber = $flashCard.index(this);

		// store state capital text
		var stateText = $("article h3:eq("+flashCardNumber+")").text();

		// logic to reveal state capital or not
		if(i[flashCardNumber] === 0) {
			// set state background image
			$("article img:eq("+flashCardNumber+")")
				.attr({
					"src" : "state-photo"+flashCardNumber+".jpg",
					"style" : "opacity: 0"})
				.animate({
				opacity: 1
			}, 600);

			// add state capital paragraph
			$("article:eq("+flashCardNumber+")").append("<p class='capital'>The capital of "+stateText+" is "+stateCapitals[flashCardNumber]+"!</p>");

			i[flashCardNumber] = 1;
		} else {
			// reset state background image
			$("article img:eq("+flashCardNumber+")")
				.attr({
					"src" : stateText+".png",
					"style" : "opacity: 0"})
				.animate({
				opacity: 1
			}, 600);

			// remove state capital paragraph
			$("article:eq("+flashCardNumber+") p").remove();
			
			i[flashCardNumber] = 0;
		}
	});
};


$("document").ready(function() {

    // remove degraded version of flash card effect by removing <p>
    $("article").find("p").remove();

    // flag fade in
    $("header").find("img").prop("class", "hidden").animate({
      opacity: 1
    }, 5000);

    flashCardReveal();
    
});
