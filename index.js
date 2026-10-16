$("h1").css("color","white");

$(document).keypress( function(event){
    $("h1").text(event.key);
});

$("button").click(function(){
    $("h1").css("color","purple");
});

$(document).on("click", function(){
    $("h1").css("color","black");
    $("h1").animate({opacity : 0.5});
});

$("h1").after("<button>Added</button>");

$(document).on("click", function(){
    $("h2").slideToggle();
});
