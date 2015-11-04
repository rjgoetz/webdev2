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

// change text color of first LI in #sidebar_content_1
function changeListItemColor() {
	$("#sidebar_content_1 li:first-of-type a").css("color", "red");
};

// move position of even "numbered" LI to the right by 5px in #sidebar_content_2
function moveListItemPosition() {
	$("#sidebar_content_2 li:odd").css("margin-left", "5px");
};

// click first post title and replace #content div with "Random Box Position" interaction
function replaceContentFunStuff() {
	var funBox = $("<div class='fun-box'></div>");
	var displayCoord = $("<div class='display-coord'></div>");

	// click first H2 to add "Random Box Position" elements and initial styling
	$("#content h2:first-of-type").click(function(){
		$("#content").html("<h1>Random Box Position</h1><h2>Click the box!</h2>").append(funBox).append(displayCoord);
		$("#content").css({
			"position": "relative",
			"height" : "325px"
		})
	});

	// click to set random position of box
	$(funBox).click(function() {
		// set random x and y position numbers
		var positionY = Math.random() * 125;
		var positionX = Math.random() * 325;
		$(this).css("top", positionY + "px");
		$(this).css("left", positionX + "px");

		// set random funBox color
		var funBoxColor = Math.random() * 10;
		if (funBoxColor < 3.3333) {
			$(this).css("background", "#FF0066");
		} else if (funBoxColor < 6.6666) {
			$(this).css("background", "#699C4D");
		} else {
			$(this).css("background", "#FFCC66");
		}

		// display coordinates information
		var coord = funBox.offset();		
		$(".display-coord").text("Top: " + coord.top + "px" + ", Left: " + coord.left + "px");
	});
};

// click second sidebar H2 and toggle visibility below it
function toggleSecondSidebar() {
	$("#sidebar_content_2 h2").css("cursor", "pointer").click(function() {
		$("#sidebar_content_2 ul").toggle();
	})
};

$("document").ready(function () {
	addIconImage();
	changeHeaderBackground();
	changeListItemColor();
	moveListItemPosition();
	replaceContentFunStuff();
	toggleSecondSidebar();
});