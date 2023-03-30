const btnOpenCart = document.querySelector('#open-modal')
const modalCart = document.querySelector(".modal-cart")
const btnClose = document.querySelector('.close-btn')
const modalContainer = document.querySelector('.modal-container')
const btnContinueShopping = document.querySelector("#continue-shopping")
btnOpenCart.addEventListener('click',function(){
    modalCart.style.display = 'block'
})
btnClose.addEventListener('click',function(){
    hideModalCart(modalCart)
})
function hideModalCart(modal){
    modal.style.display = 'none'
}
modalCart.addEventListener('click',function(){
    hideModalCart(modalCart)
})
modalContainer.addEventListener('click',function(e){
    e.stopPropagation()
})
btnContinueShopping.onclick = function(){
    hideModalCart(modalCart)
}
const btnChangeImgLeft = document.getElementById('btn-img-left')
const btnChangeImgRight = document.getElementById('btn-img-right')
const imgBanner = document.querySelector('.img-banner')
let Imgs = [
    'https://img.cdn.vncdn.io/cdn-pos/556e88-134541/bn/20230320_tUs4bRsm.png',
    'https://img.cdn.vncdn.io/cdn-pos/556e88-134541/bn/20230320_zk1SfSVA.png',
    'https://img.cdn.vncdn.io/cdn-pos/556e88-134541/bn/20230320_6orPK57k.png'
]
var indexImg = 0
const ChangeImgauto = ()=>{
    setInterval(()=>{
        imgBanner.src = Imgs[indexImg]
        indexImg++
        if(indexImg >= Imgs.length){
            indexImg=0
        }
    },3000)
}
ChangeImgauto()
function showPreviousImage() {
    if(indexImg === 0){
        indexImg = Imgs.length - 1
    }
    else{
        indexImg-=1
    }
    imgBanner.src = Imgs[indexImg];
  }
  
  function showNextImage() {
    if(indexImg === Imgs.length-1){
        indexImg = 0
    }
    else{
        indexImg +=1
    }
    imgBanner.src = Imgs[indexImg];
  }
  
  btnChangeImgLeft.addEventListener('click',showPreviousImage)
  btnChangeImgRight.addEventListener('click',showNextImage)
  const boxLogo = document.querySelector('.box-logo')
  window.addEventListener('scroll', function() {
  const shopNavbar = document.querySelector('.shop-navbar')

    if (window.scrollY > 0) {
      shopNavbar.style.position = 'fixed';
      shopNavbar.style.top = '0';
      shopNavbar.style.boxShadow = '0px 0px 8px rgba(0,0,0,0.8)'
    } else {
      shopNavbar.style.position = '';
      shopNavbar.style.top = '';
    }
  });
  const btnSale  = document.querySelector('.sale-product-btn')
  const mixMatchBtn = document.querySelector('.mix-match-btn')
  const SaleBox = document.getElementById('sale-product-box')
  const mixMatchBox = document.getElementById('mix-match-box')
  btnSale.addEventListener('click',function(){
    SaleBox.style.display = 'block'
    mixMatchBox.style.display = 'none'
    btnSale.classList.add('current-btn-tab-link')
    mixMatchBtn.classList.remove('current-btn-tab-link')
  })
  mixMatchBtn.addEventListener('click',function(){
    SaleBox.style.display = 'none'
    mixMatchBox.style.display = 'block'
    mixMatchBtn.classList.add('current-btn-tab-link')
    btnSale.classList.remove('current-btn-tab-link')
  })
  const btnChangeClothesMan = document.getElementById('btn-clothes-man')
  const btnChangeClothesWoman = document.getElementById('btn-clothes-woman')
  const boxClothesMan = document.getElementById('product-man')
  const boxClotheswoman = document.getElementById('product-woman')
  const boxBtnMan = document.getElementById('man-btn')
  const boxBtnwoman = document.getElementById('woman-btn')
  btnChangeClothesMan.addEventListener('click',function(){
    boxClothesMan.style.display = 'block'
    boxClotheswoman.style.display = 'none'
    boxBtnMan.classList.add('current-btn-change')
    boxBtnwoman.classList.remove('current-btn-change')
    window.location.href = '#product-man'
  })
  btnChangeClothesWoman.addEventListener('click',function(){
    boxClothesMan.style.display = 'none'
    boxClotheswoman.style.display = 'block'
    boxBtnMan.classList.remove('current-btn-change')
    boxBtnwoman.classList.add('current-btn-change')
    window.location.href = '#product-woman'
  })