function renderUser(){
    const username = document.querySelector('.name-user')
    const name = localStorage.getItem('user')
    username.innerText = name
}
function renderAvt(){
    const username = localStorage.getItem('user')
    const avt = document.querySelector('.avt')
}
const renderDataProductMale = ()=>{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const proDucts = JSON.parse(xhr.responseText);
            // console.log(proDucts)
            var html = proDucts.map(function(proDuct,index){
                return `<li id="${proDuct.idsanpham}" class="product-item w-25 d-flex flex-column">
                <img src="${proDuct.hinhanh}" alt="" class="img-product-item">
                <p href="" class="name-product">${proDuct.tensp}</p>
                <div class="box-cost-product d-flex">
                    <p class="current-cost">${proDuct.gia}</p>
                    <p class="sale-cost"></p>
                </div>
            </li>`
            })
            
            var productLists = document.querySelectorAll('.box-product-shop')
                productLists.forEach((productList)=>{
                    productList.innerHTML = html.join();
                })
                var html2 = proDucts.map(function(proDuct,index){
                    return `<li  id="${proDuct.idsanpham}" class="product-item w-25 d-flex flex-column">
                    <p class="sale-percent">25%</p>
                    <img src="${proDuct.hinhanh}" alt="" class="img-product-item">
                    <p class="name-product">${proDuct.tensp}</p>
                    <div class="box-cost-product d-flex">
                    <p class="current-cost">${proDuct.gia}</p>
                    <p class="sale-cost">${proDuct.giasale}</p>
                    </div>
    
                </li>`
                })
                
                const productListSales = document.querySelectorAll('.box-product-shop-sale')
                productListSales.forEach((productList)=>{
                    productList.innerHTML = html2.join();
                })
                
                const productItems = document.querySelectorAll('.product-item')
                var boxNotify = document.querySelector('.box-notify')
                notifyLogin(productItems,boxNotify)
        }
    };
    xhr.open("GET", "asset\\html\\getproduct.php", true);
    xhr.send();
}

