function renderUser(){
    const username = document.querySelector('.name-user')
    const name = localStorage.getItem('user')
    username.innerText = name
}
function renderAvt(){
    let avt = document.querySelector('.avt')
    let avtForm = document.querySelector('.avtForm')
    fetch('getAvt.php')
    .then(response=>{
        return response.json()
    })
    .then((data)=>{
        console.log(data)
        let avtSrc = data.map(function(avt){
            return avt.avt
        })
        avt.src=avtSrc.join()
        avtForm.src = avtSrc.join()
    })
}
const renderCart = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const products = JSON.parse(xhr.responseText);  
            let htmlCart = products.map(product=>{
                return `
                    <li class="product-item-${product.idsanpham} product-cart-item d-flex align-items-center justify-content-around" >
                        <img src="${product.hinhanh}" alt="sản phẩm" class="img-cart">
                        <div style="margin-top: 20px;" class="d-flex flex-column">
                            <span>Tên</span>
                            <p class="name-product-cart">${product.tensp}</p>
                        </div>
                        <div style="margin-top: 20px;" class="d-flex align-self-center flex-column">
                            <span>Giá</span>
                            <p class="cost-product-cart">${product.gia}</p>
                        </div>
                        <div style="margin-top: 20px;" class="d-flex flex-column">
                            <span>Số lượng</span>
                            <p class="amount-product-cart">x${product.soluong}</p>
                        </div>
                        <button id=${product.idsanpham} class="remove-product">Xoá</button>
                    
                    </li>
                `
                
            })
            const Notify = document.querySelector('.notify-cart')
            Notify.style.display = 'none'
            const proDuctList = document.querySelector('.product-cart-list')
            proDuctList.innerHTML = htmlCart.join()
            proDuctList.style.display = 'block'
            let childCount = proDuctList.childNodes.length;
            const btnDeletes = document.querySelectorAll('.remove-product')
            // var productID = document.querySelector(`.product-item-${idsanpham}`)
            btnDeletes.forEach((btnDelete)=>{
                btnDelete.addEventListener('click',(e)=>{
                    let idsanpham = e.target.id
                    const product = document.querySelector(`.product-item-${idsanpham}`)
                    $.ajax({
                        type: "POST",
                        url: "./deleteProduct.php",
                        data : {
                            idproduct:idsanpham
                        }
                    })
                    .done(function(response) {
                        // console.log(response)
                        if (product){
                            product.remove()
                            Toastify({
                                text: "Xoá sản phẩm thành công!", // Nội dung thông báo
                                duration: 3000, // Thời gian hiển thị (milisecond)
                                newWindow: true, // Mở ra một cửa sổ mới khi click vào thông báo
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
    }
    xhr.open("GET", "getcart.php", true);
    xhr.send();
}
const handlerModal = ()=>{
    const btnOpenCart = document.querySelector('#open-modal')
    const modalCart = document.querySelector(".modal-cart")
    const btnClose = document.querySelector('.close-btn')
    const modalContainer = document.querySelector('.modal-container-cart')
    const btnContinueShopping = document.querySelector("#continue-shopping")
    btnOpenCart.addEventListener('click',function(){
        modalCart.style.display = 'block'
    })
    btnClose.addEventListener('click',function(){
        hideModalCart(modalCart)
    })
    modalCart.addEventListener('click',function(){
        hideModalCart(modalCart)
    })
    modalContainer.addEventListener('click',function(e){
        e.stopPropagation()
    })
    btnContinueShopping.onclick = function(){
        hideModalCart(modalCart)
    }
}
function hideModalCart(modal){
    modal.style.display = 'none'
}
const handlerProvice = ()=>{
    var citis = document.getElementById("city");
    var districts = document.getElementById("district");
    var wards = document.getElementById("ward");
    var Parameter = {
    url: "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json", 
    method: "GET", 
    responseType: "application/json", 
    };
    var promise = axios(Parameter);
    promise.then(function (result) {
    renderCity(result.data);
    });

    function renderCity(data) {
    for (const x of data) {
        citis.options[citis.options.length] = new Option(x.Name, x.Name);
    }
    citis.onchange = function () {
        districts.length = 1;
        wards.length = 1;
        if(this.value != ""){
        const result = data.filter(n => n.Name === this.value);

        for (const k of result[0].Districts) {
            district.options[district.options.length] = new Option(k.Name, k.Name);
        }
        }
    };
    district.onchange = function () {
        ward.length = 1;
        const dataCity = data.filter((n) => n.Name === citis.value);
        if (this.value != "") {
        const dataWards = dataCity[0].Districts.filter(n => n.Name === this.value)[0].Wards;

        for (const w of dataWards) {
            wards.options[wards.options.length] = new Option(w.Name, w.Name);
        }
        }
    };
    }
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
const handlerUpdate =()=> {
    const updateForm = document.getElementById('formUpdate')
    updateForm.addEventListener('submit',function(e){
        e.preventDefault()
        const imgFile = document.querySelector('input[name="avatar-file"]').files[0]
        const fullName = document.querySelector('input[name="fullname"]').value
        const email = document.querySelector('input[name="emailupdate"]').value
        const phone = document.querySelector('input[name="sdtupdate"]').value
        const detailsAdrress = document.querySelector('input[name="detailAddress"]').value
        var city = document.getElementById("city").value;
        var district = document.getElementById("district").value;
        var ward = document.getElementById("ward").value;
        let address = `${city}-${district}-${ward}-${detailsAdrress}`
        getImageData(imgFile)
        .then(imgdata=>{
            const formdata = {
                fullname: fullName,
                email: email,
                phone: phone,
                imgdata: imgdata,
                city: city,
                district: district,
                ward: ward,
                address: address
            }
            console.log(formdata)
            return fetch('./updateprofile.php',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    },
                body: JSON.stringify(formdata)
            })
        })
        .then(response=>{
            response.json()
        })
        .then(result=>{
            console.log(result)
            var boxNotify = document.querySelector('.box-notify')
            boxNotify.style.display = 'flex'
            boxNotify.innerHTML = `
                <div class="notify-content d-flex align-items-center justify-content-center flex-column">
                    <h4>Cập nhật thành công!</h4>
                    <i class="fa-solid fa-check"></i>
                    <span onclick = "location.reload()">OK</span>
                </div>
        `
        })
        .catch(error => {
            console.log(error)
            Toastify({
                text: "Có lỗi xảy ra!", // Nội dung thông báo
                duration: 3000, // Thời gian hiển thị (milisecond)
                newWindow: true, // Mở ra một cửa sổ mới khi click vào thông báo
                close: true, // Hiển thị nút đóng thông báo
                gravity: "top", // Vị trí hiển thị của thông báo (top, bottom, left, right)
                position: "center", // Vị trí chính xác của thông báo
                backgroundColor: "linear-gradient(#f12711, #f5af19)", // Màu nền của thông báo
                }).showToast();
        })
    })
}
const renderProfile = ()=>{
    const boxRender = document.querySelector('.box-render')
    fetch('./getProfile.php')
    .then(response=>{
        return response.json()
    })
    .then(results=>{
        let html  = results.map(result=>{
            return `
            <input required placeholder="Họ và tên" type="text" name="fullname" value="${result.Hoten}">
            <input required placeholder="Số điện thoại" type="text" name="sdtupdate" value="${result.sdt}">
            <input required placeholder="Email" type="text" name="emailupdate" value="${result.email}">
            `
        })
        let city = results.map((result) =>{
            return result.tinh
        })
        let district = results.map((result) =>{
            return result.huyen
        })
        let ward = results.map(results=>{
            return results.xa
        })
        let details = results.map(result=>{
            return result.diachi
        })
        const optionCity = document.querySelector('.option-city')
        const optionDistrict = document.querySelector('.option-district')
        const optionWard = document.querySelector('.option-ward')
        const detailsAdrress = document.querySelector('input[name="detailAddress"')
        optionCity.innerText = city.join()
        optionDistrict.innerText = district.join()
        optionWard.innerText = ward.join()
        detailsAdrress.value = details.join()
        boxRender.innerHTML = html.join()
        const fullName = document.querySelector('input[name="fullname"]')
        const email = document.querySelector('input[name="emailupdate"]')
        const phone = document.querySelector('input[name="sdtupdate"]')
        const btnDelete = document.querySelector('.btn-refesh')
        btnDelete.addEventListener('click',function(){
            optionCity.innerText = ""
            optionDistrict.innerText = ""
            optionWard.innerText = ""
            detailsAdrress.value = ""
            fullName.value = ""
            email.value = ""
            phone.value = ""
        })
    })
    .catch(error=>{
        console.log(error)
    })
}
const logOut = ()=>{
    const logOutLink = document.querySelector('.logout')
    logOutLink.addEventListener('click',function(e){
        localStorage.clear()
        location.href = '/webbanhang'
    })
}

function run(){
    renderUser()
    renderAvt()
    renderCart()
    handlerModal()
    handlerUpdate()
    renderProfile()
    handlerProvice()   
    logOut()
    
}

run()
