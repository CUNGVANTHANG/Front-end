// Strict mode (Chế độ nghiêm ngặt) 
// Cách dùng khai báo "use strict" trên đầu trang code hoặc đầu hàm mong muốn
// VD1:
fullName = 'Nguyen Van A'

function testFunc() {
    age = 18
}

testFunc()
console.log(fullName) 
console.log(age)
// Nguyen Van A
// 18

// Khắc phục
"use strict" // Sẽ báo lỗi nếu đoạn code bị sai hoặc thừa

var fullName = 'Nguyen Van A'

function testFunc() {
    var age = 18
}

testFunc()
console.log(fullName) 
// console.log(age)

// VD2:
const student = Object.freeze({
    fullName: 'Nguyen Van A'
})

student.fullName = 'Nguyen Van B'

console.log(student)

// Khắc phục
"use strict"

const student = Object.freeze({
    fullName: 'Nguyen Van A'
})

// student.fullName = 'Nguyen Van B'

console.log(student)