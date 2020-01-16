var locationId = "1_583"; //outback steakhouse in burbank==>pulled from api but in a different object
var cors = "https://cors-anywhere.herokuapp.com/";
var adminKey = "214cb49eb0bb4b0ebbca5ff55c9b4eb3";
var id = "1_583_150_7573"
var rootImageUrl = "https://bbimenus.blob.core.windows.net/"
$(function() {
    var params = {
        // Request parameters
        locationcode: locationId
    };
    $.ajax({
        url: `${cors}api-qa.bloominbrands.com/menuservices/connectedcustomer/menuelements/${id}?` + $.param(params),
        beforeSend: function(xhrObj){
            // Request headers
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key",adminKey);
        },
        type: "GET",
        // Request body
        data: "{body}",
    })
    .done(function(data) {
        alert("success");
        console.log(data)
// ============Images below================
        console.log(rootImageUrl + data.children[0].children[0].image.substring(3))
        console.log(rootImageUrl + data.children[0].children[1].image.substring(3))
        console.log(rootImageUrl + data.children[0].children[2].image.substring(3))
        console.log(rootImageUrl + data.children[0].children[3].image.substring(3))
        console.log(rootImageUrl + data.children[0].children[4].image.substring(3))
        console.log(rootImageUrl + data.children[0].children[5].image.substring(3))
        console.log(rootImageUrl + data.children[0].children[6].image.substring(3))
        console.log(rootImageUrl + data.children[0].children[7].image.substring(3))
        console.log(rootImageUrl + data.children[0].children[8].image.substring(3))
        console.log(rootImageUrl + data.children[0].children[9].image.substring(3))
// ============Prices below================
        console.log(data.children[0].children[0].prices[0].price)
        console.log(data.children[0].children[1].prices[0].price)
        console.log(data.children[0].children[2].prices[0].price)
        console.log(data.children[0].children[3].prices[0].price)
        console.log(data.children[0].children[4].prices[0].price)
        console.log(data.children[0].children[5].prices[0].price)
        console.log(data.children[0].children[6].prices[0].price)
        console.log(data.children[0].children[7].prices[0].price)
        console.log(data.children[0].children[8].prices[0].price)
        console.log(data.children[0].children[9].prices[0].price)
    })
    .fail(function() {
        alert("error");
    });
});