
const renderAccount = ()=>{
    fetch('getAccount.php')
        .then(response=>{
            return response.json()
        })
        .then(data=>{
            const accountList = document.querySelector('.content-list')
            let htmls= data.map(acc=>{
                return `
                <table id="${acc.taikhoan}">
                    <tr>
                        <th class="border">Tên tài khoản</th>
                        <th class="border">Mật khẩu</th>
                        <th class="border">Avatar</th>
                        <th class="border">Email</th>
                        <th class="border">Số điện thoại</th>
                        <th class="border">Thao tác</th>

                    </tr>
                    <tr>
                        <td class="border"><input value="${acc.taikhoan}" readonly type="text" class="inp-tb"></td>
                        <td class="border"><input value="${acc.matkhau}" type="text" class="inp-tb"></td>
                        <td class="border"><img  class="img-tb" src="${acc.avt}" alt=""></td>
                        <td class="border"><input value="${acc.email}" type="text" class="inp-tb"></td>
                        <td class="border"><input value="${acc.sdt}" type="text" class="inp-tb"></td>
                        <td class="border">
                            <button class="btn-content btn-delete-acc">Xoá</button>
                        </td>
                        
                    </tr>
                    
                </table>
               
                `
            })
            accountList.innerHTML = htmls.join("")
            accountList.style.display = 'block'
            const btnDeleteAccount = document.querySelectorAll('.btn-delete-acc')
            deleteAdmin(btnDeleteAccount,'./deleteAcc.php')
            const amountAcc = document.querySelector('#amount-acc')
            renderAmount(accountList,amountAcc)
        })
        .catch(err=>{
            console.log(err)
        })
}
const renderProduct = ()=>{
    fetch('getProduct.php')
        .then(response=>{
            return response.json()
        })
        .then(data=>{
            const productList = document.querySelector('.content-list')
            let htmls= data.map(product=>{
                return `
                <table id=${product.idsanpham}>
                    <tr>
                        <th class="border">ID Sản phẩm</th>
                        <th class="border">Tên sản phẩm</th>
                        <th class="border">Hình ảnh</th>
                        <th class="border">Số lượng</th>
                        <th class="border">Loại quần áo</th>
                        <th class="border">Size</th>
                        <th class="border">Giá</th>
                        <th class="border">Thao tác</th>
                    </tr>
                    <tr>
                        <td class="border"><input name="product-id" value="${product.idsanpham}" readonly type="text" class="inp-tb"></td>
                        <td class="border"><input name="product-name" value="${product.tensp}" type="text" class="inp-tb"></td>
                        <td class="border"><img class="img-tb" src="${product.hinhanh}" alt=""></td>
                        <td class="border">
                            <input name="product-amount" value="${product.soluong}" type="text" class="inp-tb">
                        </td>
                        <td class="border"><input name="product-type" value="${product.loaisanpham}" type="text" class="inp-tb"></td>
                        <td class="border"><input name="product-size" value="${product.size}" type="text" class="inp-tb"></td>
                        <td class="border"><input name="product-cost" value="${product.gia}" type="text" class="inp-tb"></td>
                        <td class="border">
                            <button class="btn-content btn-delete-product">Xoá</button>
                            <button class="btn-content btn-update-product">Sửa</button>
                        </td>
                    </tr>
                    
                </table>
                
                `
            })
            productList.innerHTML = htmls.join("")
            productList.style.display = 'block'
            const btnDeleteproduct = document.querySelectorAll('.btn-delete-product')
            deleteAdmin(btnDeleteproduct,'./deleteProduct.php')
            const btnUpdateProduct = document.querySelectorAll('.btn-update-product')
            updateProduct(btnUpdateProduct)
            const amountProduct = document.querySelector('#amount-product')
            renderAmount(productList,amountProduct)
            
        })
        .catch(err=>{
            console.log(err)
        })
}
const updateProduct = (btnproducts)=>{
    btnproducts.forEach(btn=>{
        btn.addEventListener('click',()=>{
            var row = btn.closest('tr');
            var idSanPham = row.querySelector('input[name="product-id"]').value;
            var tensp = row.querySelector('input[name="product-name"]').value;
            var soluong = row.querySelector('input[name="product-amount"]').value;
            var loaisanpham = row.querySelector('input[name="product-type"]').value;
            var size = row.querySelector('input[name="product-size"]').value;
            var gia = row.querySelector('input[name="product-cost"]').value;
            var anhsp = row.querySelector('.img-tb').src
            const formData = {
                idSanPham: idSanPham,
                tensp: tensp,
                soluong: soluong,
                loaisanpham: loaisanpham,
                size: size,
                gia: gia,
                anhsp: anhsp
            }
            console.log(formData);
            $.ajax({
                type: "POST",
                url: 'updateproduct.php',
                data : formData
            })
            .done(function(response) {
                
                Toastify({
                    text: `Cập nhật thành công!`, // Nội dung thông báo
                    duration: 3000, // Thời gian hiển thị (milisecond)
                    newWindow: false, // Mở ra một cửa sổ mới khi click vào thông báo
                    close: true, // Hiển thị nút đóng thông báo
                    gravity: "top", // Vị trí hiển thị của thông báo (top, bottom, left, right)
                    position: "center", // Vị trí chính xác của thông báo
                    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)", // Màu nền của thông báo
                    }).showToast();
                setTimeout(function() {
                    renderProduct()
                })
                
            })
            .fail(function(error){
                console.log(error);
            }) 
              
        })
    })
}
const deleteAdmin = (btns,filePHP)=>{
    btns.forEach(btn=>{
        btn.addEventListener('click',(e)=>{
            const parent1 = btn.parentNode
            const parent2 = parent1.parentNode
            const parent3 = parent2.parentNode
            const parent4 = parent3.parentNode
            const idparent = parent4.id
            console.log(parent1,parent2,parent3,idparent)
            $.ajax({
                type: "POST",
                url: filePHP,
                data : {
                    idparent: idparent
                }
            })
            .done(function(response) {
                
                    if (parent4){
                        parent4.remove()
                        Toastify({
                            text: `Xoá ${idparent} thành công!`, // Nội dung thông báo
                            duration: 3000, // Thời gian hiển thị (milisecond)
                            newWindow: false, // Mở ra một cửa sổ mới khi click vào thông báo
                            close: true, // Hiển thị nút đóng thông báo
                            gravity: "top", // Vị trí hiển thị của thông báo (top, bottom, left, right)
                            position: "center", // Vị trí chính xác của thông báo
                            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)", // Màu nền của thông báo
                            }).showToast();
                    }
                
                
            })
            .fail(function(error){
                console.log(error);
            }) 
        })

    })
}
const handlerModal = ()=>{
    const modal = document.querySelector('.modal-product');
    const modalContainer = modal.querySelector('.modal-container-product')
    const btnClose = document.querySelector('.btn-close');
    btnClose.addEventListener('click', ()=>{
        modal.style.display = 'none'

    })
    modal.addEventListener('click', ()=>{
        modal.style.display = 'none'
    })
    modalContainer.addEventListener('click', (e)=>{
        e.stopPropagation()
    })
}
const renderAmount = (ul,amount)=>{
    let count = 0
    for(let i=0; i<ul.children.length; i++){
        if (ul.children[i].tagName === 'TABLE') { // kiểm tra các phần tử con là thẻ <li>
            count++;
        }
    }
    amount.innerText = `Số lượng:${count}`
}
const changeTitle = (content)=>{
    const title = document.querySelector('.title-content')
    title.innerText = content
}
function getImageData(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      
      reader.onerror = (error) => {
        reject(error);
      };
      
      reader.readAsDataURL(file);
    });
  }
