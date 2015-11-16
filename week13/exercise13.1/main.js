// main.js


function dropNav() {
	var $topLink = $(".toggle-nav > ul > li");

	// initially hide drop menu
	$topLink.find("ul").hide();

	// add down arrow
	$topLink.find("> a").after("<span class='plus'></span");
	
	// toggle dropdown nav
	$topLink.click(function() {
		$(this).find("span").toggleClass("minus");
		$(this).find("ul").toggle();
	});
};

$("document").ready(function() {
	dropNav();
});