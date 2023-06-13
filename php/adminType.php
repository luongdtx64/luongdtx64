<?php 
require 'C:\xampp\htdocs\webbanhang\php\dbConnect.php' ;
session_start();
$user = $_POST['username'];
$pass = $_POST['password'];
$sql = "SELECT * FROM account WHERE taikhoan = '$user' and matkhau = '$pass' and loaitaikhoan = 'admin'";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0) {
    $_SESSION["username"] = $user;
    echo "ok";
} else {
    echo "not";
}
?>