const addProduct= ()=>{
    const formAdd = document.querySelector('.addProduct')
    formAdd.addEventListener('submit', (e)=>{
        e.preventDefault();
        let nameProduct = document.querySelector('input[name="name-product"]').value
        let amountProduct = document.querySelector('input[name="amount-product"]').value
        let typeProduct = document.querySelector('input[name="type-product"]').value
        let costProduct = document.querySelector('input[name="cost-product"]').value
        let saleCostProduct = document.querySelector('input[name="sale-cost-product"]').value
        let sizeProduct = document.getElementById('size').value
        let imgProduct = document.querySelector('input[name="img-file"]').files[0]
        getImageData(imgProduct)
        .then(imgdata=>{
            const form = {
                idProDuct:generateOrderId(),
                nameProduct: nameProduct,
                amountProduct: amountProduct,
                typeProduct: typeProduct,
                costProduct: costProduct,
                saleCostProduct: saleCostProduct,
                sizeProduct: sizeProduct,
                imgdata: imgdata
            }
            return $.ajax({
                type: "POST",
                url: 'addProduct.php',
                data : form
            })
            .done(response=>{
                console.log(response)
                Toastify({
                    text: `Thêm sản phẩm thành công thành công!`, // Nội dung thông báo
                    duration: 3000, // Thời gian hiển thị (milisecond)
                    newWindow: false, // Mở ra một cửa sổ mới khi click vào thông báo
                    close: true, // Hiển thị nút đóng thông báo
                    gravity: "top", // Vị trí hiển thị của thông báo (top, bottom, left, right)
                    position: "center", // Vị trí chính xác của thông báo
                    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)", // Màu nền của thông báo
                    }).showToast();
                    setTimeout(function() {
                        renderProduct()
                    },1500)
            })
            .fail(error=>{console.log(error)})
        })
    })
}
function generateOrderId() {
    var orderId = 'ETO';
    for (var i = 0; i < 5; i++) {
      orderId += Math.floor(Math.random() * 10);
    }
    return orderId;
  }
const run = ()=>{
    renderAccount()
    const btnAccount = document.getElementById('btn-account')
    btnAccount.addEventListener('click',()=>{
        renderAccount()
        changeTitle("Danh sách tài khoản")
        const btnAddProduct = document.getElementById('add-product')
        btnAddProduct.style.display='none'
    })
    const btnProduct = document.getElementById('btn-product')
    btnProduct.addEventListener('click',()=>{
        renderProduct()
        changeTitle("Danh sách sản phẩm")
        const btnAddProduct = document.getElementById('add-product')
        btnAddProduct.style.display='block'
        btnAddProduct.addEventListener('click',()=>{
            const modal = document.querySelector('.modal-product');
            modal.style.display='flex'
        })
    })
    handlerModal()
    addProduct()
}
run()