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
    <div class="form w-100">
            <div class="container">
                <div class="row">
                    <div class="box-form w-100">
                        <div class="box-login">
                            <form id="loginForm" class="login-form d-flex flex-column justify-content-between align-items-center">
                                <h5>Trang này chỉ dành cho quản trị viên , nếu bạn không phải quản trị viên , xin hãy quay lại</h5>
                                <div class="btn-group w-100 d-flex justify-content-around">
                                    <div class="btn-change btn-login">Đăng Nhập</div>
                                    <a href="./signupForm.php" class="btn-change btn-signup">Đăng Kí</a>
                                </div>
                                <input  placeholder="Tài khoản" class="inp-login" type="text" name="userlogin" >
                                <input  placeholder="Mật khẩu" class="inp-login" type="password" name="passlogin" >
                                <input name="btn-login" type="submit" value = "Đăng Nhập">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <?php include 'C:\xampp\htdocs\webbanhang\php\footer.php'; ?>

    <div class="box-notify">
        
    </div>


</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
<script src="./main.js"></script>
<script>
    var boxNotify = document.querySelector('.box-notify')
    $(document).ready(function() {
        $("#loginForm").submit(function(event){
            event.preventDefault();
            var username = $("input[name='userlogin']").val();
            var password = $("input[name='passlogin']").val();
            $.ajax({
            type: "POST",
            url: "./adminType.php",
            data: {
                username: username,
                password: password
            },
            success: function(response) {
                if(response == 'ok'){
                    localStorage.setItem('user',username)
                    console.log(response)
                    boxNotify.style.display = 'flex'
                    boxNotify.innerHTML = `
                    <div class="notify-content d-flex align-items-center justify-content-center flex-column">
                        <h4>Đăng nhập thành công</h4>
                        <i class="fa-solid fa-check"></i>
                        <span onclick = "document.location.href = '/webbanhang/admin/admin.html'">OK</span>
                    </div>
                    `
                }
                else{
                    console.log(response)
                    boxNotify.style.display = 'flex'
                    boxNotify.innerHTML = `
                    <div class="notify-content d-flex align-items-center justify-content-center flex-column">
                        <h4>Tài khoản của bạn không được phép truy cập</h4>
                        <i class="error-color fa-sharp fa-solid fa-xmark"></i>
                        <span onclick = "hideNotify()">OK</span>
                    </div>
                    `
                }
            },
            error:function(error){
                alert(error)
            }
        });
        })
    })
    const hideNotify = ()=>{
    boxNotify.style.display = 'none'
}
</script>
</html>