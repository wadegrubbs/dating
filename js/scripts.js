$(document).ready(function(){
  var height = confirm("Are you at least 4 feet tall?");

  if (height) {
    $(".tall").show();
  } else {
    $(".short").show();
  }
});
