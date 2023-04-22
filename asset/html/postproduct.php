<?php
    require '/xampp/htdocs/webbanhang/php/dbConnect.php';
    $taikhoan = $_POST['user'];
    $idOrder = $_POST['idOrder'];
    $idProduct = $_POST['idProduct'];
    $sql = "INSERT INTO giohang(taikhoan,iddonhang,idsanpham) VALUES('$taikhoan','$idOrder','$idProduct')";
    if ($conn->query($sql) === TRUE) {
        $response = "Successfully" ;
      } else {
        $response = "Failed to insert";
      }
      echo json_encode($response);
?>