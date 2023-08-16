# Javascript Theory

## Mục lục
- [1. Biến, comments, built-in](#1-biến-comments-built-in)
- [2. Toán tử, kiểu dữ liệu](#2-toán-tử-kiểu-dữ-liệu)
- [3. Làm việc với hàm](#3-làm-việc-với-hàm)
- [4. Làm việc với chuỗi](#4-làm-việc-với-chuỗi)
- [5. Làm việc với số](#5-làm-việc-với-số)
- [6. Làm việc với mảng](#6-làm-việc-với-mảng)

## 1. Biến, comments, built-in
[:arrow_up: Mục lục](#mục-lục)

| Biến | Mô tả |
| :--- | :--- |
| ```var``` | Hoạt động trong phạm vi Local scope |
| ```let``` | Hoạt động trong phạm vi Code block |
| ```const``` | Hoạt động trong phạm vi Code block, không thể gán lại ```value``` cho biến |

- **Cách dùng comments**
```js
// comments
```

- **built-in:**

**1. `alert` - In ra dòng thông báo trên web**

```js
alert("Hello world")
```
**2. `console` - In ra dòng thông báo bên console**
```js
console.log("Thành công")
console.warn("Cảnh báo")
console.error("Có lỗi")
```
**3. `confirm` - In ra dòng thông báo trên web để xác nhận**
```js
var cf = confirm("Xác nhận")
```
Biến `cf` sẽ có giá trị kiểu Boolean là `true` nếu OK, `false` nếu Hủy
    
**4. `prompt` - Tạo ô input để nhập**
```js
var valuePrompt = prompt("Nhập giá trị")
```
Biến `valuePrompt` sẽ có giá trị mà ta nhập từ bàn phím
    
**5. `setTimeout` - Chạy 1 đoạn code sau một khoảng thời gian**
```js
setTimeout(function() {
  alert('Thong bao')
}, 1000) 
``` 
**6. `setInterval` - Chạy 1 đoạn code liên tục lặp đi lặp lại sau một khoảng thời gian**
```js
setInterval(function() {
  console.log('Day la log' + Math.random())
}, 1000)
```

## 2. Toán tử, kiểu dữ liệu
[:arrow_up: Mục lục](#mục-lục)

| Toán tử | Mô tả |  
| :--- | :--- |
| `+` | Cộng và Nối chuỗi |
| `===` | So sánh hai biểu thức có cùng kiểu dữ liệu và giá trị, thì kết quả là `true`, ngược lại là `false` |
| `!==` | So sánh ít nhất một trong hai điều kiện là đúng (khác kiểu hoặc khác giá trị), thì kết quả là `true`, ngược lại là `false` |

- **Kiểm tra kiểu dữ liệu sử dụng `typeof`**
```js
var fullName = 'Cung Thang';

console.log(typeof fullName)

// string
```

- **Kiểu dữ liệu nguyên thủy**

1. `Number`
2. `String`
3. `Boolean`
4. `Undefined`
5. `Null`
6. `Symbol`

- **Kiểu dữ liệu phức tạp**

1. `Function`
2. `Object`

- **Truthy - Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu boolean mà có giá trị `true` thì ta gọi giá trị đó là Truthy**
- **Falsy - Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu boolean mà có giá trị `false` thì ta gọi giá trị đó là Falsy**

Trong Javascript có 6 giá trị sau được coi là Falsy:
1. `false`
2. `0` (số không)
3. '' or "" (chuỗi rỗng)
4. `null`
5. `undefined`
6. `NaN`

## 3. Làm việc với hàm
```js
function addNumbers(a, b) {
    return a + b;
}

var result = addNumbers(5, 3); // 5 và 3 là các đối số
console.log(result); 
```

`arguments` là **đối số**, trong ví dụ trên đối số là `5, 3`

`parameters` là **tham số**, trong ví dụ trên tham số là `a, b`

- **Các loại function**

**1. Declaration function (Khai báo hàm)**
```js
showMessage()

function showMessage() {
  ...
}
```
*Chú ý:* `showMessage()` --> Có thể gọi trước khi viết function

**2. Expression function (Biểu thức hàm)**
```js
var showMessage = function() {
  ...
}
```

**3. Arrow function**
```js
showMessage = () => {
  ...
}
```

**Phân biệt Declaration function và Arrow function:**
```js
const person1 = {
    name: "Alice",
    sayHello: function() {
        console.log("Hello, " + this.name);
    }
};

// Khai báo đối tượng Person với phương thức sử dụng Arrow function
const person2 = {
    name: "Bob",
    sayHello: () => {
        console.log("Hello, " + this.name); // 'this' không tham chiếu đúng đối tượng person2
    }
};
```
`Arrow function` không có ngữ cảnh riêng biệt về `this`, nó kế thừa giá trị this từ ngữ cảnh bên ngoài. Trong khi `Declaration function` có ngữ cảnh riêng biệt về `this`, được xác định bởi cách hàm được gọi.

## 4. Làm việc với chuỗi
- **Sử dụng backslash (\)**
```js
var fullName = "Day la dau \\";
console.log(fullName)

// Day la dau \
```

- **Template string ES6**
```js
var firtsName = 'Thang';
var lastName = 'Cung';

console.log(`Toi la: ${firtsName} ${lastName}`);
// Toi la: Thang Cung
```

- **Làm việc với phương thức chuỗi**

| Phương thức | Mô tả |
| :--- | :--- |
| `length` | Kích thước chuỗi |
| `indexOf()` | Tìm vị trí chuỗi tìm thấy đầu tiên |
| `slice()` | Cắt chuỗi |
| `replace()` | Thay thế chuỗi |
| `toUpperCase()` | Chuỗi viết hoa |
| `toLowerCase()` | Chuỗi viết thường |
| `trim()` | Loại bỏ ký tự khoảng trắng ở 2 hai đầu |
| `split()` | Tách chuỗi thành mảng (Array) dựa vào điểm chung |
| `charAt` | Lấy kí tự |

## 5. Làm việc với số
- **Kiểm tra xem giá trị có phải là một số hữu hạn hay không**
```js
Number.isFinite(value)
```

- **Kiểm tra xem giá trị có phải là NaN hay không**
```js
isNaN(value)
```
