<?php
    require '/xampp/htdocs/webbanhang/php/dbConnect.php';
    session_start();
    $taikhoan = $_SESSION["username"];
    $sql = "SELECT * FROM sanpham INNER JOIN giohang on sanpham.idsanpham = giohang.idsanpham INNER JOIN account on account.taikhoan = giohang.taikhoan WHERE giohang.taikhoan = '$taikhoan' ";
    $result = mysqli_query($conn, $sql);
    if (!$result) {
        // Có lỗi xảy ra khi thực hiện câu lệnh truy vấn
        die("Lỗi truy vấn: " . mysqli_error($conn));
    }
    $data = mysqli_fetch_all($result, MYSQLI_ASSOC);
    echo json_encode($data);
?>