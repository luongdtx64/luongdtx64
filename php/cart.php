<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css">

</head>
<style>
    .cart-list-product{
        list-style: none;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
    .cart-product-item{
        width: 18%;
    }
    .img-cart-item{
        width: 100%;
        height: auto;
    }
    input[name="amount"]{
        width: 30px;
        text-align: center;
    }
    .box-amount button{
        border: 1px solid #000;
        background-color: #000;
        color: #fff;
        min-width: 30px;
    }
    .btn-cart-item{
        background-color: #000;
        color:#fff;
        padding: 10px;
        border-radius: 3px;
        border: none;
    }
    h2{
        font-size: 20px;
        font-weight: bold;
        color: #000;
        margin: 0px;
        text-transform: uppercase;
    }
    #box-btn{
        display: block;
    }
    .box-confirm{
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.3) ;
        display:none;
    }
    .confirm-content{
        margin:auto;
        width: 30%;
        height: 40%;
        border-radius:10px;
        background-color: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
    .confirm-content p{
        width: 60%;
        margin-bottom: 40px ;
        text-align: center;
    }
    .btn-close{
        align-self: flex-end;
    }
    .cart-list-product h3{
        text-align: center;
    }
    .btn-disable{
        opacity: 0.5;
    }
</style>
<body>

<?php include 'C:\xampp\htdocs\webbanhang\php\header.php'; ?>
<div class="container">
    <div class="row">
    <h2>Giỏ Hàng</h2>
        <div class="cart-box">
            <ul class="cart-list-product">
                <h3>GIỎ HÀNG TRỐNG</h3>
            </ul>
            <!-- <ul class="cart-list-product d-flex align-items-center justify-content-evenly">
                <li class="cart-product-item d-flex flex-column align-items-center">
                    <p class="product-name">Áo thun</p>
                    <img src="https://acmedelavie.com.vn/media/catalog/product/cache/cc12d5451bfd9bcbb2b448224bd7f5cc/0/0/000-ADLV-21SS-SSADBK-TBD-002_1.jpg" alt="" class="img-cart-item">
                </li>
                <li class="cart-product-item">
                    <p>Giá</p>
                    <p>1000000</p>
                </li>
                <li class="cart-product-item">
                    Số lượng
                    <div class="box-amount d-flex">
                        <button class="btn-minus-amount">-</button>
                        <input type="text" name="amount" class="" value="1">
                        <button class="btn-add-amount">+</button>
                    </div>
                </li>
                <li class="cart-product-item">
                    <p>Tổng tiền</p>
                    <p class="total-price">1000000</p>
                </li>
                <li id="box-btn" class="cart-product-item">
                    <button class="btn-cart-item">ĐẶT HÀNG</button>
                    <button class="btn-cart-item">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </li> -->
                <!-- <li class="cart-product-item">
                    <p><i class="fa-solid fa-truck"></i> Đang vận chuyển</p>
                </li> -->
            </ul>
        </div>
    </div>
</div>
<?php include 'C:\xampp\htdocs\webbanhang\php\footer.php'; ?>
<div class="box-confirm">
    <div class="confirm-content d-flex align-items-center flex-column justify-content-around">
        <div class="btn-close"></div>
        <p>Bạn xác nhận vận chuyển hàng đến địa chỉ : Test và số điện thoại : test</p>
        <div>
            <button class="btn-cart-item">Xác nhận</button>
            <button class="btn-cart-item">Không</button>
        </div>
    </div>
</div>

</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/toastify-js"></script>
<script src="./main.js"></script>
<script src="./cart.js"></script>
</html>