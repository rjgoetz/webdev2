// add-article-text.js

/*
  Script that places text inside article on web page.
*/

//global variables
var button = false;

// function to place text inside article
function addArticleText(elementID, articleText) {
  document.getElementById(elementID).innerHTML = articleText;
};

// button event adds text to article
document.getElementById("btn0").onclick = function () {
  if (button === false) {
    addArticleText("main", "<article><h2>All About Radishes</h2><p>The radish (Raphanus sativus) is an edible root vegetable of the Brassicaceae family that was domesticated in Europe in pre-Roman times. Radishes are grown and consumed throughout the world, being mostly eaten raw as a crunchy salad vegetable. They have numerous varieties, varying in size, flavor, color and the length of time they take to mature. Radishes of spicy varieties owe their sharp flavor to the various chemical compounds produced by the plants, including glucosinolate, myrosinase, and isothiocyanate. They are sometimes grown as companion plants and suffer from few pests and diseases. They germinate quickly and grow rapidly, smaller varieties being ready for consumption within a month, while larger daikon varieties taking several months. Some radishes are grown for their seeds: daikon, for instance, may be grown for oil production. Others are used for sprouting and both roots and leaves are sometimes served cooked.</p></article>");
    button = true;
  } else {
    addArticleText("main", "<article><h2>Article Title</h2></article>");
    button = false;
  }; 
};
