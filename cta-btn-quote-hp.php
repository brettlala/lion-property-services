 <?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

  $name = $_POST["name"];
  $phone = $_POST["phone"];
  $email = $_POST["email"];
  $address = $_POST["address"];
  $service = $_POST["service"];
  $frequency = $_POST["frequency"];
  $notes = $_POST["notes"];

  $to = "lyonsservicegroup@gmail.com";
  $subject = "New contact form submission";
  $body = "Name: " . $name . "\n\n" . "Phone Number: " . $phone . "\n\n" . "Email: " . $email . "\n\n" . "Address: " . $address . "\n\n" . "Service: " . $service . "\n\n" . "Frequency: " . $frequency . "\n\n" . "Notes: " . $notes;

  $headers = "From: " . $email;

  if (mail($to, $subject, $body, $headers)) {
    header("Location: thank-you.html");
    exit;
  } else {
    echo ("Location: error.html");
    exit;
  }
}
?>

 