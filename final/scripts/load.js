// load.js - load images into game

function loadImages() {
	var images = new Array();

		function preload() {
			for (i = 0; i < preload.arguments.length; i++) {
				images[i] = new Image();
				images[i].src = preload.arguments[i];
			}
		}

		preload(
			// background / game images
			"images/mario-home-bg.jpg",
			"images/mario-character-bg.jpg",
			"images/mario-regular-mode-bg.jpg",
			"images/choose-your-character.jpg",
			"images/mario-war-home-logo.jpg",
			"images/mario-war-top-char.jpg",
			"images/mario-war-top-logo.jpg",
			"images/mario-war-top-reg.jpg",
			"images/mario-war-top-war.jpg",
			"images/play-button-green.jpg",
			"images/winner-bg.jpg",

			// character images
			"images/bowser-main.jpg",
			"images/bowser-pick.jpg",
			"images/bowser-sm.jpg",
			"images/luigi-main.jpg",
			"images/luigi-pick.jpg",
			"images/luigi-sm.jpg",
			"images/mario-main.jpg",
			"images/mario-pick.jpg",
			"images/mario-sm.jpg",
			"images/princess-main.jpg",
			"images/princess-pick.jpg",
			"images/princess-sm.jpg",
			"images/yoshi-main.jpg",
			"images/yoshi-pick.jpg",
			"images/yoshi-sm.jpg",

			// card images
			"cards/2_1.png",
			"cards/2_2.png",
			"cards/2_3.png",
			"cards/2_4.png",
			"cards/3_1.png",
			"cards/3_2.png",
			"cards/3_3.png",
			"cards/3_4.png",
			"cards/4_1.png",
			"cards/4_2.png",
			"cards/4_3.png",
			"cards/4_4.png",
			"cards/5_1.png",
			"cards/5_2.png",
			"cards/5_3.png",
			"cards/5_4.png",
			"cards/6_1.png",
			"cards/6_2.png",
			"cards/6_3.png",
			"cards/6_4.png",
			"cards/7_1.png",
			"cards/7_2.png",
			"cards/7_3.png",
			"cards/7_4.png",
			"cards/8_1.png",
			"cards/8_2.png",
			"cards/8_3.png",
			"cards/8_4.png",
			"cards/9_1.png",
			"cards/9_2.png",
			"cards/9_3.png",
			"cards/9_4.png",
			"cards/10_1.png",
			"cards/10_2.png",
			"cards/10_3.png",
			"cards/10_4.png",
			"cards/11_1.png",
			"cards/11_2.png",
			"cards/11_3.png",
			"cards/11_4.png",
			"cards/12_1.png",
			"cards/12_2.png",
			"cards/12_3.png",
			"cards/12_4.png",
			"cards/13_1.png",
			"cards/13_2.png",
			"cards/13_3.png",
			"cards/13_4.png",
			"cards/14_1.png",
			"cards/14_2.png",
			"cards/14_3.png",
			"cards/14_4.png",
			"cards/card-back.png"
		);
};

$(document).ready(function() {
	loadImages();
});
