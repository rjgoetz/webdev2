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
    name = window.prompt("What is your name?")
;

// validate username field
if (isNaN(name) && name.length > 0 && name !== "null") {
  console.log("Hi " + name + "!");
} else {
  console.log("Ok, I'll just call you User.");
  name = "User";
};

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  var favAuthor = window.prompt("Who is your favorite author? Churchill, Ghandi, or Demosthenes?");

  if (isNaN(favAuthor) && favAuthor !== "null") {// validate favAuthor input
    switch(favAuthor.toUpperCase()) {// transform favAuthor input to uppercase for switch cases
      case "CHURCHILL":
      console.log(speechesArray[0].author + " was " + speechesArray[0].authorAge + " during this speech.");
      break;

      case "GHANDI":
      console.log(speechesArray[1].author + " was " + speechesArray[1].authorAge + " during this speech.");
      break;

      case "DEMOSTHENES":
      console.log(speechesArray[2].author + " was " + speechesArray[2].authorAge + " during this speech.");
      break;

      default:
      console.log("That isn't a choice. Choose again.");
      };
    } else {
    console.log("That isn't a choice. Choose again.")
  };
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  console.log("This speech was written by " + speechesArray[0].author + " in " + speechesArray[0].year + ".");

  if (speechesArray[0].yearIsBCE) {
    console.log("This speech took place before the common era.");
  } else {
    console.log("This speech took place during the common era.");
  }

  if (speechesArray[0].yearIsBCE) {// if yearIsBCE is true, multiply year by -1
    if ((speechesArray[0].year * -1) > speechesArray[1].year && (speechesArray[0].year * -1) > speechesArray[2].year) {
      console.log("This is the most recent speech on the page.");
    } else if ((speechesArray[0].year * -1) < speechesArray[1].year && (speechesArray[0].year * -1) < speechesArray[2].year) {
      console.log("This is the oldest speech on the page.");
    } 
  } else if (speechesArray[0].year > speechesArray[1].year && speechesArray[0].year > speechesArray[2].year) {
    console.log("This is the most recent speech on the page.");
  } else if (speechesArray[0].year < speechesArray[1].year && speechesArray[0].year < speechesArray[2].year) {
      console.log("This is the oldest speech on the page.");
  };
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  console.log("This speech was written by " + speechesArray[1].author + " in " + speechesArray[1].year + ".");
  if (speechesArray[1].yearIsBCE) {
    console.log("This speech took place before the common era.");
  } else {
    console.log("This speech took place during the common era.");
  }

  if (speechesArray[1].yearIsBCE) {// if yearIsBCE is true, multiply year by -1
    if ((speechesArray[1].year * -1) > speechesArray[0].year && (speechesArray[1].year * -1) > speechesArray[2].year) {
      console.log("This is the most recent speech on the page.");
    } else if ((speechesArray[1].year * -1) < speechesArray[0].year && (speechesArray[1].year * -1) < speechesArray[2].year) {
      console.log("This is the oldest speech on the page.");
    } 
  } else if (speechesArray[1].year > speechesArray[0].year && speechesArray[1].year > speechesArray[2].year) {
    console.log("This is the most recent speech on the page.");
  } else if (speechesArray[1].year < speechesArray[0].year && speechesArray[1].year < speechesArray[2].year) {
      console.log("This is the oldest speech on the page.");
  };
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  console.log("This speech was written by " + speechesArray[2].author + " in " + speechesArray[2].year + ".");
  if (speechesArray[2].yearIsBCE) {
    console.log("This speech took place before the common era.");
  } else {
    console.log("This speech took place during the common era.");
  }

  if (speechesArray[2].yearIsBCE) {// if yearIsBCE is true, multiply year by -1
    if ((speechesArray[2].year * -1) > speechesArray[1].year && (speechesArray[2].year * -1) > speechesArray[0].year) {
      console.log("This is the most recent speech on the page.");
    } else if ((speechesArray[2].year * -1) < speechesArray[1].year && (speechesArray[2].year * -1) < speechesArray[0].year) {
      console.log("This is the oldest speech on the page.");
    } 
  } else if (speechesArray[2].year > speechesArray[1].year && speechesArray[2].year > speechesArray[0].year) {
    console.log("This is the most recent speech on the page.");
  } else if (speechesArray[2].year < speechesArray[1].year && speechesArray[2].year < speechesArray[0].year) {
      console.log("This is the oldest speech on the page.");
  };
});

