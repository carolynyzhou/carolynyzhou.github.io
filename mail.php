<?php 
$errors = '';
$myemail = 'carolyn.y.zhou@gmail.com';//<-----Put Your email address here.
if(empty($_POST['name'])  ||
   empty($_POST['email']) ||
   empty($_POST['message']))
{
    $errors .= "\n Error: Please fill all fields";
}

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",
$email))
{
    $errors .= "\n Error: Invalid email address";
}

if( empty($errors))
{
$to = $myemail;
$email_subject = "Contact form submission: $name";
$email_body = "\n Name: $name\n Email: $email\n Message: \n $message";
$header = "Reply-To: $email \n";
mail($to,$email_subject,$email_body,$header);
echo "Thank you! I will be in touch soon.";
}

// $name = $_POST['name'];
// $email = $_POST['email'];
// $message = $_POST['message'];
// $formcontent="From: $name \n Message: $message";
// $recipient = "carolyn.y.zhou@gmail.com";
// $subject = "Contact Form";
// $mailheader = "From: $email \r\n";
// mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
// echo "Thank You!";
?>