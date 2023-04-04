const loginForm = document.querySelector('.box-login')
const signupForm = document.querySelector('.box-signup')
const loginButtons = document.querySelectorAll('.btn-login')
const signupButtons = document.querySelectorAll('.btn-signup')
console.log(loginForm)
console.log(signupForm)
signupButtons.forEach(signupButton=>{
  signupButton.addEventListener('click',function(){
    signupForm.style.display = 'block'
    loginForm.style.display = 'none'
  })
})
loginButtons.forEach(loginButton=>{
  loginButton.addEventListener('click',function(){
    loginForm.style.display = 'block'
    signupForm.style.display = 'none'
  })
});