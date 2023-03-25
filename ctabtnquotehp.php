<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = test_input($_POST["name"]);
    $phone = test_input($_POST["phone"]);
    $email = test_input($_POST["email"]);
    $address = test_input($_POST["address"]);
    $service = test_input($_POST["service"]);
    $frequency = test_input($_POST["frequency"]);
    $notes = test_input($_POST["notes"]);

    $to = "lyonsservicegroup@gmail.com";
    $subject = "New quote request from website";
    $body = "Name: $name\nPhone: $phone\nEmail: $email\nAddress: $address\nService: $service\nFrequency: $frequency\nNotes:\n$notes";
    $headers = "From: $email\r\nReply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        header("Location: thank-you.html"); // Redirect to the custom Thank You page
        exit;
    } else {
        header("Location: error.html"); // Redirect to the custom Error page
        exit;
    }
} else {
    header("Location: error.html"); // Redirect to the custom Error page
    exit;
}

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>
