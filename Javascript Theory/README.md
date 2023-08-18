# Javascript Theory

## Mục lục
- [1. Biến, comments, built-in](#1-biến-comments-built-in)
- [2. Toán tử, kiểu dữ liệu](#2-toán-tử-kiểu-dữ-liệu)
- [3. Làm việc với hàm](#3-làm-việc-với-hàm)
- [4. Làm việc với chuỗi](#4-làm-việc-với-chuỗi)
- [5. Làm việc với số](#5-làm-việc-với-số)
- [6. Làm việc với mảng](#6-làm-việc-với-mảng)
- [7. Làm việc với object](#7-làm-việc-với-object)
- [8. Vòng lặp](#8-vòng-lặp)
- [9. Callback](#9-callback)
- [10. HTML DOM](#10-html-dom)

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
[:arrow_up: Mục lục](#mục-lục)

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
[:arrow_up: Mục lục](#mục-lục)

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
[:arrow_up: Mục lục](#mục-lục)

- **Kiểm tra xem giá trị có phải là một số hữu hạn hay không**
```js
Number.isFinite(value)
```

- **Kiểm tra xem giá trị có phải là NaN hay không**
```js
isNaN(value)
```

- **Làm việc với số**

| Phương thức | Mô tả |
| :--- | :--- |
| `toString()` | Chuyển đổi giá trị thành chuỗi |
| `toFixed()` |  Làm tròn một số thực đến một số lượng chữ số thập phân cụ thể và **trả về một chuỗi** đại diện cho số đã được làm tròn |

## 6. Làm việc với mảng
[:arrow_up: Mục lục](#mục-lục)

- **Khởi tạo mảng**

*Cách 1:*
```js
var languages = ['Javascript', 'PHP', 'Ruby', 'Dart', null, undefined, function () {}, {}, 123];
```

*Cách 2:*
```js
var languages = new Array('Javascript', 'PHP', 'Ruby', 'Dart', null, undefined, function () {}, {}, 123)
```

- **Kiểm tra có phải mảng (Array) không, sử dụng phương thức `isArray`**
```js
console.log(Array.isArray(languages))
// true
```

- **Làm việc với mảng I**

| Phương thức | Mô tả |
| :--- | :--- |
| `length` | Độ dài mảng |
| `toString()` | Chuyển đổi giá trị thành chuỗi |
| `join()` | Nối chuỗi |
| `pop()` | Xóa element cuối mảng và trả về phần tử đã xóa |
| `push()` | Thêm phần tử hoặc nhiều phần tử vào cuối mảng |
| `shift()` | Xóa element đầu mảng và trả về phần tử đã xóa |
| `unshift()` | Thêm phần tử hoặc nhiều phần tử vào đầu mảng |
| `splice()` | Xóa element vị trí bất kỳ trong mảng |
| `concat()` | Nối mảng |
| `slice()` | Cắt element tại vị trí trong mảng |

- **Làm việc với mảng II**

| Phương thức | Mô tả |
| :--- | :--- |
| `map()` | Dùng để tạo ra một mảng mới bằng cách áp dụng một hàm vào từng phần tử của mảng gốc |
| `reduce()` | Dùng để thực hiện một phép tích tổng hoặc tích luỹ trên các phần tử của mảng để trả về một giá trị duy nhất |
| `forEach()` | Dùng để lặp qua từng phần tử của mảng và thực hiện một hàm cho mỗi phần tử |
| `every()` | Dùng để kiểm tra xem tất cả các phần tử trong mảng có thỏa mãn một điều kiện cụ thể hay không |
| `some()` | Dùng để kiểm tra xem có ít nhất một phần tử trong mảng thỏa mãn một điều kiện cụ thể hay không. |
| `find()` | Dùng để tìm phần tử đầu tiên trong mảng thỏa mãn một điều kiện cụ thể |
| `filter()` | Dùng để tạo một mảng mới chứa tất cả các phần tử thỏa mãn một điều kiện cụ thể |

**1. map()**

Phương thức `map()` dùng để tạo ra một mảng mới bằng cách áp dụng một hàm vào từng phần tử của mảng gốc.

```js
var newArray = array.map(function(currentValue, index, array) {
    // return a new value based on currentValue
});
```
Trong đó:
- `array` là mảng gốc mà bạn muốn áp dụng phương thức `map()` lên.
- `currentValue` là giá trị hiện tại của mảng đang được xử lý.
- `index` là vị trí (chỉ số) của `currentValue` trong mảng.
- `newArray` là mảng mới được tạo ra sau khi áp dụng hàm lên từng phần tử của array.

Ví dụ:
```js
var numbers = [1, 2, 3, 4, 5];
var doubledNumbers = numbers.map(function(num) {
    return num * 2;
});

console.log(doubledNumbers); // Kết quả: [2, 4, 6, 8, 10]
```

**2. reduce()**

Phương thức `reduce` dùng để thực hiện một phép tích tổng hoặc tích luỹ trên các phần tử của mảng để trả về một giá trị duy nhất.

```js
var result = array.reduce(function(accumulator, currentValue, index, array) {
    // perform a reduction operation and return the updated accumulator
}, initialValue);
```
Trong đó: 
- `array` là mảng gốc mà bạn muốn áp dụng phương thức `reduce()` lên.
- `accumulator` là biến chứa giá trị tích luỹ trong quá trình duyệt qua các phần tử.
- `currentValue` là giá trị hiện tại của mảng đang được xử lý.
- `index` là vị trí (chỉ số) của `currentValue` trong mảng.
- `initialValue` là giá trị ban đầu của `accumulator` (có thể bỏ qua).

Ví dụ:
```js
var numbers = [1, 2, 3, 4, 5];
var sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log(sum); // Kết quả: 15
```

**3. forEach()**

Phương thức `forEach()` dùng để lặp qua từng phần tử của mảng và thực hiện một hàm cho mỗi phần tử.

```js
array.forEach(function(currentValue, index, array) {
    // code to be executed for each element
});
```
Trong đó: 
- `array` là mảng mà bạn muốn lặp qua.
- `currentValue` là giá trị hiện tại của mảng đang được xử lý.
- `index` là vị trí (chỉ số) của `currentValue` trong mảng.

Ví dụ:
```js
var colors = ['red', 'green', 'blue'];

colors.forEach(function(color) {
    console.log(color);
});

// Kết quả:
// red
// green
// blue
```

**4. every()**

Phương thức `every()` dùng để kiểm tra xem tất cả các phần tử trong mảng có thỏa mãn một điều kiện cụ thể hay không.

```js
var allPass = array.every(function(currentValue, index, array) {
    // return true or false based on a condition
});
```
Trong đó:
- `array` là mảng mà bạn muốn kiểm tra.
- `currentValue` là giá trị hiện tại của mảng đang được xử lý.
- `index` là vị trí (chỉ số) của `currentValue` trong mảng.
- `allPass` sẽ là `true` nếu tất cả các phần tử thỏa mãn điều kiện, và `false` nếu có ít nhất một phần tử không thỏa mãn.

Ví dụ:
```js
var numbers = [2, 4, 6, 8, 10];
var allEven = numbers.every(function(number) {
    return number % 2 === 0;
});

console.log(allEven); // Kết quả: true

var someOdd = numbers.every(function(number) {
    return number % 2 !== 0;
});

console.log(someOdd); // Kết quả: false
```

**5. some()**

Phương thức `some()` dùng để kiểm tra xem có ít nhất một phần tử trong mảng thỏa mãn một điều kiện cụ thể hay không.
```js
var anyPass = array.some(function(currentValue, index, array) {
    // return true or false based on a condition
});
```
Trong đó:
- `array` là mảng mà bạn muốn kiểm tra.
- `currentValue` là giá trị hiện tại của mảng đang được xử lý.
- `index` là vị trí (chỉ số) của `currentValue` trong mảng.
- `anyPass` sẽ là `true` nếu có ít nhất một phần tử thỏa mãn điều kiện, và `false` nếu không có phần tử nào thỏa mãn.

Ví dụ:
```js
var numbers = [2, 4, 6, 7, 10];
var anyOdd = numbers.some(function(number) {
    return number % 2 !== 0;
});

console.log(anyOdd); // Kết quả: true

var allOdd = numbers.some(function(number) {
    return number % 2 === 1;
});

console.log(allOdd); // Kết quả: true
```

**6. find()**

Phương thức `find()` dùng để tìm phần tử đầu tiên trong mảng thỏa mãn một điều kiện cụ thể.
```js
var foundElement = array.find(function(currentValue, index, array) {
    // return true or false based on a condition
});
```
Trong đó:
- `array` là mảng mà bạn muốn tìm kiếm.
- `currentValue` là giá trị hiện tại của mảng đang được xử lý.
- `index` là vị trí (chỉ số) của `currentValue` trong mảng.
- `foundElement` là phần tử đầu tiên thỏa mãn điều kiện, hoặc `undefined` nếu không tìm thấy phần tử nào thỏa mãn.

Ví dụ:
```js
var numbers = [2, 4, 6, 7, 10];
var oddNumber = numbers.find(function(number) {
    return number % 2 !== 0;
});

console.log(oddNumber); // Kết quả: 7

var evenNumber = numbers.find(function(number) {
    return number % 2 === 0;
});

console.log(evenNumber); // Kết quả: 2
```

**7. filter()**

Phương thức `filter()` dùng để tạo một mảng mới chứa tất cả các phần tử thỏa mãn một điều kiện cụ thể
```js
var newArray = array.filter(function(currentValue, index, array) {
    // return true or false based on a condition
});
```
Trong đó:
- `array` là mảng mà bạn muốn tìm kiếm.
- `currentValue` là giá trị hiện tại của mảng đang được xử lý.
- `index` là vị trí (chỉ số) của `currentValue` trong mảng.
- `newArray` là mảng mới được tạo ra, chứa các phần tử thỏa mãn điều kiện.

Ví dụ:
```js
var numbers = [2, 4, 6, 7, 10];
var oddNumbers = numbers.filter(function(number) {
    return number % 2 !== 0;
});

console.log(oddNumbers); // Kết quả: [7]

var evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});

console.log(evenNumbers); // Kết quả: [2, 4, 6, 10]
```

## 7. Làm việc với object
[:arrow_up: Mục lục](#mục-lục)

```js
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    sayHello: function() {
        console.log("Hello, my name is " + this.firstName + " " + this.lastName);
    }
};

console.log(person.firstName); // Kết quả: John
console.log(person.age); // Kết quả: 30
person.sayHello(); // Kết quả: Hello, my name is John Doe
```
Trong đó:
- `person` là biến đối tượng.
- `firstName`, `lastName`, `age` là các thuộc tính của đối tượng, có thể chứa các kiểu dữ liệu khác nhau như chuỗi, số, mảng, hoặc thậm chí là một đối tượng khác.
- `sayHello` là một phương thức của đối tượng, chứa một hàm được thực thi khi gọi phương thức.

- **1. Object constructor**

```js
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.sayHello = function() {
        console.log("Hello, my name is " + this.firstName + " " + this.lastName);
    };
}

var person1 = new Person("John", "Doe", 30);
var person2 = new Person("Jane", "Smith", 28);

person1.sayHello(); // Kết quả: Hello, my name is John Doe
person2.sayHello(); // Kết quả: Hello, my name is Jane Smith
```
Trong đó:
- `new` để tạo đối tượng
- `this` trong constructor sẽ trỏ tới đối tượng đó

- **2. Object prototype**

`prototype` dùng để thêm các phương thức và thuộc tính cho các đối tượng

```js
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

Person.prototype.sayHello = function() {
    console.log("Hello, my name is " + this.firstName + " " + this.lastName);
};

var person1 = new Person("John", "Doe", 30);
var person2 = new Person("Jane", "Smith", 28);

person1.sayHello(); // Kết quả: Hello, my name is John Doe
person2.sayHello(); // Kết quả: Hello, my name is Jane Smith
```

- **3. Object Math**

| Object | Mô tả |
| :--- | :--- |
| `Math.PI` | Trả về số PI |
| `Math.round()` | Làm tròn số |
| `Math.abs()` | Giá trị tuyệt đối |
| `Math.ceil()` | Làm tròn trên |
| `Math.floor()` | Làm tròn dưới |
| `Math.random()` | Random số |
| `Math.round()` | Làm tròn số |
| `Math.min()` | Trả về số nhỏ nhất|
| `Math.max()` | Trả về số lớn nhất |

## 8. Vòng lặp
[:arrow_up: Mục lục](#mục-lục)

- **1. Vòng lặp for in dùng để lặp qua các key**

```js
var myInfo = {
    name: 'Cung Thang',
    age: 19,
    address: 'Ha Noi'
};

for (var key in myInfo) {
    console.log(myInfo[key]); // key: name, age, address
}
```

- **2. Vòng lặp for of dùng để lặp qua các value**

```js
var languages = [
    'Javascript',
    'PHP',
    'Java'
];

for (var value of languages) {
    console.log(value); // Javascript, PHP, Java
} 
```

## 9. Callback
[:arrow_up: Mục lục](#mục-lục)

**Callback là hàm (function) được truyền qua đối số khi gọi hàm khác**

```js
function myFunction(param) {
    if (typeof param === 'function') {
        param('Học lập trình');
    }
}

function myCallback(value) {
    console.log('Value: ', value);
}

myFunction(myCallback);
```

## 10. HTML DOM
DOM - Document Object Model (mô hình tài liệu)

HTML DOM có 3 thành phần:

1. Element
2. Attribute
3. Text

- **1. Element Node & Attribute Node & Text Node**

```js
<h1 id="heading" class="heading" title="heading">Heading 123</h1>
```
Trong đoạn code: 
- `h1` là Element node
- `id`, `class`, `title` là Attribute node
- `Heading 123` là Text node

- **2. Get element methods**

Các phương thức lấy element:

1. `getElementById()`  --> Trả về element
2. `getElementsByClassName()`  --> Trả về HTML collection
3. `getElementsByTagName()`  --> Trả về HTML collection
4. `querySelector()`  --> Trả về element
5. `querySelectorAll()`  --> Trả về Node List
6. HTML collection

`document.anchors` Lấy ra thẻ a nhưng với điều kiện thẻ a phải có thuộc tính name=""

`document.forms` Lấy ra thẻ form

7. `document.write()`

- **3. DOM attribute**

```html
<h1>Heading</h1>
```
```js
var headingElement = document.querySelector('h1');
```
Cách 1: Setter - Điều kiện thuộc tính phải hợp lệ nghĩa là tồn tại trong element

```js
headingElement.title = 'heading'; // Thêm thuộc tính title vào thẻ h1
// <h1 title="heading">Heading</h1>

headingElement.className = 'heading'; // Thêm thuộc tính class vào thẻ h1
// <h1 class="heading">Heading</h1>

headingElement.data = 'heading'; // data không phải thuộc tính có sẵn trong element nên không hợp lệ
// <h1>Heading</h1>

console.log(headingElement.getAttribute('data')); // Sử dụng phương thức getAttribute có thể lấy ra được thuộc tính tự tạo mới
// data
```

Cách 2: Dùng để tạo thuộc tính mới hoặc thuộc tính đã có của element

```js
headingElement.setAttribute('class', 'heading');
// <h1 class="heading">Heading</h1>

headingElement.setAttribute('data', 'heading');
// <h1 data="heading">Heading</h1>
```

- **4. innerText & textContent**

```html
<h1 class="heading">

    <span style="display: none">Heading</span>
    <span>text</span>

    <style>
        .box {
            width: 100px;
            height: 100px;
        }
    </style>
</h1>
```

```js
var headingElement = document.querySelector('.heading');
```

```js
// innerText chỉ tồn tại trên element node, nên muốn lấy text node phải thông qua element node
console.log(headingElement.innerText); //  --> innerText sẽ in ra text node có trên màn hình trình duyệt
// text


// textContent tồn tại cả trên element node và text node
console.log(headingElement.textContent); // --> textContent sẽ in ra text node có trong html
//
// Heading
// text
// 
//
// .box {
//     width: 100px;
//     height: 100px;
// }

headingElement.innerText = `

New Heading

`
//
// New Heading
//

headingElement.textContent = `

New Heading

`
// New Heading
```

- **5. innerHTML & outerHTML**
