let login = prompt('Vui lòng nhập tài khoản', '')

if (login == 'Admin') {
    let password = prompt('Vui lòng nhập mật khẩu')
    if (password == 'cafedev') {
        alert('Chào mừng!')
    }
    else if (password == '' || login == null) {
        alert('Đã hủy')
    }
    else if (password != null){
        alert('Mật khẩu sai')
    }
    else {
        alert('Đã hủy')
    }
}
else if (login == '' || login == null) {
    alert('Đã hủy')
}
else {
    alert('Tôi không biết bạn')
}