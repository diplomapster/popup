$(document).ready(function()  {
  $(".clickable1").click(function(){
    $("#hidden-ermine").slideToggle();
    $("#showing-ermine").slideToggle();
  });

  $(".clickable2").click(function(){
    $("#hidden-eagle").fadeToggle();
    $("#showing-eagle").fadeToggle();
  });
  $("#green").click(function(){
    $("body").toggleClass("green-background");
  });
  $("#yellow").click(function(){
    $("body").toggleClass("yellow-background");
  });
  $("#red").click(function(){
    $("body").toggleClass("red-background");
  });
});
