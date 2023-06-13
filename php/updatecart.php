<?php
    require '/xampp/htdocs/webbanhang/php/dbConnect.php';
    session_start();
    $taikhoan = $_SESSION["username"];
    $idOrder = $_POST['iddonhang'];
    $soluong= $_POST['amount'];
    $tongtien = $_POST['totalPrice'];
    $sql = "UPDATE giohang SET trangthai = 'Đã xác nhận',soluong = '$soluong',tongtien = '$tongtien' WHERE taikhoan = '$taikhoan' AND iddonhang = '$idOrder'";
    if ($conn->query($sql) === TRUE) {
        $response = "Successfully" ;
      } else {
        $response = "Failed to insert";
      }
      echo json_encode($response);
?>