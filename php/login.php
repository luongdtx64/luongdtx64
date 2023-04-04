<?php
    require './dbConnect.php'
    
?>
<?php
    $userSignup = $_POST['usersignup'];
    $passwordSignup = $_POST['passsignup'];
    $emailSignup = $_POST['emailsignup'];
    $phoneSignup = $_POST['sdtsignup'];
    $sql = "INSERT INTO account (taikhoan, matkhau, sdt,email) VALUES ('$$userSignup ', '$passwordSignup', '$phoneSignup','$emailSignup')";
    if (mysqli_query($conn, $sql)) {
        // Kiểm tra số dòng bị ảnh hưởng
        if (mysqli_affected_rows($conn) > 0) {
            echo "Thêm dữ liệu thành công!";
        } else {
            echo "Thêm dữ liệu thất bại!";
        }
    } else {
        echo "Lỗi: " . mysqli_error($conn);
    }
?>
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
    .login-form {
    padding: 20px 15px 30px;
    position: relative;
    background: #fff;
    border: none;
    border-radius: 2px;
    box-shadow: 0px 0px 6px 0px rgb(0 0 0/10%);
    margin: 50px auto;
    width: 460px;
}
.btn-group {
    margin: auto;
}
.btn-change{
    background-color: #eceaea;
    padding: 12px;
    min-width: 100px;
    border-radius: 20px;
    cursor: pointer;
    text-align: center;
    width: 45%;
    text-decoration: none;
    color: #000;
    border: none;
    text-transform: uppercase;
}
.btn-change:hover{
    color: #000;
    box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.7);
}
.inp-login{
    /* width: 80%; */
    margin-top: 20px;
    border-radius: 10px;
    padding: 4px 9px;
    height: 29px;
    border: 1px solid #e0e0e0;
    -webkit-box-shadow: inset 0px 0px 5px 0px #eaeaea;
    box-shadow: inset 0px 0px 5px 0px #eaeaea;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    line-height: 19px;
    width: 100%;
    margin-bottom: 20px;
    font-size: 13px;
}
input[name='btn-login']{
    width: 100%;
    font-size: 15px;
    text-transform: uppercase;
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
.forgot-pass{
    font-style: italic;
    font-size: 12px;
    color: #6d6d6d;
    display: block;
    text-align: center;
    cursor: pointer;
}
input[name="btn-signup"]{
    width: 100%;
    font-size: 15px;
    text-transform: uppercase;
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
.signup-form{
    padding: 20px 15px 30px;
    position: relative;
    background: #fff;
    border: none;
    border-radius: 2px;
    box-shadow: 0px 0px 6px 0px rgb(0 0 0/10%);
    margin: 50px auto;
    width: 460px;
}
.box-signup{
    display: none;
}

</style>
<body>
    <?php include('/xampp/htdocs/webbanhang/asset/php/header.php')?>
    <div class="form w-100">
            <div class="container">
                <div class="row">
                    <div class="box-form w-100">
                        <div class="box-login">
                            <div id="loginForm" class="login-form d-flex flex-column justify-content-between align-items-center">
                                <div class="btn-group w-100 d-flex justify-content-around">
                                    <button class="btn-change btn-login">Đăng Nhập</button>
                                    <button class="btn-change btn-signup">Đăng Kí</button>
                                </div>
                                <input required placeholder="Tài khoản" class="inp-login" type="text" name="userlogin" >
                                <input required placeholder="Mật khẩu" class="inp-login" type="password" name="passlogin" >
                                <input name="btn-login" type="submit" value = "Đăng Nhập">
                                <p class='forgot-pass'>Quên mật khẩu</p>
                            </div>
                        </div>
                        <div class="box-signup">
                            <div id="signupForm" class="signup-form d-flex flex-column justify-content-between align-items-center">
                                <div class="btn-group w-100 d-flex justify-content-around">
                                    <button class="btn-change btn-login">Đăng Nhập</button>
                                    <button class="btn-change btn-signup">Đăng Kí</button>
                                </div>
                                <input required placeholder="Tài khoản" class="inp-login" type="text" name="usersignup" >
                                <input required placeholder="Mật khẩu" class="inp-login" type="password" name="passsignup" >
                                <input required placeholder="Số điện thoại" class="inp-login" type="text" name="sdtsignup" >
                                <input required placeholder="Email" class="inp-login" type="email" name="emailsignup" >
                                <input name="btn-signup" type="submit" value = "Đăng kí">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <?php include('/xampp/htdocs/webbanhang/asset/php/footer.php')?>
</body>
<script src="./JS.js"></script>
</html>