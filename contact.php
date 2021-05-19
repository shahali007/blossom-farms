<?php
@session_start();
ob_start();
error_reporting(E_ERROR);
ini_set("display_errors", "On");
ini_set("allow_url_fopen", "On");

if(isset($_POST[Submit])) {
	
$services=addslashes($_POST[services]);	

	if($services=="Farm Produce") { $service="Farm Produce"; }
	if($services=="Animal Husbandry") { $service="Animal Husbandry"; }

$name=addslashes($_POST[name]);	
$subject=addslashes($_POST[subject]);
$message=addslashes($_POST[message]);	

$to="admin@buildingewealth.net";
$subject="Blossom Farms Contact Form";	
$message="Please see to the details below.<br><br>
Services : $service<br>
Name : $name<br>
Email : $_POST[email]<br>
Phone : $_POST[phone]<br>
Subject : $subject<br>
Message : $message<br><br>";


$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
$headers .= "From: $firstname $lastname <$_POST[email]>\r\n";

mail($to, $subject, $message, $headers);

header("location:contact-thanks.html"); 
}
?>
