<?php
    require '/xampp/htdocs/webbanhang/php/dbConnect.php';
    $idProduct = $_POST['idparent'];
    $sql = "DELETE FROM giohang WHERE giohang.idsanpham = '$idProduct' ";
    if ($conn->query($sql) === TRUE) {
        $sql2 = "DELETE FROM sanpham WHERE sanpham.idsanpham = '$idProduct'";
        if ($conn->query($sql2) === TRUE) {
            $response = "Successfully";
        }
      } else {
        $response = "Failed";
      }
      echo json_encode($response);
?>