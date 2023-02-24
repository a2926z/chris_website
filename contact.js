$(document).ready(function () {

  // Open popup
  $("#open-popup").click(function () {
    $("#popup").fadeIn(300);
  });

  $("#popup, .close").click(function (event) {
    if ($(event.target).is("#popup, .close")) { // Check if click is outside of form or on close button
      event.preventDefault();
      $("#popup").fadeOut(300);
    }
  });

  // Form validation
  $("#contact-form").submit(function (event) {
    var email = document.getElementById("email").value;
    if (!/^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})$/.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  });

});