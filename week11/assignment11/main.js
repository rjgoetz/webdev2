// main.js


// create icon object and prepend to anchor text
function addIconImage() {
	var iconImage = $("<img src='icon.png'>").css("margin-right", "10px");
	$("#menu li a").prepend(iconImage);
};

// click H1 to toggle header background color
function changeHeaderBackground() {
	var i = true;
	$("#header h1").click(function() {
		if(i) {
			$("#header").css("background", "#FFCC66");
			i = false;
		} else {
			$("#header").css("background", "#699C4D");
			i = true;
		}
	})
};


$("document").ready(function () {
	addIconImage();
	changeHeaderBackground();
});