function Speech(author, speechYear, isBCE) {
  this.author = author;
  this.speechYear = speechYear;
  this.isBCE = isBCE;
};

var theirFinestHour = new Speech("Winston Churchill", 1940, false);

var quitIndia = new Speech("Ghandi", 1942, false);

var theThirdPhilippic = new Speech("Demosthenes", 342, true);

var speechArray = [theirFinestHour, quitIndia, theThirdPhilippic];

var speechYearDif = Math.abs(quitIndia.speechYear - theirFinestHour.speechYear);
console.log("Ghandi's speech and Churchill's speech are " + speechYearDif + " years apart.");

document.getElementById('BtnDonate').addEventListener('click', function(){
  console.log("There are " + speechArray.length + " speeches on the page.");
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  console.log("This speech was written by " + theirFinestHour.author + " in " + theirFinestHour.speechYear + ". It is " + theirFinestHour.isBCE + " that this year is B.C.E.");
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  console.log("This speech was written by " + quitIndia.author + " in " + quitIndia.speechYear + ". It is " + quitIndia.isBCE + " that this year is B.C.E.");
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  console.log("This speech was written by " + theThirdPhilippic.author + " in " + theThirdPhilippic.speechYear + ". It is " + theThirdPhilippic.isBCE + " that this year is B.C.E.");
});
