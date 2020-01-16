<?php

if (isset($_POST['submit'])){
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "markoilicsustaric@gmail.com";
    $headers = "From: My ".$mailFrom;
  
        mail($mailTo, $subject, $message);
       header("Location: index.php?mailsend");
}

?>