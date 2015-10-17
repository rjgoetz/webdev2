//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var
    churchillSpeech = {
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
    donatePrompt,
    donateElement,
    donateText,
    articleTitles = document.getElementsByTagName('article'),
    consoleDisplay = document.getElementById('ConsoleDisplay'),
    sideNav = document.getElementById('SideNav')
;

// displays speech author and year written in sideNav
getAuthorAndYearString = function(authorSpeech) {
  if (authorSpeech.yearIsBCE === true) {
    consoleDisplay.innerHTML = '<p>This speech was written by ' + authorSpeech.author + ' in ' + authorSpeech.year + ' BCE.</p>';
  } else {
    consoleDisplay.innerHTML = '<p>This speech was written by ' + authorSpeech.author + ' in ' + authorSpeech.year + '.</p>';
  }
};

// displays whether speech was written in BCE or not in sideNav
displayBCEString = function(authorSpeech) {
  if(authorSpeech.yearIsBCE === true){
    consoleDisplay.innerHTML += '<p>This speech took place before the common era.</p>';
  }else{
    consoleDisplay.innerHTML += '<p>This speech took place during the common era.</p>';
  }
};

// displays whether speech is oldest or newest in sideNav
getOldestOrYoungestString = function(authorSpeech) {
  // find and store oldest and newest speeches on page
  var
    oldestSpeech = speechesArray[0].year,
    newestSpeech = speechesArray[0].year
  ;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldestSpeech){
      oldestSpeech = speechesArray[i].year;
    }
    if(speechesArray[i].year > newestSpeech){
      newestSpeech = speechesArray[i].year;
    }
  };

  // display result in sideNav
  if(authorSpeech.year === oldestSpeech){
    consoleDisplay.innerHTML += '<p>This is the oldest speech on the page.</p>';
  }
  if(authorSpeech.year === newestSpeech){
    consoleDisplay.innerHTML += '<p>This is the most recent speech on the page.</p>';
  }
};

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  donatePrompt = window.prompt('How much would you like to donate?');

  // Remove existing donation text
  if (donateElement) {
    sideNav.removeChild(sideNav.lastChild);
  };

  donateElement = document.createElement('h3');
  sideNav.appendChild(donateElement);

  //Create donation text
  if (donatePrompt !== null && donatePrompt < 100) {
    donateText = document.createTextNode('Thank you for your donation of $' + donatePrompt + '.');
    donateElement.appendChild(donateText);

    //Remove generous-donation className
    for (var i = 0; i < articleTitles.length; i++) {
    articleTitles[i].className = '';
    };

  } else if (donatePrompt >= 100) {
    donateText = document.createTextNode('Thank you for your very generous donation!');
    donateElement.appendChild(donateText);
    donateElement.setAttribute('style', 'color: red');

    //Set generous-donation className
    for (var i = 0; i < articleTitles.length; i++) {
    articleTitles[i].className = 'generous-donation';
    };

  } else {
    console.log("You didn't enter a donation amount.");
  };
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  getAuthorAndYearString(churchillSpeech);
  displayBCEString(churchillSpeech);
  getOldestOrYoungestString(churchillSpeech);
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  getAuthorAndYearString(ghandiSpeech);
  displayBCEString(ghandiSpeech);
  getOldestOrYoungestString(ghandiSpeech);
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  getAuthorAndYearString(demosthenesSpeech);
  displayBCEString(demosthenesSpeech);
  getOldestOrYoungestString(demosthenesSpeech);
});
