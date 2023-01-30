// $("body").keypress(function(event) {
//     $("h1").text(event.key);
// });


// $("button").click(function() {
//     $("h1").text("Button Clicked");
//     $("h1").css("color","red");
// });

// $("h1").on("click",function(){
//     $("h1").css("color","purple");
// });


$("button").click(function(){
    for(var i=0;i<1;i++){
    $("h1").slideUp("fast").slideDown("slow")
    }
    $("h1").animate({opacity:.4,margin:100});
});