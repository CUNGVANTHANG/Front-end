// JSON
// 1. Là một định dạng dữ liệu (chuỗi)
// 2. JavaScript Object Notation
// 3. JSON: Number, Boolean, String, Null, Array, Object
// 4. stringify (Từ Javascript types -> JSON) / parser (Từ JSON -> Javascript types)

var json1 = '20'
var json2 = 'true'
var json3 = '"abc"'
var json4 = 'null'
var json5 = '["Javascript", "PHP"]'
var json6 = '{"name": "Cung Thang", "age": 20}'

// Chuyển từ JSON sang Javascript
var number = JSON.parse(json1);

console.log(number);
// 20

// Chuyển từ Javascript sang JSON
console.log(JSON.stringify({
    name: 'Cung Thang',
    age: 20,
}));

// {"name": "Cung Thang", "age": 20}