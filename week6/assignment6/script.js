//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    favoriteSpeechPrompt,
    i = 0;

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  speechIsFound = 0;
  favoriteSpeechPrompt = window.prompt('Which speech author is your favorite?');

  if (favoriteSpeechPrompt !== null) {
    for (var i = 0; i < speechesArray.length; i++) {
      if(favoriteSpeechPrompt.toUpperCase() === speechesArray[i].author.toUpperCase()) {
        console.log(speechesArray[i].author + ' was ' + speechesArray[i].authorAge + ' during this speech.');
        speechIsFound = 0;
        } else {
          speechIsFound++;
        }
      };
    } else {
      console.log('Please enter your favorite author\'s name.');
    };

  if (speechIsFound === speechesArray.length) {
    console.log('Did you spell that name correctly?');
    };
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  if (speechesArray[0].yearIsBCE === true) {
    console.log('This speech was written by ' + speechesArray[0].author + ' in ' + Math.abs(speechesArray[0].year) + ' BCE'); 
  } else {
    console.log('This speech was written by ' + speechesArray[0].author + ' in ' + Math.abs(speechesArray[0].year)); 
  };   
 
  if (speechesArray[0].year === oldestYear) {
    console.log('This is the oldest speech on the page.');
  };

  if (speechesArray[0].year === newestYear) {
    console.log('This is the most recent speech on the page.');
  };

});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  if (speechesArray[1].yearIsBCE === true) {
    console.log('This speech was written by ' + speechesArray[1].author + ' in ' + Math.abs(speechesArray[1].year) + ' BCE'); 
  } else {
    console.log('This speech was written by ' + speechesArray[1].author + ' in ' + Math.abs(speechesArray[1].year)); 
  };   

  if (speechesArray[1].year === oldestYear) {
    console.log('This is the oldest speech on the page.');
  };

  if (speechesArray[1].year === newestYear) {
    console.log('This is the most recent speech on the page.');
  };

});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  if (speechesArray[2].yearIsBCE === true) {
    console.log('This speech was written by ' + speechesArray[2].author + ' in ' + Math.abs(speechesArray[2].year) + ' BCE'); 
  } else {
    console.log('This speech was written by ' + speechesArray[2].author + ' in ' + Math.abs(speechesArray[2].year)); 
  };   

  if (speechesArray[2].year === oldestYear) {
    console.log('This is the oldest speech on the page.');
  };

  if (speechesArray[2].year === newestYear) {
    console.log('This is the most recent speech on the page.');
  };
});

//display the author of each speech
while (i < speechesArray.length) {
  console.log('This speech is written by ' + speechesArray[i].author);
  i++;
};

//convert BCE dates to negative
for (var i = 0; i < speechesArray.length; i++) {
  if (speechesArray[i].yearIsBCE === true) {
    speechesArray[i].year = speechesArray[i].year * -1;
  };
};

//find oldest and newest speech years
var oldestYear = speechesArray[0].year;
var newestYear = speechesArray[0].year;

for (var i = 0; i < speechesArray.length; i++) {
  if (speechesArray[i].year < oldestYear) {
    oldestYear = speechesArray[i].year;      
  };
};

for (var i = 0; i < speechesArray.length; i++) {
  if (speechesArray[i].year > newestYear) {
    newestYear = speechesArray[i].year;
  };
};