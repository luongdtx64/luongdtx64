<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "webbanhang";
    
    // Kết nối cơ sở dữ liệu
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    
    // Kiểm tra kết nối
    if (!$conn) {
        die("Kết nối thất bại: " . mysqli_connect_error());
    }
?>