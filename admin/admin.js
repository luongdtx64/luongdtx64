const renderAccount = ()=>{
    fetch('getAccount.php')
    .then(response=>{
        return response.json()
    })
    .then(data=>{
        const accountList = document.querySelector('.account-list')
        let htmls= data.map(acc=>{
            return `
            <li id=${acc.taikhoan} class="account-item d-flex justify-content-between">
                <p class="account-name">Tài khoản:${acc.taikhoan}</p>
                <p class="account-password">Mật khẩu:${acc.matkhau}</p>
                <p class="account-phone">Số điện thoại:${acc.sdt}</p>
                <p class="account-email">Email:${acc.email}</p>
                <button class="btn-delete-account">Xoá</button>
            </li>
            `
        })
        accountList.innerHTML = htmls.join()
    })
    .catch(err=>{
        console.log(err)
    })
}

const run = ()=>{
    renderAccount()
}
run()