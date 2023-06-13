const handlerAmountAndTotalPrice = ()=>{
    // Lấy tất cả các nút "+" và "-" trên trang
const plusButtons = document.querySelectorAll('.btn-add-amount');
const minusButtons = document.querySelectorAll('.btn-minus-amount');

// Lặp qua từng cặp nút tương ứng
for (let i = 0; i < plusButtons.length; i++) {
  const plusButton = plusButtons[i];
  const minusButton = minusButtons[i];

  // Lấy các phần tử cần xử lý trong cặp nút hiện tại
  const amountInput = plusButton.parentElement.querySelector('input[name="amount"]');
  const priceElement = plusButton.closest('.cart-list-product').querySelector('.cart-product-item:nth-child(2) p:nth-child(2)');
  const totalElement = plusButton.closest('.cart-list-product').querySelector('.total-price');

  // Lấy giá và số lượng ban đầu cho sản phẩm tương ứng
  const initialPrice = parseInt(priceElement.textContent);
  let amount = parseInt(amountInput.value);

  // Hàm cập nhật tổng tiền
  function updateTotalPrice() {
    const totalPrice = initialPrice * amount;
    totalElement.textContent = totalPrice.toLocaleString();
  }

  // Xử lý sự kiện khi nhấn nút "+" tăng số lượng
  plusButton.addEventListener('click', function() {
    amount++;
    amountInput.value = amount;
    updateTotalPrice();
  });

  // Xử lý sự kiện khi nhấn nút "-" giảm số lượng
  minusButton.addEventListener('click', function() {
    if (amount > 1) {
      amount--;
      amountInput.value = amount;
      updateTotalPrice();
    }
  });

  // Xử lý sự kiện khi số lượng thay đổi trực tiếp trong input
  amountInput.addEventListener('input', function() {
    const newAmount = parseInt(amountInput.value);
    if (!isNaN(newAmount) && newAmount >= 1) {
      amount = newAmount;
      updateTotalPrice();
    }
  });
}

}
const renderCart = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const products = JSON.parse(xhr.responseText);
            let htmlCart = products.map(product=>{
                return `
                <ul id="${product.iddonhang}" class="cart-list-product d-flex align-items-center justify-content-evenly">
                    <li class="cart-product-item d-flex flex-column align-items-center">
                        <p class="product-name">${product.tensp}</p>
                        <img src="${product.hinhanh}" alt="" class="img-cart-item">
                    </li>
                    <li class="cart-product-item">
                        <p>Giá</p>
                        <p>${product.gia}</p>
                    </li>
                    <li class="cart-product-item">
                        Số lượng
                        <div class="box-amount d-flex">
                            <button class="btn-minus-amount">-</button>
                            <input type="text" name="amount" class="" value="${product.soluong}">
                            <button class="btn-add-amount">+</button>
                        </div>
                    </li>
                    <li class="cart-product-item">
                        <p>Tổng tiền</p>
                        <p class="total-price">${product.tongtien}</p>
                    </li>
                    <li class="cart-product-item">
                        <button id="btn-order" class="btn-cart-item">${product.trangthai}</button>
                        <button id="btn-delete" class="btn-cart-item">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </li>
                </ul>
                `
            })
            const boxCart = document.querySelector('.cart-box')
            boxCart.innerHTML = htmlCart.join('');
            handlerAmountAndTotalPrice();
            const btnOrder = document.querySelectorAll('#btn-order')
            handlerConfirm(btnOrder)
        }
    }
    xhr.open("GET", "/webbanhang/asset/html/getcart.php", true);
    xhr.send();
}
const handlerConfirm = (btns)=>{
    btns.forEach((btn)=>{
        if(btn.innerText == "Đã xác nhận" || btns.innerText == "Đang vận chuyển" ){
                btn.disabled = true;
                btn.classList.add('btn-disable')
        }
        else{
            btn.addEventListener('click', ()=>{
                let xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    const informations = JSON.parse(xhr.responseText);
                    let htmlCart = informations.map(information=>{
                        return `
                        <div class="confirm-content d-flex align-items-center flex-column justify-content-around">
                            <div class="btn-close"></div>
                            <p>Bạn xác nhận vận chuyển hàng đến địa chỉ : ${information.diachi}và số điện thoại : ${information.sdt}</p>
                            <div>
                                <button id=btn-confirm class="btn-cart-item">Xác nhận</button>
                                <button id="btn-no" class="btn-cart-item">Không</button>
                            </div>
                        </div>
                        `
                    })
                    const boxConfirm = document.querySelector('.box-confirm')
                    boxConfirm.innerHTML = htmlCart.join('');
                    boxConfirm.style.display = 'flex'
                    const btnNo = document.querySelector('#btn-no')
                    const confirmContent = document.querySelector('.confirm-content')
                    const btnClose = document.querySelector('.btn-close')
                    btnClose.addEventListener('click', ()=>{
                        boxConfirm.style.display = 'none'
                    })
                    boxConfirm.addEventListener('click', ()=>{
                        boxConfirm.style.display = 'none'
                    })
                    confirmContent.addEventListener('click', (e)=>{
                        e.stopPropagation();
                    })
                    btnNo.addEventListener('click', ()=>{
                        boxConfirm.style.display = 'none'
                    })
                    const btnConfirm = document.querySelector('#btn-confirm')
                    btnConfirm.addEventListener('click', ()=>{
                        const order  = btn.closest('ul')
                        const iddonhang = order.id;
                        const amount = order.querySelector('input[name="amount"]').value
                        const totalPrice = order.querySelector('.total-price').innerText
                        console.log(order, amount, totalPrice)
    
                        $.ajax({
                            type: "POST",
                            url: "./updatecart.php",
                            data: {
                                iddonhang:iddonhang,
                                amount:amount,
                                totalPrice:totalPrice
                            },
                            success: function(response) {
                                console.log(response)
                                Toastify({
                                    text: "Đặt hàng thành công", // Nội dung thông báo
                                    duration: 3000, // Thời gian hiển thị (milisecond)
                                    newWindow: true, // Mở ra một cửa sổ mới khi click vào thông báo
                                    close: true, // Hiển thị nút đóng thông báo
                                    gravity: "top", // Vị trí hiển thị của thông báo (top, bottom, left, right)
                                    position: "center", // Vị trí chính xác của thông báo
                                    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)", // Màu nền của thông báo
                                    }).showToast();
                                setTimeout(function() {
                                    renderCart()
                                },3000)
                                boxConfirm.style.display = 'none';
                                
                            },
                            error:function(error){
                                alert(error)
                            }
                        });
                        
                    })
                }
            }
            xhr.open("GET", "/webbanhang/asset/profile/getProfile.php", true);
            xhr.send();
            });
            
        }
        
    })
}

const run = ()=>{
    renderCart();

}
run();