<?php
// Define recipient email address.
$to = "your-email@example.com";

// Define email subject.
$subject = "New quote request from website";

// Retrieve form data.
$name = $_POST["name"];
$email = $_POST["email"];
$address = $_POST["address"];
$service = $_POST["service"];
$frequency = $_POST["frequency"];
$notes = $_POST["notes"];

// Construct email message.
$message = "Name: $name\n";
$message .= "Email: $email\n";
$message .= "Address: $address\n";
$message .= "Service type: $service\n";
$message .= "Service frequency: $frequency\n";
$message .= "Additional notes: $notes\n";

// Define email headers.
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email.
if (mail($to, $subject, $message, $headers)) {
    // Email sent successfully.
    header("Location: thank-you.html"); // Redirect to thank-you page.
} else {
    // Email failed to send.
    header("Location: error.html"); // Redirect to error page.
}
?>
