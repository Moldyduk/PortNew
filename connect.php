<?php
$fullName = $_post['Full-Name'];
$phoneNumber = $_post['Phone-Number'];
$eMail = $_post['E-mail'];
$message = $_post['Your Message'];
//DB connection
$conn = new mysqli('localhost','root', '','test');
if($conn->connect_error){
    die('Connection Failed:'.$conn->connect_error);

}else{

    $stmt = $conn->prepare("insert your info(fullName, phoneNumber, eMail, message) values(?, ?, ?, ?)");
    $stmt->bind_param("siss",fullName, phoneNumber, eMail,message);
    $stmt->execute();
    echo "Send Successfully";
    $stmt->close();
    $conn->close();
}
?>