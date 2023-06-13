<?php
    require '/xampp/htdocs/webbanhang/php/dbConnect.php';

    // Lấy thông tin sản phẩm từ request POST
    $idProduct = $_POST['idSanPham'];
    $nameProduct = $_POST['tensp'];
    $amountProduct = $_POST['soluong'];
    $typeProduct = $_POST['loaisanpham'];
    $costProduct = $_POST['gia'];
    $sizeProduct = $_POST['size'];
    $img = $_POST['anhsp'];

    // Xử lý dữ liệu hình ảnh sản phẩm
    // ...

    // Cập nhật sản phẩm trong cơ sở dữ liệu
    $sql = "UPDATE sanpham SET tensp = '$nameProduct', soluong = '$amountProduct', loaisanpham = '$typeProduct', gia = '$costProduct', size = '$sizeProduct', hinhanh = '$img' WHERE idsanpham = '$idProduct'";

    if ($conn->query($sql) === TRUE) {
        $response = "Sửa sản phẩm thành công";
    } else {
        $response = "Lỗi khi sửa sản phẩm: " . $conn->error;
    }

    echo json_encode($response);
?>
