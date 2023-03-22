<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "lyonsservicegroup@gmail.com";
    $subject = "New message from website contact form";
    $body = "Name: $name\nPhone: $phone\nEmail: $email\nMessage:\n$message";
    $headers = "From: $email\r\nReply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        header("Location: thank-you.html"); // Redirect to the custom Thank You page
        exit;
    } else {
        header("Location: error.html"); // Redirect to the custom Error page
        exit;
    }
}
?>
