<?php
    require '/xampp/htdocs/webbanhang/php/dbConnect.php';
    session_start();
    $taikhoan = $_SESSION["username"];
    $sql = "SELECT * FROM account WHERE taikhoan = '$taikhoan'";
    $result = mysqli_query($conn, $sql);
    $data = mysqli_fetch_all($result, MYSQLI_ASSOC);
    echo json_encode($data);
?>