const renderProductFemale= ()=>{
    const btnChangeClothesWoman = document.getElementById('btn-clothes-woman')
    btnChangeClothesWoman.addEventListener("click", ()=>{
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const proDucts = JSON.parse(xhr.responseText);
                var html = proDucts.map(function(proDuct,index){
                    return `<li id="${proDuct.idsanpham}" class="product-item w-25 d-flex flex-column">
                    <img src="${proDuct.hinhanh}" alt="" class="img-product-item">
                    <p href="" class="name-product">${proDuct.tensp}</p>
                    <div class="box-cost-product d-flex">
                        <p class="current-cost">${proDuct.gia}</p>
                        <p class="sale-cost"></p>
                    </div>
                </li>`
                })
                
                var productLists = document.querySelectorAll('.box-product-shop-woman')
                    productLists.forEach((productList)=>{
                        productList.innerHTML = html.join();
                    })
                    const boxBtnMan = document.getElementById('man-btn')
                    const boxBtnwoman = document.getElementById('woman-btn')
                    const btnChangeClothesMan = document.getElementById('btn-clothes-man')
                    const boxClothesMan = document.getElementById('product-man')
                    const boxClotheswoman = document.getElementById('product-woman')
                    boxClothesMan.style.display = 'none'
                    boxClotheswoman.style.display = 'block'
                    boxBtnMan.classList.remove('current-btn-change')
                    boxBtnwoman.classList.add('current-btn-change')
                    window.location.href = '#product-woman'
                    const productItems = document.querySelectorAll('.product-item')
                    var boxNotify = document.querySelector('.box-notify')
                    notifyLogin(productItems,boxNotify)
            }
        }
        xhr.open("GET", "asset\\html\\getproductfelmale.php", true);
        xhr.send();
        })
    
}
// const addModal = (productItem)=>{
//     productItem.forEach(product=>{
//         // console.log(product)
//         product.addEventListener('click',(e)=>{
//             var srcImg = product.querySelectorAll('.img-product-item')[0].src
//             var namesp = product.querySelectorAll('.name-product')[0].innerText
//             var pricesp = product.querySelectorAll('.current-cost')[0].innerText
//             let idProduct = product.getAttribute('id')
//             const modalProduct = document.querySelector('.modal-product')
//             const modalContainer = document.querySelector('.modal-container-product')
//             let htmlCart = `
//             <div class="box-img-product d-flex">
//             <div class="box-img-big">
//                 <img class="big-img" src="${srcImg}" alt="">
//             </div>
//             <div class="box-product-des">
//                 <div class="box-img-small">
//                     <h2 class="price-cart">${pricesp}</h2>
//                     <h5 id=${idProduct} class="name-product-box">${namesp}</h5>
//                     <img src="${srcImg}" alt="" class="img-small border-product">
//                     <img src="${srcImg}" alt="" class="img-small">
//                     <img src="${srcImg}" alt="" class="img-small">
//                 </div>
//                 <div class="box-infor-product">
//                     <div class="box-infor-item">
//                             <p class="product-title">Kích cỡ</p>
//                             <input type="button" name="sizeM" class="btn-infor" value="M">
//                             <input type="button" name="sizeL" class="btn-infor" value="L">
//                     </div>
//                     <div class="box-infor-item d-flex flex-column">
//                         <p class="product-title">Số lượng:</p>
//                         <div class="box-amount d-flex">
//                         <button id="btn-minus-amount">-</button>
//                         <input type="text" name="amount" class="" value="1">
//                         <button id="btn-add-amount">+</button>
//                         </div>
//                     </div>
//                     <button class="btn-add-product">Thêm vào giỏ hàng</button>
//                 </div>
//             </div>
//         </div>
//             `
//             modalContainer.innerHTML = htmlCart
//             modalProduct.style.display = 'flex'
//             hideModal()
//             const btnMinusAmount = document.querySelector('#btn-minus-amount')
//             const btnAddAmount = document.querySelector('#btn-add-amount')
//             btnAddAmount.addEventListener('click',()=>{
//                 let amount = document.querySelector('input[name="amount"]')
//                 amount.value = parseInt(amount.value) + 1
                
//             })
                
//             btnMinusAmount.addEventListener('click',()=>{
//                 let amount = document.querySelector('input[name="amount"]')
//                 if(amount.value > 1){
//                 amount.value = parseInt(amount.value) - 1
//                 }
                
//             })
//             const btnAddProduct = document.querySelector('.btn-add-product')
//             renderCart(btnAddProduct,modalContainer)
            
