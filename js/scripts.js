$(document).ready(function() {
  $("form#aboutYou").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();


    if (age > 40 && gender === 'male') {
      var date = "Catherine Zeta-Jones"
    }

      else if (age <= 40 && gender === 'male') {
        var date = "Jennifer Lawrence"
      }

      else if (age > 40 && gender === 'female') {
        var date = "George Clooney"
      }

      else if (age <= 40 && gender === 'female') {
        var date = "Channing Tatum"
      }

      else {
      alert('Please enter your age.');
    }
      $("#date").empty().append(date);
      $("#match").show();


    event.preventDefault();
  });
});
