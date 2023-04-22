<?php
    require '/xampp/htdocs/webbanhang/php/dbConnect.php';
    $idproduct = $_POST['idproduct'];
    $sql = "DELETE FROM giohang WHERE idsanpham = '$idproduct' ";
    if ($conn->query($sql) === TRUE) {
        $response = "Successfully" ;
      } else {
        $response = "Failed";
      }
      echo json_encode($response);
?>