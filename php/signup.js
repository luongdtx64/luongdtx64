var boxNotify = document.querySelector('.box-notify')
$(document).ready(function() {
    $("#signupForm").submit(function(event) {
        event.preventDefault();
        var username = $("input[name='usersignup']").val();
        var password = $("input[name='passsignup']").val();
        var phone = $("input[name='sdtsignup']").val()
        var email = $("input[name='emailsignup']").val()
        console.log(username,password,phone,email)
        $.ajax({
            type: "POST",
            url: "./signup.php",
            data: {
                username: username,
                password: password,
                phone:phone,
                email:email
            },
            success: function(response) {
                if(response == 'success'){
                    console.log(response)
                    boxNotify.style.display = 'flex'
                    boxNotify.innerHTML = `
                    <div class="notify-content d-flex align-items-center justify-content-center flex-column">
                        <h4>Đăng kí thành công</h4>
                        <i class="fa-solid fa-check"></i>
                        <span onclick = "location.reload()">OK</span>
                    </div>
                    `
                }
                else if(response=='error'){
                    console.log(response)
                    boxNotify.style.display = 'flex'
                    boxNotify.innerHTML = `
                    <div class="notify-content d-flex align-items-center justify-content-center flex-column">
                        <h4>Tài khoản đã tồn tại</h4>
                        <i class="error-color fa-sharp fa-solid fa-xmark"></i>
                        <span onclick = "hideNotify()">OK</span>
                    </div>
                    `
                    username=''
                    password=''
                    phone=''
                    email=''
                }
                else{
                    console.log(response)
                    boxNotify.style.display = 'flex'
                    boxNotify.innerHTML = `
                    <div class="notify-content d-flex align-items-center justify-content-center flex-column">
                        <h4>Có lỗi xảy ra!</h4>
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