<?php
    require '/xampp/htdocs/webbanhang/php/dbConnect.php';
    $idAccount = $_POST['idparent'];
    $sql = "DELETE FROM giohang WHERE giohang.taikhoan = '$idAccount' ";
    if ($conn->query($sql) === TRUE) {
        $sql2 = "DELETE FROM account WHERE account.taikhoan = '$idAccount'";
        if ($conn->query($sql2) === TRUE) {
            $response = "Successfully";
        }
      } else {
        $response = "Failed";
      }
      echo json_encode($response);
?>