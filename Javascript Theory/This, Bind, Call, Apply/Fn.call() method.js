// Call method
// Là phương thức trong prototype của Function constructor, phương thức này được đùng để gọi hàm và cũng có thể bind, this cho hàm

// Ví dụ:
// - Gọi hàm với call method
// - Gọi hàm và bind this, lưu ý trong strict mode vẫn có this nếu được bind
// - Thể hiện tính kế thừa (extends) trong OOP
// - Mượn hàm (function borrowing), thêm ví dụ với arguments

// Ví dụ đơn giản: 
function random() {
    console.log(Math.random())
}

random()
random.call()
// Bản chất random() giống random.call()

// Ví dụ 2:
const teacher = {
    firstName: 'Minh',
    lastName: 'Thu',
}

const me = {
    firstName: 'Thắng',
    lastName: 'Cung',
    showFullName() {
        // console.log(this) // this là đối tượng window
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

me.showFullName.call(teacher) // call(bind) -> call bao gồm call và bind (gọi hàm và ràng buộc)
// Minh Thu

// Ví dụ 3: Gọi hàm và bind this, lưu ý trong strict mode vẫn có this nếu được bind
'use strict'

this.firstName = "Thắng"
this.lastName = "Cung"

function showFullName() {
    console.log(`${this.firstName} ${this.lastName}`)
}

showFullName() // Lỗi
showFullName.call(this) // Thắng Cung

// Ví dụ 4: Tính kế thừa
function Animal(name, weight) {
    this.name = name;
    this.weight = weight;
}

function Chicken(name, weight, legs) {
    Animal.call(this, name, weight) // Tính kế thừa
    this.legs = legs
}

const conGa = new Chicken('Con gà', 10, 2)

console.log(conGa)

// Ví dụ 5: Thiết lập hàm log
function logger() {
    console.log(...arguments)
}

logger(1, 2, 3, 4, 5) 
// 1 2 3 4 5

function looger1() {
    const arr = Array.from(arguments)
    console.log(arr)
}

looger1(1, 2, 3, 4, 5)