// Hoisting với "var"
console.log(age) // undefined
console.log(fullName) // Lỗi
var age = 16

// Hoisting với "function"
console.log(sum(6, 9)) // 15

function sum(a, b) {
    return a + b
}

// Hoisting với "let" và "const"
{
    console.log(fullName) // Lỗi
    let fullName = "Nguyen Van A"
}

// Bonus
const counter1 = makeCounter()

console.log(counter1()) //1

function makeCounter() {
    let count = 0
    return increase

    function increase() {
        return ++count
    }
}