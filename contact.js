$(document).ready(function() {

    // Open popup
    $("#open-popup").click(function() {
      $("#popup").fadeIn(300);
    });
  
    $("#popup, .close").click(function(event) {
      if ($(event.target).is("#popup, .close")) { // Check if click is outside of form or on close button
        event.preventDefault();
        $("#popup").fadeOut(300);
      }
    });

  });