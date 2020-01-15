$(document).ready(function(){
  $("h1").click(function(){
    $("h1").css("color","green");
    $("h1").text("welcome")
  });

  $("button").click(function(){
    $("h1").css("color","purple");
  })
});
