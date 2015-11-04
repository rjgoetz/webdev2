// main.js
$("document").ready(function() {
	$(".event").hover(function() {
		$(this).toggleClass("highlight");
		$(this).find(".eventDate").toggleClass("style-event-date");
	});
});
