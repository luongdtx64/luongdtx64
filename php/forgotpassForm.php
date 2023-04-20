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
</head>
<style>
    .box-email{
        padding: 40px;
        display:flex;
    }
    #forgotPass{
        margin: auto;
        width: 400px;
        height: 250px;
        background-color: #fff;
        box-shadow: 0px 0px 6px 0px rgb(0 0 0/10%);
    }
    #forgotPass > input{
        width: 80%;
        margin-top:20px ;
    }
    .btn-form{
        margin-top: 24px !important;
        text-transform: uppercase !important;
        font-size: 15px;
        padding: 7px 16px;
        line-height: 20px;
        margin-top: 10px;
        margin-bottom: 10px;
        display: inline-block;
        background: #000;
        color: #fff;
        border: 0;
        border-radius: 0;
    }
    .box-notify{
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    display: none;
}
.notify-content{
    margin: auto;
    width: 400px;
    height: 250px;
    background-color:#fff;
    border-radius: 20px;
}
.notify-content h4{
    text-align:center;
}
.notify-content i {
    padding: 30px;
    border-radius: 99px;
    color: rgb(40, 216, 40);
    border: 2px solid rgb(40, 216, 40);
    font-size: 30px;
}
.notify-content span{
    margin-top: 20px;
    border-radius: 10px;
    background-color: #000;
    padding: 15px 30px;
    color: #fff;
    cursor: pointer;
}
.error-color{
    color: rgb(255, 171, 15) !important;
    border: 2px solid rgb(255, 171, 15) !important;
    border-radius : 100% !important;
}
</style>
<body>
    <?php include 'C:\xampp\htdocs\webbanhang\php\header.php'; ?>
    <div class="box-form w-100">
        <div class="container">
            <div class="row">
                <div class="box-email w-100 ">
                    <form id="forgotPass" class="d-flex flex-column align-items-center justify-content-center">
                        <h4>QUÊN MẬT KHẨU</h4>
                        <input placeholder="Nhập tên tài khoản" required type="text" name="user-forgot">
                        <input placeholder="Nhập email đăng kí" required type="email" name="email-forgot">
                        <input class="btn-form" name="btn-forgot" type="submit" value="Lấy lại mật khẩu">
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="box-notify">

    </div>
    <?php include 'C:\xampp\htdocs\webbanhang\php\footer.php'; ?>
</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
<script src="./forgot.js"></script>
</html>