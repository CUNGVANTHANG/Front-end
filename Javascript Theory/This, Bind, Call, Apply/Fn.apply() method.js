// Apply method
// Phương thức này cho phép gọi một hàm với một this (bind) và truyền đối số cho hàm gốc dưới dạng mảng

// Ví dụ 1:
const teacher = {
    firstName: 'Minh',
    lastName: 'Thu'
}

function greet(greeting, message) {
    return `${greeting} ${this.firstName} ${this.lastName}. ${message}`;
}

let result = greet.apply(teacher, ['Em chào cô', 'Cô dạy môn gì thế']);

console.log(result)

// So sánh với call() method
result = greet.call(teacher, 'Em chào cô', 'Cô dạy môn gì thế')

console.log(result)

// Ví dụ 2: Function borrowing (mượn hàm)
const teacher1 = {
    firstName: 'Minh',
    lastName: 'Thảo',
    isOnline: false,
    goOnline() {
        this.isOnline = true
        console.log(`${this.firstName} ${this.lastName} is Online`)
    },
    goOffline() {
        this.isOnline = false
        console.log(`${this.firstName} ${this.lastName} is Offline`)
    }
}

const me = {
    firstName: 'Thắng',
    lastName: 'Cung',
    isOnline: false,
}

console.log('Student: ', me.isOnline) // False
teacher1.goOnline.apply(me) // Thắng Cung is Online
console.log('Student: ', me.isOnline) // True

// Ví dụ 3:
function Animal(name, weight) {
    this.name = name
    this.weight = weight
}

function Parrot() {
    Animal.apply(this, arguments) // Tính kế thừa
    this.speak = function() {
        console.log('Nhà có khách!')
    }
}

const conVet = new Parrot('Vẹt', 300)

console.log(conVet)

// Sự giống nhau và khác nhau giữa các phương thức bind(), call(), apply()
// Giống: Là các methods được thừa kế từ Function.prototype
// Khác:
function fn() {
    // bind
    // - Trả về hàm mới với `this` tham chiếu tới `thisArg`
    // - Không thực hiện gọi hàm
    // - Nếu được bind kèm `arg1, arg2, ...` thì các đối số này sẽ được ưu tiên hơn
    const newFn = fn.bind(thisArg, arg1, arg2)
    newFn(arg1, arg2)

    // call
    // - Thực hiện bind `this` với `thisArg` và thực hiện gọi hàm
    // - Nhận các đối số cho hàm gốc từ `arg1, arg2, ...`
    fn.call(thisArg, arg1, arg2)

    // apply
    // - Thực hiện bind `this` với `thisArg` và thực hiện gọi hàm
    // - Nhận các đối số cho hàm gốc bằng đối số thứ 2 dưới dạng mảng `[arg1, arg2, ...]`
    fn.apply(thisArg, [arg1, arg2])
    
    
}