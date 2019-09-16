// name variables
var searchButtons = ["puppy", "kitten", "baby bunny"]
var search = $("#addgif").val();

// show buttons
function displayButtons() {
    $("#buttonsDiv").empty();
    for (var i = 0; i < searchButtons.length; i++) {
        var b = $("<button>");
        b.addClass("gif");
        b.attr("gifTopic", searchButtons[i]);
        b.text(searchButtons[i]);
        $("#buttonsDiv").append(b);
        console.log(searchButtons[i]);
    }
}
var queryURL = `https://api.giphy.com/v1/gifs/search/&q=${"#search"}&limit=1&api_key=ZsEgA2iFC8Yc2Ukf5mf2oa1ekLmkSvyJ`;
$("#addGif").on("click", function (event) {
    $.ajax({
        url: queryURL,
        methos: "GET"
    }).then(function (response){
    console.log(response)
    
    
    })

})
