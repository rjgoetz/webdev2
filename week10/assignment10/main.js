// main.js

$("document").ready(function() {
	// add background color to a elements
	$("a").click(function() {
		$(this).addClass("link-background");
	})
	// remove 2nd h2 element on page
	$("h2.title:eq(1)").click(function() {
		$(this).remove();
	})
});