<?php

$servername = "localhost";
$database = "u655964681_test";
$username = "u655964681_bedo";
$password = "Bandar11";

// Create connection

$conn = mysqli_connect($servername, $username, $password, $database);

// Check connection

if (isset($_POST["name"]))
{
      $name = mysql_real_escape_string($connect, $_POST["name"]);
      $email = mysql_real_escape_string($connect, $_POST["email"]);
      $phoneNo = mysql_real_escape_string($connect, $_POST["phoneNo"]);
      $subject = mysql_real_escape_string($connect, $_POST["subject"]);
      $message = mysql_real_escape_string($connect, $_POST["message"]);
      $sql = "INSERT INTO ContactForm(name,email,phoneNo,subject,message) VALUES ('".$name."', '".$email."', '".$phoneNo."', '".$subject."', '".$message."');"
      if (mysql_query($connect, $sql))
      {
            echo "message Saved";
      }
}


?>

