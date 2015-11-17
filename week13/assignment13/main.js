// main.js





$("document").ready(function() {

    // remove degraded version of flash card effect by removing <p>
    $("article").find("p").remove();

    // flag fade in
    $("header").find("img").animate({
      opacity: 1
    }, 5000);
});
