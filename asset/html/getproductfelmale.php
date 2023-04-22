<?php
    require '/xampp/htdocs/webbanhang/php/dbConnect.php';
    $sql = "SELECT * FROM sanpham WHERE loaisanpham = 'đồ nữ'";
    $result = mysqli_query($conn, $sql);

    $data = mysqli_fetch_all($result, MYSQLI_ASSOC);
    echo json_encode($data);
?>