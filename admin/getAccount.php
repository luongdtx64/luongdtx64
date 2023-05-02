<?php
    require 'C:\xampp\htdocs\webbanhang\php\dbConnect.php' ;
    $sql = 'SELECT * FROM account';
    $result = mysqli_query($conn, $sql);
    if (!$result) {
        die("Lỗi truy vấn: " . mysqli_error($conn));
    }
    $data = mysqli_fetch_all($result, MYSQLI_ASSOC);
    echo json_encode($data);
?>