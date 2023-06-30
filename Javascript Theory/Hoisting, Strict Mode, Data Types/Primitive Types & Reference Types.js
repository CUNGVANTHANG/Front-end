// 1. Value type (Primitive data types) 
// Kiểu dữ liệu nguyên thủy - Kiểu tham trị
// - String
// - Number
// - Boolean
// - BigInt
// - Symbol
// - undefined
// - null

// 2. Reference types (None-primitive data types)
// Kiểu dữ liệu không nguyên thủy - Kiểu tham chiếu
// - Object
// - Array
// - Function

// Ví dụ điển hình của việc sử dụng tham chiếu và tham trị
function createCar(obj) {
    obj.name = 'Mercedes'
    return obj
}

const car = {
    name: 'BMW'
}

const newCar = createCar(car) 

console.log(car)
console.log(newCar)
// { name: 'Mercedes' }
// { name: 'Mercedes' }

// Khắc phục
function createCar1(obj) {
    obj = JSON.parse(JSON.stringify(obj))
    obj.name = 'Mercedes'
    return obj
}

const car1 = {
    name: 'BMW'
}

const newCar1 = createCar(car) 

console.log(car1)
console.log(newCar1)
// { name: 'BMW' }
// { name: 'Mercedes' }

// VD2:
const a = {
    name: 'BMW'
}

const b = {
    name: 'BMW'
}

console.log(a === b) // Do a và b không cùng địa chỉ ô nhớ

const c = {
    name: 'BMW'
}

const d = c

console.log(c === d) // Do c và d cùng địa chỉ ô nhớ 