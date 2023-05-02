<?php
    require '/xampp/htdocs/webbanhang/php/dbConnect.php';
    $taikhoan = $_POST['user'];
    $idOrder = $_POST['idOrder'];
    $idProduct = $_POST['idProduct'];
    $soluong= $_POST['amount'];
    $sql = "INSERT INTO giohang(taikhoan,iddonhang,idsanpham,soluong) VALUES('$taikhoan','$idOrder','$idProduct','$soluong')";
    if ($conn->query($sql) === TRUE) {
        $response = "Successfully" ;
      } else {
        $response = "Failed to insert";
      }
      echo json_encode($response);
?>