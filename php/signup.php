<?php
    require 'C:\xampp\htdocs\webbanhang\php\dbConnect.php' ;
    $user = $_POST['username'];
    $pass = $_POST['password'];
    $phone  =$_POST['phone']
    $email = $_POST['email']
    // Kiểm tra xem tên đăng nhập đã tồn tại hay chưa
    $sql = "SELECT * FROM account WHERE taikhoan = '$user'";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        echo 'error';
    } else {
        // Thêm tài khoản mới vào cơ sở dữ liệu
        $sql = "INSERT INTO account (taikhoan, matkhau,sdt,email) VALUES ('$user','$pass','$phone','$email')";
        $stmt = mysqli_prepare($conn, $sql);
        mysqli_stmt_bind_param($stmt, "ss", $username, $password);
        mysqli_stmt_execute($stmt);
        echo 'success';
    }
?>