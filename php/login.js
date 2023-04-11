var boxNotify = document.querySelector('.box-notify')
$(document).ready(function() {
    $("#loginForm").submit(function(event) {
        event.preventDefault();
        var username = $("input[name='userlogin']").val();
        var password = $("input[name='passlogin']").val();
        console.log(username,password)
        $.ajax({
            type: "POST",
            url: "./login.php",
            data: {
                username: username,
                password: password
            },
            success: function(response) {
                if(response == 'ok'){
                    console.log(response)
                    boxNotify.style.display = 'flex'
                    boxNotify.innerHTML = `
                    <div class="notify-content d-flex align-items-center justify-content-center flex-column">
                        <h4>Đăng nhập thành công</h4>
                        <i class="fa-solid fa-check"></i>
                        <span onclick = "hideNotify()">OK</span>
                    </div>
                    `
                }
                else{
                    console.log(response)
                    boxNotify.style.display = 'flex'
                    boxNotify.innerHTML = `
                    <div class="notify-content d-flex align-items-center justify-content-center flex-column">
                        <h4>Sai tài khoản hoặc mật khẩu</h4>
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
    });
});
const hideNotify = ()=>{
    boxNotify.style.display = 'none'
}