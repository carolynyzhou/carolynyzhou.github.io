<?php 
$errors = '';
$myemail = 'secondimpressionart@gmail.com';//<-----Put Your email address here.
if(empty($_POST['name'])  ||
   empty($_POST['email']) ||
   empty($_POST['topic']) ||
   empty($_POST['message']))
{
    $errors .= "\n Error: Please fill all fields";
}

$name = $_POST['name'];
$email = $_POST['email'];
$topic = $_POST['topic'];
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
$email_body = "You have received a new message. ".
"\n Name: $name \n ".
"Email: $email\n Topic: $topic\n Message: \n $message";
$header = "Reply-To: $email";
mail($to,$email_subject,$email_body,$header);
echo "Thank you! I will confirm your order soon.";
}

// $formcontent="From: $name \n Address: $address \n Message: $message";
// $recipient = "secondimpressionart@gmail.com";
// $subject = "Contact Form";
// $mailheader = "From: $email \r\n";
// mail($recipient, $subject, $formcontent, $mailheader) or die("Something went wrong! Please try again.");
// echo "Thank you! If you entered your email, I will confirm your order soon.";
?>