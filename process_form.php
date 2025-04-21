<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Capture the form data and sanitize it
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);
    
    // Simple validation to check if fields are not empty
    if (empty($name) || empty($email) || empty($phone) || empty($message)) {
        echo "All fields are required!";
    } else {
        // Process the form data (you could store it in a database, send an email, etc.)
        echo "<h3>Form Submitted Successfully!</h3>";
        echo "<p>Name: $name</p>";
        echo "<p>Email: $email</p>";
        echo "<p>Phone: $phone</p>";
        echo "<p>Message: $message</p>";
        
        // You could redirect the user to a thank-you page or another action here
        // header("Location: thank_you.html");
        // exit();
    }
} else {
    echo "Invalid request.";
}
?>
