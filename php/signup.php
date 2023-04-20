<?php
    require 'C:\xampp\htdocs\webbanhang\php\dbConnect.php' ;
    $user = $_POST['username'];
    $pass = $_POST['password'];
    $phone  =$_POST['phone'];
    $email = $_POST['email'];
    $avt = 'https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg';
    $sql = "SELECT * FROM account WHERE taikhoan = '$user'";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        echo 'error';
    } else {
        $sql2 = "INSERT INTO account (taikhoan, matkhau,sdt,email,avt) VALUES ('$user', '$pass','$phone','$email','$avt')";
        $result2 = mysqli_query($conn, $sql2);
        if ($result2) {
            echo "success";
        } else {
            echo "fail";
        }
    }
?>