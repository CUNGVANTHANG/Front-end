// Phân biệt var / let, const: Scope(phạm vi truy cập), Hosting
// Phân biệt const / var, let: Assignment

// 1. Scope(phạm vi truy cập)
// code block: if else, loop, {}, ...
// var có thể truy cập trong hoặc ngoài code block
// let và const chỉ có thể truy cập gần nhất trong code block

{
    var number1 = 1;
}

console.log(number1);
// 1

{
    let number2 = 1;
    const number3 = 2;
}

console.log(number2);
console.log(number3);
// Lỗi

// 2. Hosting
// Nghĩa là var có thể khai báo sau khi sử dụng, còn let và const chỉ có thể khai báo trước khi sử dụng

a = 1;
var a;
console.log(a);
// 1

b = 1;
let b;
console.log(b);
// Lỗi

c = 1;
const c;
console.log(c);
// Lỗi

// 3. Assignment
// Const chỉ có thể gán (toán tử =) 1 lần, không thể gán lần thứ 2

const a = 1;
a = 100;
console.log(a);
// Lỗi

const a = 1;
console.log(a);
// 1

// Trường hợp nên chú ý
const a = {
    course: "Javascript",
}

a.course = "PHP" // Tại vì a.course là thuộc tính của object, ta đang gán cho thuộc tính chứ không phải gán cho a
console.log(a.course);
// PHP

// Tổng kết:
// Code thuần: var
// Babel: const, let
// - Khi định nghĩa biến và không gán lại biến đó: const
// - Khi cần gán lại giá trị cho biến: let

