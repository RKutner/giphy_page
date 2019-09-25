// name variables
var topicButtons = ["puppy", "kitten", "baby_bunny"];

var addTopic;

// show buttons
function displayButtons() {
    $("#buttonsDiv").empty();
    for (var i = 0; i < topicButtons.length; i++) {
        var b = $("<button>");
        b.addClass("gif");
        b.attr('gifTopic', topicButtons[i]);
        b.text(topicButtons[i]);
        $("#buttonsDiv").append(b);
    }
}
displayButtons()
// add to buttons
$("#addGif").on("click", function (event) {
    event.preventDefault()
        addTopic = $("#gifsInput").val().trim();
        if(!(topicButtons.includes(addTopic))){
            topicButtons.push(addTopic)
        }
        displayButtons()
    })
    
    
    $(".gif").on("click", function(event){
        event.preventDefault()
        var search= $(this).attr('gifTopic');
        var queryURL = `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=ZsEgA2iFC8Yc2Ukf5mf2oa1ekLmkSvyJ&limit=1`;
        $.ajax({
            url: queryURL,
            methos: "GET"
        }).then(function (response) {
            
        // console.log(response.data[0].bitly_url);
        console.log(response);
        var crd= $("<div>");
        crd.addClass("card")

        var g = $("<img>");
        var gp= "";
        g.addClass("anim")
        g.attr('src', response.data[0].images.fixed_height.url)
        $('#gifsView').prepend(crd);
        gp= (response.data[0].rating);
        crd.append("Rating: "+ gp)
        crd.append(g)





})});
