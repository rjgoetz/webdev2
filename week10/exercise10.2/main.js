// main.js

function createSpecialsLinks() {
	$("#specials h2").clone().insertAfter("#specials h1").contents().unwrap().wrapAll("<ul></ul>").wrap("<li></li>").wrap("<a></a>");
}

function addAnchorTags() {
	var i = 1;
	$("#specials a").each(function() {
		$(this).prop("href", "#" + i);
		i++;
	})
	i = 1;
	$("#specials h2").each(function() {
		$(this).prop("id", i);
		i++;
	})
}

$("document").ready(function() {
	$("#restaurants li[data-type='veg']").append(" (v)");
	createSpecialsLinks();
	addAnchorTags();
});