//         })
//     })
// }
// const hideModal = () => {
//     const modalProduct = document.querySelector('.modal-product')
//     modalProduct.addEventListener('click', () => {
//         modalProduct.style.display = 'none'
//     })
//     const modalContainer = document.querySelector('.modal-container-product')
//     modalContainer.addEventListener('click', (e) => {
//         e.stopPropagation()
//     })
// }
// const renderCart = (btnAddProduct,modalContainer)=>{
//     btnAddProduct.addEventListener('click',(e)=>{
//         let srcImg = modalContainer.querySelector('.big-img').src
//         let namesp = modalContainer.querySelector('.name-product-box').innerText
//         let nameid = modalContainer.querySelector('.name-product-box').id
//         let pricesp = modalContainer.querySelector('.price-cart').innerText
//         let amount = modalContainer.querySelector('input[name="amount"]').value
//         const modalCart = document.querySelector('.modal-cart')
//         let htmlCart = `
//         <img src="${srcImg}" alt="sản phẩm" class="img-cart">
//         <div style="margin-top: 20px;" class="d-flex flex-column">
//             <span>Tên</span>
//             <p class="name-product-cart">${namesp}</p>
//         </div>
//         <div style="margin-top: 20px;" class="d-flex align-self-center flex-column">
//             <span>Giá</span>
//             <p class="cost-product-cart">${pricesp}</p>
//         </div>
//         <div style="margin-top: 20px;" class="d-flex flex-column">
//             <span>Số lượng</span>
//             <p class="amount-product-cart">x${amount}</p>
//         </div>
//         <button class="remove-product">Xoá</button>
//         `
//         const Notify = document.querySelector('.notify-cart')
//         Notify.style.display = 'none'
//         const proDuctList = document.querySelector('.product-cart-list')
//         const productItemCart =  document.createElement('li')
//         productItemCart.classList.add(`product-item-${nameid}` ,'product-cart-item', 'd-flex' ,'align-items-center', 'justify-content-around')
//         productItemCart.innerHTML = htmlCart
//         proDuctList.appendChild(productItemCart)
//         const modalProduct = document.querySelector('.modal-product')
//         modalProduct.style.display = 'none'
//         modalCart.style.display = 'block'
//         proDuctList.style.display = 'block'
//         postProduct(nameid)
//         const btnDeletes = document.querySelectorAll('.remove-product')
//         var productID = document.querySelector(`.product-item-${nameid}`)
//         deleteProduct(btnDeletes,nameid,productID)
//     })
// }
// const deleteProduct = (btnDeletes,idproduct,product) => {
//     btnDeletes.forEach(btnDeletes=>{
//         btnDeletes.addEventListener('click',(e)=>{
//             $.ajax({
//                 type: "POST",
//                 url: "asset\\html\\deleteProduct.php",
//                 data : {
//                     idproduct:idproduct
//                 }
//             })
//             .done(function(response) {
//                 console.log(response)
//                 if (product){
//                     product.remove()
//                     Toastify({
//                         text: "Xoá sản phẩm thành công!", // Nội dung thông báo
//                         duration: 3000, // Thời gian hiển thị (milisecond)
//                         newWindow: true, // Mở ra một cửa sổ mới khi click vào thông báo
//                         close: true, // Hiển thị nút đóng thông báo
//                         gravity: "top", // Vị trí hiển thị của thông báo (top, bottom, left, right)
//                         position: "center", // Vị trí chính xác của thông báo
//                         backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)", // Màu nền của thông báo
//                         }).showToast();
//                 }
                
//             })
//             .fail(function(error){
//                 console.log(error);
//             }) 
//         })
//     })
// }
// const postProduct = (idProduct)=>{
//     const username = localStorage.getItem('user')
//     $.ajax({
//         type: "POST",
//         url: "./postproduct.php",
//         data : {
//             user : username,
//             idOrder : generateRandomNumber(1,1000),
//             idProduct : idProduct
//         }
//     })
//         .done(function(response) {
//             console.log(response)
//             Toastify({
//                 text: "Thêm sản phẩm thành công!", // Nội dung thông báo
//                 duration: 3000, // Thời gian hiển thị (milisecond)
//                 newWindow: true, // Mở ra một cửa sổ mới khi click vào thông báo
//                 close: true, // Hiển thị nút đóng thông báo
//                 gravity: "top", // Vị trí hiển thị của thông báo (top, bottom, left, right)
//                 position: "center", // Vị trí chính xác của thông báo
//                 backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)", // Màu nền của thông báo
//                 }).showToast();
//         })
//         .fail(function(error){
//             console.log(error);
//         }) 

        
    
// }
const notifyLogin = (productItems,boxNotify)=>{
    productItems.forEach(productItem=>{
        productItem.addEventListener("click",()=>{
        boxNotify.style.display = 'flex'
        boxNotify.innerHTML = `
        <div class="notify-content d-flex align-items-center justify-content-center flex-column">
            <h4>Vui lòng đăng nhập để mua hàng!</h4>
            <i class="fa-regular fa-user"></i>
            <span onclick = "hideNotify()">OK</span>
        </div>
        `
        })
    })
}
const hideNotify = ()=>{
    var boxNotify = document.querySelector('.box-notify')
    boxNotify.style.display = 'none'
}
$(document).ready(function(){
    // renderUser()
    renderDataProductMale()
    renderProductFemale()
})
class proDuct{
    constructor(nameProduct,imgUrl,price,size,color,amount,salePrice,kindProduct){
        this.idProduct = generateRandomNumber(1,1000)
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

