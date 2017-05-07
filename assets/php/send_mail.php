<?php
$name = $_GET['name'];
$from = $_GET['email'];
$message = $_GET['message'];
$subject = "MESSAGE FROM GITHUB WEB";
$message = "Name: ".$name.", Message:".$message.", ";
$email = "jacknyilinkindi@gmail.com";
mail($email, $subject, $message, "From:" .$from);
echo "Success";
?>