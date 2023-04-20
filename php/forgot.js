
var boxNotify = document.querySelector('.box-notify')
$(document).ready(function() {
    $("#forgotPass").submit(function(event) {
        event.preventDefault();
        var username = $("input[name='user-forgot']").val();
        var email  =$("input[name='email-forgot']").val()
        console.log(email,username)
        $.ajax({
            type: "POST",
            url: "./forgot.php",
            data: {
                username:username,
                email:email
            },
            success: function(response) {
                if(response == 'succsess'){
                    alert('Vui lòng chờ 1 chút!')
                    console.log(response)
                    boxNotify.style.display = 'flex'
                    boxNotify.innerHTML = `
                    <div class="notify-content d-flex align-items-center justify-content-center flex-column">
                        <h4>Kiểm tra email của bạn</h4>
                        <i class="fa-regular fa-envelope"></i>
                        <span onclick = "hideNotify()">OK</span>
                    </div>
                    `
                }
                else{
                    console.log(response)
                    boxNotify.style.display = 'flex'
                    boxNotify.innerHTML = `
                    <div class="notify-content d-flex align-items-center justify-content-center flex-column">
                        <h4>Tài khoản không tồn tại hoặc email không tồn tại</h4>
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