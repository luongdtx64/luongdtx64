<?php
    require '/xampp/htdocs/webbanhang/php/dbConnect.php';
    // Lấy thông tin sản phẩm từ request POST
    $idProduct = $_POST['idProDuct'];
    $nameProduct = $_POST['nameProduct'];
    $amountProduct = $_POST['amountProduct'];
    $typeProduct = $_POST['typeProduct'];
    $costProduct = $_POST['costProduct'];
    $saleCostProduct = $_POST['saleCostProduct'];
    $sizeProduct = $_POST['sizeProduct'];
    $img = $_POST['imgdata'];
    // Xử lý dữ liệu hình ảnh sản phẩm
   
    

    // Thêm sản phẩm vào bảng ior hàng
    $sql = "INSERT INTO sanpham (idsanpham, tensp, soluong, loaisanpham, gia, giasale, size, hinhanh)
            VALUES ('$idProduct', '$nameProduct', '$amountProduct', '$typeProduct', '$costProduct', '$saleCostProduct', '$sizeProduct', '$img')";

    if ($conn->query($sql) === TRUE) {
        $response = "Successfully" ;
    } else {
        $response = "Failed";
    }
    echo json_encode($response);


?>