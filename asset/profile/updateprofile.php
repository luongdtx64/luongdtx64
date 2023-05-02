<?php
    require '/xampp/htdocs/webbanhang/php/dbConnect.php';
    session_start();
    $taikhoan = $_SESSION["username"];
    $data = json_decode(file_get_contents("php://input"), true);
    $fullname = $data["fullname"];
    $email = $data["email"];
    $phone = $data["phone"];
    $address = $data["address"];
    $avt = $data["imgdata"];
    $city = $data["city"];
    $district = $data["district"];
    $ward = $data["ward"];
    $sql = "UPDATE account SET Hoten = '$fullname' , diachi = '$address' , email = '$email' ,avt= '$avt',sdt = '$phone',tinh='$city',huyen='$district',xa='$ward' WHERE taikhoan = '$taikhoan'";
    if ($conn->query($sql) === TRUE) {
        $response = "Successfully" ;
      } else {
        $response = "Failed";
      }
      echo json_encode($response);
?>