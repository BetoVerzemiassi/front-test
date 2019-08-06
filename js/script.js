$(document).ready(function (){
    var products = "";
    var url = "https://cdn.rawgit.com/LucasRuy/1d4a5d45e2ea204d712d0b324af28bab/raw/342e0e9277be486102543c7f50ef5fcf193234b6/potions.json";  

    $.ajax({
        url: url,
        dataType: "json",
        success: function (response) {
            if(response.erro) {
                $("h2").html(response.erro);
            }else {
                for(var i in response.potions) {
                    products += "<div class='products'>";                   
                    products += "<div class='list'><img class='image' src=" + response.potions[i].image + "></div>";
                    products += "<div class='list'><p class='name'>" + response.potions[i].name + "<span class='price'>$" + response.potions[i].price + "</span>"  + "</p></div>";  
                    products += "</div>";               
                }

                $('.box-products').html(products);
            }
        }
    });
});