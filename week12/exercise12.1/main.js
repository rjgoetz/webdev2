// main.js

var
	$images = $("#hero div"),
	i = 1
;

function imageRotator() {
	// set class of next gallery image to "previous"
	$images.eq(i).addClass("previous");

	// fade "current" image to zero opacity
	$images.eq(i-1).delay(2000).animate({
		opacity: 0
	}, 1000, function() {

		// add / remove classes after animation
		$images.eq(i).addClass("current").removeClass("previous");
		$images.eq(i-1).removeClass("current");
		$images.eq(i-1).css("opacity", "initial");

		// increment image counter
		i++;

		// logic for resetting imageRotator()
		if(i < $images.length) {
			imageRotator();
		} else if (i === $images.length) {

			// reset gallery to first image
			$images.eq(i-1).removeClass("current");
			$images.eq(0).css("opacity", 0).addClass("current");
			
			// fade first image to 100% opacity
			$images.eq(0).delay(2000).animate({
				opacity: 1
			}, 1000, function() {
				i = 1;
				imageRotator();
			})
		}
	})
}

$("document").ready(function() {
	imageRotator();
});