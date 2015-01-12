$(document).ready(function () {
  $.ajax({
      url: "http://daretodiscover.net/wines",
      type: "GET",
      success: function (userData) {
          var source = $("#users-template").html();
          var template = Handlebars.compile(source);

          var html = template ({
              allUsers: userData
          });
          $("#container").html(html);
      },
      error: function () {
          alert ("Something went wrong");
      }
  });

});