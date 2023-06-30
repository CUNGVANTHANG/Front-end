// Scope - Phạm vi

// - Các loại phạm vi:
//     + Global: Toàn cầu
//     + Code block - Khối mã: let, const
//     + Local scope - Hàm: var, function
// - Khi gọi mỗi hàm luôn có 1 phạm vi mới được tạo
// - Các hàm có thể truy cập các biến được khai báo trong phạm vi của nó và bên ngoài nó
// - Cách thức một biến được truy cập
// - Khi nào một biến bị xóa khỏi bộ nhớ?
//     - Biến toàn cầu?
//     - Biến trong code block & trong hàm?
//     - Biến trong hàm được tham chiếu bởi 1 hàm

// + Global: Toàn cầu
var message = 'Học về scope'

function logger() {
    console.log(message)
}

logger()

// + Code block - Khối mã: Chỉ có khai báo let, const
{
    // code
    const age = 20
    console.log(age) // 20
}
console.log(age) // Lỗi

// + Local scope - Hàm: var, function
function logger1() {
    var fullName = 'Cung Thang'
    console.log(fullName) // Cung Thang
}

logger1()
console.log(fullName) // Lỗi