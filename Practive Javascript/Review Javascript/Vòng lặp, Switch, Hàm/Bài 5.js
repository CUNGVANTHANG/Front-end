var request = prompt('Hãy nhập một số lớn hơn 100')

if (request > 100 || request == '' || request == null) {
    alert('Đã hủy')
}
else {
    do {
        if (request > 100 || request == '' || request == null) {
            alert('Đã hủy')
            break;
        }
        request = prompt('Hãy nhập lại')
    } while (1);
}






