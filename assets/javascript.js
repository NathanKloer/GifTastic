
var animals = [
    "dog", "cat", "rabbit", "hamster", "skunk", "goldfish", 
    "bird", "ferret", "turtle", "sugar glider", "chinchilla", 
    "hedgehog", "hermit crab", "gerbil", "pygmy goat", "chicken",
    "capybara", "teacup pig", "serval", "salamander", "frog"
];

//function to make buttons and add to page
function createButtons(arrayToUse, classToAdd, areaToAddTo) {
    $(areaToAddto).empty();
    
    for (var i = 0; i < arrayToUse.length; i++) {
        var a = $("<button>");
        a.addClass(classToAdd);
        a.attr("data-type", arrayToUse[i]);
        a.text(arrayToUse[i]);
        $(areaToAddTo).append(a);
    }
}

//$(document).on("click", ".animal-button", function toggleAnimationState() {

    //var state = $(this).attr("data-state");

    //if (state === "still") {
        //$(this).attr("src", $(this).attr("data-animate"));
       // $(this).attr("data-state", "animate");
    //}
    //else {
       // $(this).attr("src", $(this).attr("data-still"));
       // $(this).attr("data-state", "still");
  //  }
//})

$(document).ready(function onReady() {

    $("#animal-buttons").on("click", ".animal-buttons", function handleAnimalsBtnClick() {
        var $animalsElem = $("#animals");
        $animalsElem.empty();
        $(".animals-button").removeClass("active");
        $(this).addClass("active");

        var type = $(this).attr("data-type");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=uE5Lt-c26ebe1ebe84f9e988fd0ff01e0a3bbe"

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            var results = respons.data;

            for (var i = 0; i < reults.length; i++) {
                var animalDiv = $("<div class =\"animal-item\">")

                var rating = results[i].rating;

                var p = $("<p>").text("Rating: " + rating);

                var animated = results[i].images.fixed_height.url;
                var stil = results[i].images.fixed_height.url;

                var animalImage = $("<img>");
                animalImage.attr("src", still);
                animalImage.attr("data-still,", still);
                animalImage.attr("data-animate", animated);
                animalImage.attr("data-state", "still");
                animalImage.addClass("animal-image");

                animalDiv.append(p);
                animalDiv.append(animalImage);

                $animalsElem.append(animalDiv);v
            }
        });
    });

    $(document).on("click", ".animal-image", function() {

        var state = $(this).attr("data-state");
    
        if (state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
        }
        else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }
      });
    
      $("#add-animal").on("click", function(event) {
        event.preventDefault();
        var newAnimal = $("input").eq(0).val();
    
        if (newAnimal.length > 2) {
          animals.push(newAnimal);
        }
    
        populateButtons(animals, "animal-button", "#animal-buttons");
    
      });
    
      populateButtons(animals, "animal-button", "#animal-buttons");
    });