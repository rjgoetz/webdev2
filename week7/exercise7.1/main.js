// main.js
var
  newHeading = document.createElement("h1"),
  newParagraph = document.createElement("p")
;

newHeading.appendChild(document.createTextNode("Radish"));
document.getElementById("mainArticle").appendChild(newHeading);

newParagraph.appendChild(document.createTextNode("Radishes (Raphanus sativus) are annual or biennial brassicaceous crops grown for their swollen tap-roots which can be globular, tapering or cylindrical. The root skin colour ranges from white through pink, red, purple, yellow and green to black but the flesh is usually white. Smaller types have a few leaves about 13 cm (5 in) long with round roots up to 2.5 cm (1 in) in diameter or more slender, long roots up to 7 cm (3 in) long. Both of these are normally eaten raw in salads. A longer root form, including oriental radishes, daikon or mooli and winter radishes, grows up to 60 cm (24 in) long with foliage about 60 cm (24 in) high with a spread of 45 cm (18 in). The flesh of radishes harvested timely is crisp and sweet, but becomes bitter and tough if the vegetable is left in the ground for too long. Leaves are arranged in a rosette. They have a lyrate shape, meaning they are divided pinnately with an enlarged terminal lobe and smaller lateral lobes. The white flowers are borne on a racemose inflorescence. The fruits are small pods which can be eaten when young."));
document.getElementById("mainArticle").appendChild(newParagraph);
newParagraph.align = "center";
