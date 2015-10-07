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
    donatePrompt,
    donateElement,
    donateText,
    articleTitles = document.getElementsByTagName('article'),
    consoleDisplay = document.getElementById('ConsoleDisplay'),
    sideNav = document.getElementById('SideNav');

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
  if (donatePrompt < 100) {  
    donateText = document.createTextNode('Thank you for your donation of $' + donatePrompt + '.');
    donateElement.appendChild(donateText);

    //Remove generous-donation className
    for (var i = 0; i < articleTitles.length; i++) {
    articleTitles[i].className = '';
    };

  } else {
    donateText = document.createTextNode('Thank you for your very generous donation!');
    donateElement.appendChild(donateText);
    donateElement.setAttribute('style', 'color: red');

    //Set generous-donation ClassName
    for (var i = 0; i < articleTitles.length; i++) {
    articleTitles[i].className = 'generous-donation';
    };
  };
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  consoleDisplay.innerHTML = 'This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year;

  if(speechesArray[0].yearIsBCE === true){
    consoleDisplay.innerHTML += '<br><br> This speech took place before the common era.';
  }else{
    consoleDisplay.innerHTML += '<br><br> This speech took place during the common era.';
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[0].year === oldest){
    consoleDisplay.innerHTML += '<br><br> This is the oldest speech on the page.';
  }
  if(speechesArray[0].year === newest){
    consoleDisplay.innerHTML += '<br><br> This is the most recent speech on the page.';
  }
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  consoleDisplay.innerHTML = 'This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year;

  if(speechesArray[1].yearIsBCE === true){
    consoleDisplay.innerHTML += '<br><br> This speech took place before the common era.';
  }else{
    consoleDisplay.innerHTML += '<br><br> This speech took place during the common era.';
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[1].year === oldest){
    consoleDisplay.innerHTML += '<br><br> This is the oldest speech on the page.';
  }
  if(speechesArray[1].year === newest){
    consoleDisplay.innerHTML += '<br><br> This is the most recent speech on the page.';
  }
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  consoleDisplay.innerHTML = 'This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[2].year;

  if(speechesArray[2].yearIsBCE === true){
    consoleDisplay.innerHTML += '<br><br> This speech took place before the common era.';
  }else{
    consoleDisplay.innerHTML += '<br><br> This speech took place during the common era.';
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[2].year === oldest){
    consoleDisplay.innerHTML += '<br><br> This is the oldest speech on the page.';
  }
  if(speechesArray[2].year === newest){
    consoleDisplay.innerHTML += '<br><br> This is the most recent speech on the page.';
  }
});