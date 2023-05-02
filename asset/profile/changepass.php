<?php
    require '/xampp/htdocs/webbanhang/php/dbConnect.php';
    session_start();
    $taikhoan = $_SESSION["username"];
    $data = json_decode(file_get_contents("php://input"), true);
    $oldPass = $data["oldPass"];
    $newPass = $data["newPass"];
    $sql = "SELECT * FROM account WHERE taikhoan = '$taikhoan' and matkhau='$oldPass'";
    $result = $conn->query($sql);
    if ($result->num_rows == 1) {
        $row = $result->fetch_assoc();
        $sql = "UPDATE account SET matkhau = '$newPass' WHERE taikhoan = '$taikhoan'";
        if ($conn->query($sql) === TRUE) {
          echo "Mật khẩu đã được cập nhật thành công";
        } else {
          echo "Lỗi: " . $conn->error;
        }
      } 
      else {
        echo "Mật khẩu hiện tại không đúng";
      }

    
?>