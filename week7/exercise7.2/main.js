// main.js
var boxElement = document.getElementById('box'),
	defaultBox = 'default-box',
	colorBox = ['orange', 'blue', 'yellow'],
	currentColor = 0
;

boxElement.onclick = function() {
	if (boxElement.className === defaultBox + ' ' + colorBox[0]) {
		currentColor++;
		boxElement.className = defaultBox + ' ' + colorBox[1];		
	} else if (currentColor === 1) {
		currentColor++;
		boxElement.className = defaultBox + ' ' + colorBox[2];	
	} else if (currentColor === 2) {
		currentColor = 0;
		boxElement.className = defaultBox + ' ' + colorBox[0];
	}
};