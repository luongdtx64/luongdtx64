function renderUser(){
    const username = document.querySelector('.name-user')
    const name = localStorage.getItem('user')
    username.innerText = name
}
function renderAvt(){
    const username = localStorage.getItem('user')
    const avt = document.querySelector('.avt')
}
const renderDataProduct = ()=>{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const proDucts = JSON.parse(xhr.responseText);
            // console.log(proDucts)
            var html = proDucts.map(function(proDuct,index){
                return `<li class="product-item w-25 d-flex flex-column">
                <img src="${proDuct.hinhanh}" alt="" class="img-product-item">
                <p href="" class="name-product">${proDuct.tensp}</p>
                <div class="box-cost-product d-flex">
                    <p class="current-cost">Giá:${proDuct.gia}</p>
                    <p class="sale-cost"></p>
                </div>
                <button data-size="${proDuct.size}" data-color = "${proDuct.mausac}" data-amount="${proDuct.soluong}" dataimg= "${proDuct.hinhanh}" data-name="${proDuct.tensp}" data-price = "${proDuct.gia}" id="id-${proDuct.idsanpham}" class="btn-add-product"><i class="fa-solid fa-cart-shopping"></i>+</button>
            </li>`
            })
            
            const productLists = document.querySelectorAll('.box-product-shop')
                productLists.forEach((productList)=>{
                    productList.innerHTML = html.join();
                })
        }
    };
    xhr.open("GET", "getproduct.php", true);
    xhr.send();
}
const renderDataProductSale = ()=>{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const proDucts = JSON.parse(xhr.responseText);
            // console.log(proDucts)
            
            var html = proDucts.map(function(proDuct,index){
                return `<li  id="id-${proDuct.idsanpham}" class="product-item w-25 d-flex flex-column">
                <p class="sale-percent">25%</p>
                <img src="${proDuct.hinhanh}" alt="" class="img-product-item">
                <p class="name-product">${proDuct.tensp}</p>
                <div class="box-cost-product d-flex">
                <p class="current-cost">Giá:${proDuct.gia}</p>
                <p class="sale-cost">${proDuct.giasale}</p>
                </div>
                <button data-size="${proDuct.size}" data-color = "${proDuct.mausac}" data-amount="${proDuct.soluong}" dataimg= "${proDuct.hinhanh}" data-name="${proDuct.tensp}" data-price = "${proDuct.gia}" class="btn-add-product"><i class="fa-solid fa-cart-shopping"></i>+</button>
            </li>`
            })
            const productLists = document.querySelectorAll('.box-product-shop-sale')
            productLists.forEach((productList)=>{
                productList.innerHTML = html.join();
            })
        }
    };
    xhr.open("GET", "getproduct.php", true);
    xhr.send();
}

const AddCart = ()=>{
    const btnAdd = document.querySelectorAll('.btn-add-product')
    console.log(btnAdd)
    btnAdd.forEach(function(btn){
        btn.addEventListener('click',(e)=>{
            const ele = e.target
            const product = ele.parentElement.parentElement
            let img = product.parentElement.querySelectorAll('img-product-item')[0].src
            let namesp = product.parentElement.querySelectorAll('name-product')[0].innerText
            let price = product.parentElement.querySelectorAll('current-cost')[0].innerText
            console.log(img,namesp,price)
            const modalProduct = document.querySelector('.modal-product')
            const modalContainer = document.querySelector('.modalcontainer-product')
            let contentModal = `
                    <div class="box-img-product d-flex">
                        <div class="box-img-big">
                            <img class="big-img" src="${img}" alt="">
                        </div>
                        <div class="box-product-des">
                            <div class="box-img-small">
                                <h3 class="cost-product">${price}</h3>
                                <h5 class="name-product">${namesp}</h5>
                                <img src="${img}" alt="" class="img-small border-product">
                                <img src="${img}" alt="" class="img-small">
                                <img src="${img}" alt="" class="img-small">
                            </div>
                            <div class="box-infor-product">
                                <div class="box-infor-item">
                                    <p class="product-title">Kích cỡ</p>
                                    <input type="button" name="sizeM" class="btn-infor" value="M">
                                    <input type="button" name="sizeL" class="btn-infor" value="L">
                                </div>
                                <div class="box-infor-item d-flex flex-column">
                                    <p class="product-title">Số lượng:</p>
                                    <div class="box-amount d-flex">
                                        <button id="btn-add-amount">+</button>
                                        <input type="text" name="amount" class="" value="1">
                                        <button id="btn-minus-amount">-</button>
                                    </div>
                                </div>
                                <button class="btn-add-product">Thêm vào giỏ hàng</button>
                            </div>
                        </div> 
                    </div>
            `
            modalContainer.innerHTML = contentModal
            modalProduct.style.display = 'flex'
        })
    })
}
const renderCart = ()=>{
    
}
document.addEventListener("DOMContentLoaded", function() {
    renderUser()
    renderDataProduct();
    renderDataProductSale()
    AddCart()
  });
class proDuct{
    constructor(nameProduct,imgUrl,price,size,color,amount,salePrice,kindProduct){
        this.idProduct = Math.floor(Math.random()*1000)
        this.nameProduct = nameProduct
        this.imgUrl = imgUrl
        this.price = price
        this.size = size
        this.color = color
        this.amount = amount;
        this.salePrice = salePrice;
        this.kindProduct = kindProduct;
    }
}
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }