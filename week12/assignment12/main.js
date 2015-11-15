// main.js

// build recipe navigation
function recipeNav() {
	// select recipe titles
	var $h2 = $("h2");

	// loop through h2 array and append text and id# to navigation
	for (var i = 0; i < $h2.length; i++) {
		$("nav ul").append("<li><a href='#'>" + $h2.eq(i).text() + "</a></li");
	}
};

// change recipe on navigation click
function fadeInRecipe() {
	$("nav a").click(function() {
		// store click index
		var linkIndex = $("nav a").index(this);
		// store .previous index
		var previousClassIndex = $("div .previous").index();
		console.log(previousClassIndex);

		// add .previous class to "currently viewed recipe"
		$("article:eq("+previousClassIndex+")").addClass("previous");

		// add .next class to clicked recipe
		$("article:eq("+linkIndex+")").addClass("next");

		// fade out currently viewed recipe
	  $("article:eq("+previousClassIndex+")").animate({
			opacity: 0,
		}, 1000, function() {
			// reset classes
			$("article:eq("+linkIndex+")").removeClass("next").addClass("previous");
			$("article:eq("+previousClassIndex+")").removeClass("previous");

			// reset opacity for all recipes to 1
			$("article").css("opacity", "1");
		});
	})
};

// collapse ingredients / directions
function collapseContent() {
	// add arrow initial state
	$("article h3").prepend("<span class='down-arrow'></span>");

	// click event toggles ingredients content
	$("article div:first-of-type h3").click(function() {
		// swap arrow styles
		$(this).find("span").toggleClass("right-arrow");
		// toggle content below
		$(".ingredients").slideToggle();
	});

	// click event toggles directions content
	$("article div:nth-of-type(2) h3").click(function() {
		// swap arrow styles
		$(this).find("span").toggleClass("right-arrow");
		// toggle content below
		$(".directions").slideToggle();
	});
};

// move title on page load
function moveTitle() {
	$("h1").css({"left": "-235px", "opacity": "0", "color": "#aadfef"}).delay(200).animate({
		left: 0,
		opacity: 1,
	}, 2000, function() {
		$("h1").css("color", "#d95a53");
	})
};

$("document").ready(function() {
	recipeNav();
	collapseContent();
	fadeInRecipe();
	moveTitle();
});
