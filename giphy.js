// name variables
var topicButtons = ["puppy", "kitten", "baby bunny"];
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=ZsEgA2iFC8Yc2Ukf5mf2oa1ekLmkSvyJ&limit=10";
var search;
var addTopic;

// show buttons
function displayButtons() {
    $("#buttonsDiv").empty();
    for (var i = 0; i < topicButtons.length; i++) {
        var b = $("<button>");
        b.addClass("gif");
        b.attr("gifTopic", topicButtons[i]);
        b.text(topicButtons[i]);
        $("#buttonsDiv").append(b);
    }
}

// add to buttons
$("#addGif").on("click", function (event) {
    event.preventDefault()
        addTopic = $("#gifsInput").val().trim();
        topicButtons.push(addTopic)
        displayButtons()


    })




$("#gif").on("click", function(event){
    event.preventDefault()
    search= (this).gifTopic;
    console.log(search);
    $.ajax({
        url: queryURL,
        methos: "GET"
    }).then(function (response) {

        console.log(response);



})});
displayButtons()