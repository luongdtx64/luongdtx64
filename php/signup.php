<?php
    require 'C:\xampp\htdocs\webbanhang\php\dbConnect.php' ;
    $user = $_POST['username'];
    $pass = $_POST['password'];
    $phone  =$_POST['phone'];
    $email = $_POST['email'];
    $sql = "SELECT * FROM account WHERE taikhoan = '$user'";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        echo 'error';
    } else {
        $sql2 = "INSERT INTO account (taikhoan, matkhau,sdt,email) VALUES ('$user', '$pass','$phone','$email')";
        $result2 = mysqli_query($conn, $sql2);
        if ($result2) {
            echo "success";
        } else {
            echo "fail";
        }
    }
?>