$(document).ready(function() {

    // Open popup
    $("#open-popup").click(function() {
      $("#popup").fadeIn(300);
    });
  
    // Close popup
    $("#close-popup").click(function() {
      $("#popup").fadeOut(300);
    });
  
    // Submit form
    $("#submit").click(function(e) {
      e.preventDefault();
  
      // Get form data
      var name = $("#name").val();
      var email = $("#email").val();
      var message = $("#message").val();
  
      // Validate form data
      if (name === '' || email === '' || message === '') {
        alert("Please fill out all fields.");
        return;
      }
  
      // Create form data object
      var formData = {
        name: name,
        email: email,
        message: message
      };
  
      // Send form data to server
      $.ajax({
        url: "send_email.php",
        type: "POST",
        data: formData,
        success: function(response) {
          alert("Your message was sent successfully!");
          $("#name").val('');
          $("#email").val('');
          $("#message").val('');
          $("#popup").fadeOut(300);
        },
        error: function(xhr, status, error) {
          alert("There was an error sending your message. Please try again later.");
          console.log(error);
        }
      });
  
    });
  
  });