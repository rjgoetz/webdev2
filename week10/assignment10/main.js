// main.js

//add dropdown menu for products and services

function dropdownNav() {

	var productsLinks = ["Lorem", "Ipsum", "Radish"];
	var servicesLinks = ["Dolor", "Volutpat", "Harvesting"];

	//create drop-down container
	var dropDown = $("<ul></ul>").prop("class", "drop");
	$(".drop-down a").append(dropDown);

	//add products links
	for (var i = 0; i<productsLinks.length; i++) {
		$(".drop-down:eq(0) a ul").append("<li><a href='#'>" + productsLinks[i] + "</li></a>");
	}

	//add services links
	for (var i = 0; i<servicesLinks.length; i++) {
		$(".drop-down:eq(1) a ul").append("<li><a href='#'>" + servicesLinks[i] + "</li></a>");
	}

	//hover unhides products menu
	$(".drop-down").hover(function() {
		$(this).find(".drop").show();
	}, function() {
		$(this).find(".drop").hide();
	});
}

$("document").ready(function() {
	// add background color to a elements
	$("a").click(function() {
		$(this).addClass("link-background");
	})
	// toggle 2nd paragraph from page
	$(".post:eq(1) .title").click(function() {
		$(".post:eq(1)").find(".entry").toggle();
	})
	dropdownNav();
});
