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
  - [A. Element Node & Attribute Node & Text Node](#a-element-node--attribute-node--text-node)
  - [B. Get element methods](#b-get-element-methods)
  - [C. DOM attribute](#c-dom-attribute)
  - [D. InnerText & textContent](#d-innertext--textcontent)
  - [E. InnerHTML & outerHTML](#e-innerhtml--outerhtml)
  - [F. Node properties](#f-node-properties)
  - [G. DOM CSS](#g-dom-css)
  - [H. ClassList](#h-classlist)
  - [J. DOM Events](#j-dom-events)
  - [K. PreventDefault and StopPropagation](#k-preventdefault-and-stoppropagation)
  - [L. Event Listener](#l-event-listener)
- [11. JSON, Promise, Fetch, Postman](#11-json-promise-fetch-postman)
  - [A. JSON](#a-json)
  - [B. Promise](#b-promise)
  - [C. Fetch](#c-fetch)
  - [D. Postman](#d-postman)
- [12. ECMAScript 6+](#12-ecmascript-6)
  - [A. Let, const](#a-let-const)
  - [B. Template Literals](#b-template-literals)
  - [C. Multi-line String](#c-multi-line-string)
  - [D. Arrow function](#d-arrow-function)
  - [E. Classes](#e-classes)
  - [F. Default parameter values](#f-default-parameter-values)
  - [G. Destructuring](#g-destructuring)
  - [H. Rest parameters](#h-rest-parameters)
  - [J. Spread](#j-spread)
  - [K. Enhanced object literals](#k-enhanced-object-literals)
  - [L. Tagged template literal](#l-tagged-template-literal)
  - [M. Modules](#m-modules)
  - [N. Optional chaining](#n-optional-chaining)
- [13. IIFE, Scope, Closure](#13-iife-scope-closure)
  - [A. IIFE](#a-iife)
  - [B. Scope](#b-scope)
  - [C. Closure](#c-closure)
- [14. Hoisting, Strict Mode, Data Types](#14-hoisting-strict-mode-data-types)
  - [A. Hoisting](#a-hoisting)
  - [B. Strict Mode](#b-strict-mode)
  - [C. Data Types](#c-data-types)
- [15. This, Bind, Call, Apply](#15-this-bind-call-apply)
  - [A. This](#a-this)
  - [B. Bind](#b-bind)
  - [C. Call](#c-call)
  - [D. Apply](#d-apply)
- [16. Nullish Coalescing Operator](#16-nullish-coalescing-operator)

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
[:arrow_up: Mục lục](#mục-lục)

DOM - Document Object Model (mô hình tài liệu)

HTML DOM có 3 thành phần:

1. Element
2. Attribute
3. Text

### A. Element Node & Attribute Node & Text Node
[:arrow_up: Mục lục](#mục-lục)

```js
<h1 id="heading" class="heading" title="heading">Heading 123</h1>
```
Trong đoạn code: 
- `h1` là Element node
- `id`, `class`, `title` là Attribute node
- `Heading 123` là Text node

### B. Get element methods
[:arrow_up: Mục lục](#mục-lục)

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

### C. DOM attribute
[:arrow_up: Mục lục](#mục-lục)

```html
<h1>Heading</h1>
```
```js
var headingElement = document.querySelector('h1');
```
**Cách 1**: Setter - Điều kiện thuộc tính phải hợp lệ nghĩa là tồn tại trong element

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

**Cách 2**: Dùng để tạo thuộc tính mới hoặc thuộc tính đã có của element

```js
headingElement.setAttribute('class', 'heading');
// <h1 class="heading">Heading</h1>

headingElement.setAttribute('data', 'heading');
// <h1 data="heading">Heading</h1>
```

### D. InnerText & textContent
[:arrow_up: Mục lục](#mục-lục)

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

### E. InnerHTML & outerHTML
[:arrow_up: Mục lục](#mục-lục)

- **`innerHTML`**

```html
 <div class="box"></div>
```
```js
var boxElement = document.querySelector('.box');
```
```js
boxElement.innerHTML = '<h1>Heading</h1>';
{/* 
<div class="box">
    <h1>Heading</h1>
</div> 
*/}

boxElement.innerHTML = 'New heading';
{/*
<div class="box">New heading</div>
*/}

boxElement.innerHTML = '<h1 title="Heading">New heading</h1>';
{/* 
<div class="box">
    <h1 title="Heading">New heading</h1>
</div> 
*/}
```

- **`outerHTML`**

```html
<div class="box">
    <h1 title="Heading">New heading</h1>
</div> 
```
```js
var boxElement = document.querySelector('.box');
```
```js

console.log(boxElement.innerHTML);    // --> innerHTML lấy tất cả element nằm bên trong element box
// <h1 title="Heading">New heading</h1>

console.log(boxElement.outerHTML);   // --> outerHTML lấy tất cả element nằm trong và element box của element box
{/* 
<div class="box">
    <h1 title="Heading">New heading</h1>
</div>  
*/}

boxElement.innerHTML = '<span>Test</span>'; // --> Ghi đề thẻ h1 là element nằm bên trong element box
{/* 
<div class="box">
    <span>Test</span>
</div>  
*/}

boxElement.outerHTML = '<span>Test</span>'; // --> Ghi đề element box
{/*
<span>Test</span>
*/}
```

### F. Node properties
[:arrow_up: Mục lục](#mục-lục)

```js
// Cách xem tất cả các node

var boxElement = document.querySelector('.box');

console.log([boxElement]); // Thêm []
```

### G. DOM CSS
[:arrow_up: Mục lục](#mục-lục)

```js
// background-position <-> backgroundPosition (kiểu viết camelCase)

var boxElement = document.querySelector('.box');

// Cách 1: Thêm từng thuộc tính
boxElement.style.width = '100px';
boxElement.style.height = '200px';
boxElement.style.backgroundColor = 'red';

// Cách 2: Thêm nhiều thuộc tính
Object.assign(boxElement.style, {
    width: '200px',
    height: '100px',
    backgroundColor: 'green',
});
```

### H. ClassList
[:arrow_up: Mục lục](#mục-lục)

```html
<style>
    .red {
        color: red;
    }
</style>

<div class = "box box-2"></div> 
```
```js
var boxElement = document.querySelector('.box');
```
```js
// 1. add (thêm class vào class)
boxElement.classList.add('red');

{/* <div class = "box box-2 red"></div>  */}

// 2. contains (kiểm tra class có tồn tại trả về true/false)
boxElement.classList.contains('red');

{/* <div class = "box box-2 red"></div>  */}
// true

// 3. remove (xóa class trong class)
boxElement.classList.remove('red');

{/* <div class = "box box-2"></div>  */}

// 4. toggle (nếu red tồn tại trong class thì xóa đi, nếu red không tồn tại trong class thì thêm vào)
setInterval(() => {
    boxElement.classList.toggle('red');
}, 1000);

{/* <div class = "box box-2 red"></div>  */}
// Sau 1 giây
{/* <div class = "box box-2"></div>  */}
// Sau 1 giây
{/* <div class = "box box-2 red"></div>  */}
// ...
```

### J. DOM Events
[:arrow_up: Mục lục](#mục-lục)

**1. Attribute events (Sử dụng thuộc tính trong file HTML)**

```js
<h1 onclick="console.log(this)">
    <span onclick="console.log(this)">DOM events</span>
</h1>
```
console:

```
<span onclick="console.log(this)">DOM events</span> 
<h1 onclick="console.log(this)">
    <span onclick="console.log(this)">DOM events</span>
</h1> 
```
Sự kiện nổi bọt: Nghĩa là nó sẽ lắng nghe sự kiện của thằng con trước xong mới đến thằng cha là thẻ h1

**2. Assign envent using the element node**

```html
<h1>
    <span>DOM events 1</span>
</h1>
<h1>
    <span>DOM events 2</span>
</h1>
<h1>
    <span>DOM events 3</span>
</h1> 
```
```js
var h1Element = document.querySelectorAll('h1');

for(var i = 0; i < h1Element.length; i++){
    h1Element[i].onclick = function(e) { // e ở đây nghĩa là event
        console.log(e.target);
    }
}
```

**Ví dụ:**

```html
<input type="text">
<input type="checkbox">
<select>
    <option value="valuel">l</option>
    <option value="value2">2</option>
    <option value="value3">3</option>
</select> 
```

```js
// 1. Input / select
// type="text"
var inputElement = document.querySelector('input[type="text"]');

// C1: In ra trực tiếp trên console
inputElement.onchange = function(e) { // onchange chỉ in ra sự thay đổi
    console.log(e.target.value);
}

inputElement.oninput = function(e) { 
    console.log(e.target.value);
}

// C2: In ra khi thực hiện câu lệnh inputValue trên console
var inputValue
inputElement.oninput = function(e) {
    inputValue = e.target.value;
}

// type="checkbox"
var inputElement = document.querySelector('input[type="checkbox"]');

inputElement.onchange = function(e) { 
    console.log(e.target.checked); // Trả về true/false
}

// select
var inputElement = document.querySelector('select');
inputElement.onchange = function(e) {
    console.log(e.target.value);
}

// 2. Key up / down
var inputElement = document.querySelector('input[type="text"]');
inputElement.onkeydown = function(e) {
    console.log(e.target.value);
}

// Người dùng nhập: ab
// Console in ra:
// 
// a

inputElement.onkeyup = function(e) {
    console.log(e.target.value);
}

// Người dùng nhập: ab
// Console in ra:
// a
// ab

// Sự khác nhau giữa keyup và keydown là keydown sẽ in ra trước khi nhập

// Ứng dụng tạo ra Esc(Thoát khỏi trang)

inputElement.onkeyup = function(e) {
    console.log(e.which); // Sẽ in ra mã ASCII
    switch(e.which) {
        case 27:
            console.log('Exit');
            break;
    }
}

// Đối với cả trang web làm như sau:
document.onkeydown = function(e) {
    console.log(e.which); 
    switch(e.which) {
        case 27:
            console.log('Exit');
            break;
    }
}

// onkeydown là nhấp phím xuống
// onkeyup là nhấp phím lên
// onkeypress là nhấp phím xuống và giữ
```

### K. PreventDefault and StopPropagation
[:arrow_up: Mục lục](#mục-lục)

**1. preventDefault dùng để ngăn chặn hành vi mặc định** 

*Ví dụ 1:*

```html
<a href="https://f8.edu.vn">
    Học Lập trình
</a>
<br />
<a href="https://google.com.vn">
    Tìm kiếm
</a>

// Khi bấm vào thẻ a chứa href="https://f8.edu.vn và href="https://google.com.vn sẽ tự động chuyển sang trình duyệt của trang web đó
// Mục tiêu: Muốn thẻ a chứa href="https://f8.edu.vn sẽ chuyển trang, còn thẻ a chứa href="https://google.com.vn sẽ không chuyển trang
```

```js
var aElements = document.links;

for(var i = 0; i < aElements.length; ++i) {
    aElements[i].onclick = function(e) {
        if (!e.target.href.startsWith('https://f8.edu.vn')) { // Thuộc tính href không chứa https://f8.edu.vn thì sẽ ngăn chặn hành vi mặc định của thẻ a
            e.preventDefault();
        }
    }
}
```

*Ví dụ 2:*

```html
<style>
    ul {
        display: none;
    }

    input:focus ~ ul {
        display: block;
    }
</style>

<input placeholder="Tìm kiếm"/> 
<ul>
    <li>Javascript</li>
    <li>PHP</li>
    <li>Golang</li>
</ul>

// Trình duyệt hiển thị hộp tìm kiếm, khi click vào sẽ hiện Javascript, PHP, Golang
// Điểm yếu là không thể bấm vào Javascript, PHP, Golang do CSS display: none
```

```js
var ulElement = document.querySelector('ul');

ulElement.onmousedown = function(e) { // Lắng nghe sự kiện khi nhấp chuột xuống
    e.preventDefault(); // Ngăn chặn hành vi mặc định
}

ulElement.onclick = function(e) {
    console.log(e.target);
}
```

**2. stopPropagation**

```html
<div>
    DIV 
    <button>CLick me!</button>
</div>

// Sự kiện nổi bọt: Khi click chuột vào Click me! nó sẽ in ra cả DIV và Click me!
// Khắc phục: Khi click chuột vào Click me! chỉ in ra Click me!
```

```js
document.querySelector('div').onclick = 
    function() {
        console.log('DIV')
    }

document.querySelector('button').onclick = 
    function(e) {
        e.stopPropagation();
        console.log('Click me!')
    }
```

### L. Event Listener
[:arrow_up: Mục lục](#mục-lục)

```js
// 1. Xử lý nhiều việc khi 1 event xảy ra
// 2. Lắng nghe / Hủy bỏ lắng nghe

// DOM events
var btn = document.getElementById('btn');

btn.onclick = function() { // Lắng nghe sự kiện việc 1, việc 2, việc 3
    // Việc 1
    console.log('Viec 1');
    // Việc 2
    console.log('Viec 2');
    // Việc 3
    alert('Viec 3')
}

// Hủy bỏ lắng nghe bằng cách ghi đè 
setTimeout(function () {
    btn.onclick = function () {} // Hủy lắng nghe sự kiện việc 1, việc 2, việc 3
}, 3000);

// Event listener
var btn = document.getElementById('btn');

function viec1() {
    console.log('Viec 1');
}
function viec2() {
    console.log('Viec 2');
}

btn.addEventListener('click', viec1); // Lắng nghe sự kiện việc 1
btn.addEventListener('click', viec2); // Lắng nghe sự kiện việc 2

setTimeout(function () {
    btn.removeEventListener('click', viec1) // Hủy bỏ lắng nghe sự kiện việc 1
})

// So sánh DOM event vs Event listener:
// DOM event dùng để lắng nghe sự kiện đơn giản hoặc không hủy bỏ lắng nghe, DOM event giúp viết code ngắn gọn dễ hiểu
// Event listener dùng để lắng nghe sự kiện có thể dùng để hủy bỏ lắng nghe từng sự kiện 1 cách dễ dàng
```

## 11. JSON, Promise, Fetch, Postman
[:arrow_up: Mục lục](#mục-lục)

### A. JSON
[:arrow_up: Mục lục](#mục-lục)

**1. JSON là gì?**

1. Là một định dạng dữ liệu (chuỗi)
2. JavaScript Object Notation
3. JSON: Number, Boolean, String, Null, Array, Object
4. stringify (Từ Javascript types -> JSON) / parser (Từ JSON -> Javascript types)

*Ví dụ:*

```js
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
```

**2. JSON server**

```js
// Cách cài package.json trong 1 thư mục
// npm init
// npm i json-server

// Tiếp theo vào file package.json thêm "start": "json-server --watch db.json" trong phần "scripts"
// npm start

// {
//     "name": "json_server",
//     "version": "1.0.0",
//     "description": "",
//     "main": "index.js",
//     "scripts": {
//       "start": "json-server --watch db.json",
//       "test": "echo \"Error: no test specified\" && exit 1"
//     },
//     "author": "",
//     "license": "ISC",
//     "dependencies": {
//       "json-server": "^0.17.3"
//     }
//   }
  
var courseApi = 'http://localhost:3000/courses';

fetch(courseApi)
    .then(function(response) {
        return response.json();
    })

    .then(function(courses) {
        console.log(courses);
    });
```

### B. Promise
[:arrow_up: Mục lục](#mục-lục)

- **1. sync (đồng bộ)**

```js
// sync (đồng bộ)
console.log(1);
console.log(2);

// 1
// 2
// Nghĩa là chạy theo trình tự từ trên xuống dưới
// Hay nghĩa là console.log(1) chạy trước xong đến console.log(2)
```

**async (bất đồng bộ)**

```js
// async (bất đồng bộ)
// setTimeout, setInterval, fetch, XMLHttpRequest, file reading, request animation frame
// Khắc phục bằng callback

setTimeout(function() { // sleep
    console.log(1);
}, 1000);

console.log(2);

// 2
// 1
// Nghĩa là in ra không theo trình tự, thực tế thì nó vẫn chạy theo trình tự nhưng có sự cản trở 
```

- **2. pain (nỗi đau)**

```js
// Callback hell
setTimeout(function() {
    console.log(1); // Việc 1
    setTimeout(function() {
        console.log(2); // Việc 2
        setTimeout(function() {
            console.log(3); // Việc 3
            setTimeout(function() {
                console.log(4); // Việc 4
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
```

- **3. concept (ý tưởng)**

```js
// Trả lời phỏng vấn về promise
// Promise được sinh ra để xử lý những thao tác bất đồng bộ
// Trước khi có promise thì chúng ta thường sử dụng callback và callback có xảy ra 1 vấn đề là callback hell
// Để tạo ra 1 promise thì ta sẽ sử dụng từ khóa new với Promise trong Contructor của nó, rồi truyền 1 Executor function, trong Executor function nhận được 2 tham số resolve và reject
// Resolve gọi khi thao tác xử lý thành công
// Reject gọi khi thao tác xử lý thất bại 
// Chúng ta sử dụng qua các phương thức .then và .catch
// .then được thực thi khi mà promise được resolve
// .catch được thực thi khi mà promise được reject

// Bước 1: new Promise
// Bước 2: Executor

// Tồn tại ở 3 trạng thái
// 1. Pendding (chờ đợi thành công hay thất bại)
// 2. Fulfilled (thành công)
// 3. Rejected (Thất bại)
 
var promise = new Promise(
    // Executor
    function(resolve, reject) {
        // Logic
        // Thành công: resolve()
        // Thất bại: reject()

        // Fake call API
        resolve([
            {
                id: 1,
                name: 'Javascript'
            }
        ]);

        reject('Co loi!');
    }
);

promise
    .then(function(courses) {
        console.log(courses);
    })
    .catch(function(error) {
        console.log(error);
    })
    .finally(function() {
        console.log('Done!');
    });
```

- **4. chain (kết nối)**

```js
// Bài toán 1:
var promise = new Promise(
    // Executor
    function(resolve, reject) {
        // Logic
        // Thành công: resolve()
        // Thất bại: reject()

        resolve();
    }
);

// Cách hoạt động 1: Chạy dọc từ trên xuống dưới
promise
    .then(function() {
        console.log(1);
    })
    .then(function() {
        console.log(2);
    })
    .then(function() {
        console.log(3);
    })
    .catch(function(error) {
        console.log(error);
    })
    .finally(function() {
        console.log('Done!');
    });
// 1
// 2
// 3
// Done!

// Cách hoạt động 2: Chạy dọc từ trên xuống dưới, nhận giá trị data từ thằng phía trên
promise
    .then(function() {
        return 1;
    })
    .then(function(data) {
        console.log(data);
        return 2;
    })
    .then(function(data) {
        console.log(data);
        return 3;
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log(error);
    })
    .finally(function() {
        console.log('Done!');
    });

// 1
// 2
// 3
// Done!

// Cách hoạt động 3: Nếu thằng trên không return gì cả, thì thằng dưới sẽ trả về undefined
promise
    .then(function() {
      
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log(error);
    })
    .finally(function() {
        console.log('Done!');
    });

// undefined
// Done!

// Cách hoạt động 4: return Promise: Thằng thứ 2 phải đợi thằng 1 thực thi promise xong
promise
    .then(function() {
        return new Promise(function(resolve) {
            setTimeout(resolve, 3000);
        });
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log(error);
    })
    .finally(function() {
        console.log('Done!');
    });

// undefined
// Done!

// Bài toán 2:
function sleep(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

sleep(1000)
    .then(function() {
        console.log(1);
        return sleep(1000);
    }) 
    .then(function() {
        console.log(2);
        return sleep(1000);
    }) 
    .then(function() {
        console.log(3);
        return sleep(1000);
    }) 
    .then(function() {
        console.log(4);
        return sleep(1000);
    }); 

// 1
// 2
// 3
// 4
    
```

- **5. methods (resolve, reject, all)**

```js
// Bài toán 1: 
function sleep(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

sleep(1000)
    .then(function() {
        console.log(1);
        return sleep(1000);
    }) 
    .then(function() {
        console.log(2);
        return new Promise(function(resolve, reject) {
            reject('Co loi!');
        });
    }) 
    .then(function() {
        console.log(3);
        return sleep(1000);
    }) 
    .then(function() {
        console.log(4);
        return sleep(1000);
    }) 
    .catch(function(error) {
        console.log(error);
    })

// 1
// 2
// Co loi!

// 1. Promise.resolve
// 2. Promise.reject
// 3. Promise.all

var promise = Promise.resolve('Success!'); // Luôn luôn thành công

promise 
    .then(function (result) {
        console.log('result: ', result);
    })
    .catch(function(err) {
        console.log('err: ', err);
    })

// result: Success!

var promise = Promise.reject('Error!'); // Luôn luôn thất bại

promise 
    .then(function (result) {
        console.log('result: ', result);
    })
    .catch(function(err) {
        console.log('err: ', err);
    })

// err: Error!

// Bài toán 2:
var promise1 =  new Promise(
    function(resolve) {
        setTimeout(function() {
            resolve([1]);
        }, 2000);
    }
);

var promise2 =  new Promise(
    function(resolve) {
        setTimeout(function() {
            resolve([2, 3]);
        }, 5000);
    }
);

// Nếu viết như thế này thì tổng thời gian chạy 2 promise sẽ là 7s
// Khắc phục bằng cách sử dụng all thì tổng thời gian chạy 2 promise chỉ còn là 5s

Promise.all([promise1, promise2])
    .then(function(result) {
        var result1 = result[0];
        var result2 = result[1];

        console.log(result1.concat(result2));
    })

// [1, 2, 3]

// Bài toán 3: 
var promise1 =  new Promise(
    function(resolve) {
        setTimeout(function() {
            resolve([1]);
        }, 2000);
    }
);

var promise2 =  Promise.reject('Co loi!');

Promise.all([promise1, promise2])
    .then(function([result1, result2]) {
        console.log(result1.concat(result2));
    })
    .catch(function(error) {
        console.log(error);
    });

// Co loi!
```

### C. Fetch
[:arrow_up: Mục lục](#mục-lục)

1. Front-end: Xây dựng giao diện người dùng
2. Back-end: Xây dựng logic xử lý + Cơ sở dữ liệu

API (URL) -> Application Programing Interface
Cổng giao tiếp giữa các phần mềm

Backend -> API (URL) -> Fetch -> JSON/XML -> JSON.parse -> Javascript types -> Render ra giao diện với HTML

```js
var postApi = 'https://jsonplaceholder.typicode.com/posts'

fetch(postApi) 
    .then(function(response) {
        return response.json();
        // JSON.parse: JSON -> Javascript types
    })

    .then(function(posts) {
        var htmls = posts.map(function(post) {
            return `<li>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </li>`;
        });

        var html = htmls.join('');
        document.getElementById('comment-block').innerHTML = html;
    })

    .catch(function() {
        console.log('Có lỗi!');
    });
```

### D. Postman
[:arrow_up: Mục lục](#mục-lục)

```js
// Fetch
// - JSON server: API Server (Fake) / Mock API
// - CRUD (Phương thức)
//      - Create: Tạo mới -> POST
//      - Read: Lấy dữ liệu -> GET
//      - Update: Chỉnh sửa -> PUT / PATCH
//      - Delete: Xóa -> DELETE
// - Postman

// Sử dụng phần mềm postman
// Gán link vào: http://localhost:3000/courses
// Muốn post thì vào phần x-www-form-urlencoded
// Muốn delete/ put thì thêm id vào trước link:
// VD: id = 2 -> http://localhost:3000/courses/2
// Xong bấm Send
```

## 12. ECMAScript 6+
[:arrow_up: Mục lục](#mục-lục)

- **ECMAScript 6+ là gì?**

### A. Let, const
[:arrow_up: Mục lục](#mục-lục)

1. Scope(phạm vi truy cập)

- Code block: `if` `else`, loop, `{}`, ...
- `var` có thể truy cập trong hoặc ngoài code block
- `let` và `const` chỉ có thể truy cập gần nhất trong code block

2. Hosting

Nghĩa là `var` có thể khai báo sau khi sử dụng, còn `let` và `const` chỉ có thể khai báo trước khi sử dụng

3. Assignment

`const` chỉ có thể gán (toán tử =) 1 lần, không thể gán lần thứ 2

### B. Template Literals
[:arrow_up: Mục lục](#mục-lục)

```js
// Viết bình thường
const course = 'Javascript';
const course2 = 'PHP ' + course;
console.log(course2);

// Viết kiểu Template string
const courseName = 'Javascript';
const courseName2 = 'PHP';
const courseName3 = `${courseName} ${courseName2}`
console.log(courseName3);
// Javascript PHP
```

### C. Multi-line String
[:arrow_up: Mục lục](#mục-lục)

```js
// Viết bình thường
const lines = 'line 1\n'
    + 'line 2\n'
    + 'line 3\n'
    + 'line 4\n'
    + 'line 5\n'

console.log(lines);
// line 1
// line 2
// line 3
// line 4
// line 5

// Viết kiểu template string
const line = `line 1
line 2
line 3`

console.log(line);
// line 1
// line 2
// line 3
```

### D. Arrow function
[:arrow_up: Mục lục](#mục-lục)

```js
// Arrows function không viết được cho trường hợp có context, function contructor...
// Viết bình thường
const logger = function(log) {
    console.log(log);
}

logger('Message...');

// Viết kiểu arrow function: bỏ từ function đi, thêm => vào sau đối số
const logger1 = log => {
    console.log(log);
}

logger1('Message...');

// Phân biệt => {}, =>, => ({})
const sum = (a, b) => a + b; // => không phải return 

const sum1 = (a, b) => { // => {} phải return 
    return a + b;
}

const sum2 = (a, b) => ({a: a, b:b}); // => ({}) không phải return 
```

### E. Classes
[:arrow_up: Mục lục](#mục-lục)

```js
// function constructor
function Course(name, price) {
    this.name = name;
    this.price = price;

    this.getName = function() {
        return this.name;
    };
}

// classes (sẽ viết gọn gàng hơn function construct)
class Course {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getName() {
        return this.name;
    }
}
```

### F. Default parameter values
[:arrow_up: Mục lục](#mục-lục)

```js
// Viết bình thường
function logger(log) {
    if(typeof log === 'undefined') {
        log = 'Gia tri mac dinh!';
    }
    console.log(log);
}

logger();
// Gia tri mac dinh!

// Nên viết thành
function logger1(log = 'Gia tri mac dinh') {
    console.log(log);
}

logger1();
// Gia tri mac dinh!
```

### G. Destructuring
[:arrow_up: Mục lục](#mục-lục)

```js
// Bình thường viết
var array = ['Javascript', 'PHP', 'Ruby'];

var a = array[0];
var b = array[1];
var c = array[2];

console.log(a, b, c);
// Javascript, PHP, Ruby

// 1. Destructuring (phân rã) sẽ viết
// VD1:
var array = ['Javascript', 'PHP', 'Ruby'];

var [a, b, c] = array;

console.log(a, b, c);
// Javascript, PHP, Ruby
// VD2:
var array = ['Javascript', 'PHP', 'Ruby'];

var [a, , c] = array;

console.log(a, c);
// Javascript, Ruby
```
### H. Rest parameters
[:arrow_up: Mục lục](#mục-lục)

```js
// 1. Toán tử Rest ... lấy ra những phần còn lại
// VD1:
var array = ['Javascript', 'PHP', 'Ruby'];

var [a, ...rest] = array;

console.log(a); // Javascript
console.log(rest); // ["PHP", "Ruby"]

// VD2:
var course = {
    name: 'Javascript',
    price: 1000,
    image: 'image-address',
    children: {
        name: 'ReactJS',
    }
};

// Đổi tên name: parentName, name: childName do 2 name trùng tên nhau
var { name: parentName, children: { name: childrenName } } = course;

console.log(parentName);
console.log(childrenName);

// 2. Toán tử Rest ... trở thành mảng gần giống Arguments
// VD1:
function logger(...params) {
    console.log(params);
}

console.log(logger(1,2,3,4,5,6,7,8));
// [1,2,3,4,5,6,7,8]

// VD2:
function logger([a, b, ...rest]) {
    console.log(a);
    console.log(b);
    console.log(rest);
}

logger([2, 6, 12, 3, 4, 4])
// 2
// 6
// [12, 3, 4, 4]
```

### J. Spread
[:arrow_up: Mục lục](#mục-lục)

```js
// Toán tử Spread ... có tác dụng bỏ đi dấu [], {}
// VD1:
var array1 = ['Javascript', 'Ruby', 'PHP'];

var array2 = ['ReactJS', 'Dart'];

var array3 = [...array2, ...array1];

console.log(array3);
// ['ReactJS', 'Dart', 'Javascript', 'Ruby', 'PHP']

// VD2:
var object1 = {
    name: 'Javascript',
};

var object2 = {
    price: 1000,
};

var object3 = {
    ...object1,
    ...object2
};

console.log(object3);
// {name: 'Javascript', price: 1000}

// VD3:
var array = ['Javascript', 'PHP', 'Ruby'];

function logger(...rest){
    for(var i = 0; i < rest.length; i++) {
        console.log(rest[i]);
    }
}

logger(...array);
// Javascript
// PHP
// Ruby
```

### K. Enhanced object literals
[:arrow_up: Mục lục](#mục-lục)

```js
// 1. Định nghĩa key: value cho object
// 2. Định nghĩa method cho object
// 3. Định nghĩa key cho object dưới dạng biến

// VD1:
// Viết bình thường
var name = 'Javascript';
var price = '1000';

var course = {
    name: name,
    price: price,
    getName: function() {
        return name;
    }
};

// Nên viết thành
var name = 'Javascript';
var price = '1000';

var course = {
    name,
    price,
    getName(){
        return name;
    }
};

// VD2:
// Viết bình thường
const course = {
    name: 'Javascript',
    price: 1000
};


// Viết thành
var fieldName = 'name';
var fieldPrice = 'price';

const course = {
    [fieldName]: 'Javascript',
    [fieldPrice]: 1000
};
```

### L. Tagged template literal
[:arrow_up: Mục lục](#mục-lục)

```js
function hightlight([first, ...strings], ...values) {
    return values.reduce(
        (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()],
        [first]
    )
    .join('');
}

var brand = 'F8';
var course = 'Javascript';

const html = hightlight`Học lập trình ${course} tại ${brand}!`;  // Tagged template literal

console.log(html); // Học lập trình <span>Javascript</span> tại <span>F8</span>!
```

### M. Modules
[:arrow_up: Mục lục](#mục-lục)

```js
// File logger.js
import { TYPE_LOG } from './constants.js'

function logger(log, type = TYPE_LOG) {
    console[type](log);
}

export default logger; // Đẩy logger ra ngoài
// 1 module chỉ export default được 1 cái

// File constants.js
export const TYPE_LOG = 'log';
export const TYPE_WARN = 'warn';
export const TYPE_ERROR = 'error';


// File main.js
// Modules: Import / Export
// VD1: Trực tiếp
import logger from './logger.js'; // export default

import {
    TYPE_LOG,
    TYPE_WARN,
    TYPE_ERROR
} from './constants.js'

// Nếu không:
// import {
//     TYPE_LOG,
//     TYPE_WARN,
//     TYPE_ERROR
// } from './constants.js'
// mà:
// import constants from './constants.js sẽ sinh ra lỗi bởi vì không export default
// Cách khắc phục:

import * as constants from './constants.js'
console.log(constants); // object

logger('Test message...', TYPE_ERROR)

// VD2: Trung gian
import { logger2 } from './logger/index.js';
import * as constants from './constants.js'

console.log(constants); // object
logger2('Test message...', constants.TYPE_WARN)
```

### N. Optional chaining
[:arrow_up: Mục lục](#mục-lục)

```js
// Optional chaining (?.)

const obj = {
    name: 'Alice',
    cat: {
        name: 'Dinah',
        cat2: {
            name: 'Dinah 2',
            cat3: {
                name: 'Dinah 3'
            }
        }
    }
}

// Bình thường sẽ viết
if(
    obj.cat &&
    obj.cat.cat2 &&
    obj.cat.cat2.cat3
) {
    console.log(obj.cat.cat2.cat3.name) // Dinah 3
}

// Optional chaining cú pháp viết
if(obj?.cat?.cat2?.cat3) {  // Optional chaining (?.) được sử dụng khi không thực sự chắc chắn key tồn tại
    console.log(obj.cat.cat2.cat3.name) // Dinah 3
}

// VD2:
const obj2 = {
    getName(value) {
        console.log(value);
    }
}

obj2.getName?.(123); // 123
```

Dấu `?` có thể được sử dụng **để chỉ định một thuộc tính của một đối tượng là tùy chọn**. Điều này có nghĩa là thuộc tính đó có thể có hoặc không có trong đối tượng.

```ts
interface Person {
  name: string;
  age?: number; // age is optional
}

const person1: Person = { name: "Alice" };
const person2: Person = { name: "Bob", age: 30 };
```

complier ra

```js
const person1 = { name: "Alice" };
const person2 = { name: "Bob", age: 30 };
```

Dấu `?` cũng có thể được sử dụng để **chỉ định một tham số của một hàm là tùy chọn**. Điều này có nghĩa là **tham số đó có thể có hoặc không** khi hàm được gọi.

```js
function greet(name, greeting) {
  return greeting ? `${greeting}, ${name}!` : `Hello, ${name}!`;
}

console.log(greet("Alice")); // Output: "Hello, Alice!"
console.log(greet("Bob", "Good morning")); // Output: "Good morning, Bob!"
```

Dấu `?.` cho phép bạn truy cập vào thuộc tính của một đối tượng một cách an toàn, **nghĩa là nếu đối tượng hoặc thuộc tính không tồn tại (undefined hoặc null), nó sẽ trả về undefined thay vì gây ra lỗi**.

```js
const user = {
  address: {
    street: "123 Main St",
    city: "Anytown"
  }
};

const street = user?.address?.street; // "123 Main St"
const zipcode = user?.address?.zipcode; // undefined
```

## 13. IIFE, Scope, Closure
### A. IIFE
[:arrow_up: Mục lục](#mục-lục)

```js
// IIFE - Immediately Invoked Function Expression

// 1. IIFE trông như nào?
// 2. Dùng dấu ; trước IIFE
// 3. IIFE là hàm "private"
// 4. Sử dụng IIFE khi nào?
// 5. Các cách tạo ra một IIFE
// 6. Ví dụ sử dụng IIFE

// 1. IIFE trông như nào?
(function () { // IIFE - Tạo ra function xong đó gọi ngay function đó
    console.log('NOW NOW') // NOW NOW
})()

(function(message) {
    console.log('Message: ', message) // Chao ban
})('Chao ban')

// 2. Dùng dấu ; trước IIFE
// 3. IIFE là hàm "private"
;(function myFunc() {
    i++
    console.log(i)

    if (i < 10)
        myFunc()
})()
// Chạy bình thường in ra 1 2 3 4 5 6 7 8 9 10

;(function myFunc() {
    console.log('NOW')
})()

myFunc()
// Lỗi vì IIFE là hàm "private" không gọi ở ngoài được

// 4. Sử dụng IIFE khi nào?
// Sử dụng IIFE khi mà viết với khối lượng code lớn, rất nhiều biến, hàm có thể bị trùng lặp dẫn đến ghi đè hoặc bị lỗi
// Ta sẽ dùng IIFE để sử dụng trong hàm mà không ảnh hưởng đến biến, hàm xung quanh

// 5. Các cách tạo ra một IIFE
// C1:
;(function () {
    let fullName = 'Cung Thang'
    console.log(fullName)
})()

// C2:
;(function () {
    let fullName = 'Cung Thang'
    console.log(fullName)
}())

// C3: Dùng toán tử +, -, !... vào trước
+function () {
    let fullName = 'Cung Thang'
    console.log(fullName)
}()

// 6. Ví dụ sử dụng IIFE
const app = {
    cars: [],
    add(car) {
        this.cars.push(car)
    },
    edit(index, car) {
        this.cars[index] = car
    },
    delete(index) {
        this.cars.splice(index, 1)
    }
}
// Xảy ra trường hợp khi ta add.cars = null xong đó all.cart = 'Mazda' xảy ra lỗi
// Dẫn đến có thể hỏng ứng dụng

// Khắc phục sử dụng IIFE để bảo toàn tính toàn vẹn
const app1 = (function() {
    // Private 
    const cars = []  

    // Public 
    return {
        get(index) {

        },
        add(car) {
            cars.push(car)
        },
        edit(index, car) {
            cars[index] = car
        },
        delete(index) {
            cars.splice(index, 1)
        }
    }  
})()
```

### B. Scope
[:arrow_up: Mục lục](#mục-lục)

```js
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
```

### C. Closure
[:arrow_up: Mục lục](#mục-lục)

```js
// Closure là một hàm có thể ghi nhớ nơi nó được tạo và truy cập được biến ở bên ngoài phạm vi của nó
// Biến được tham chiếu (refer) trong closure sẽ không được xóa khỏi bộ nhớ khi hàm cha thực thi xong
// VD1:
function createCounter() {
    let counter = 0

    function increase() {
        return ++counter
    }

    return increase
}

const counter1 = createCounter()

console.log(counter1())
console.log(counter1())
console.log(counter1())
// 1
// 2
// 3

// VD2:
function createLogger(namespace) {
    function logger(message) {
        console.log(`[${namespace}] ${message}`)
    }

    return logger
}

// ================ App ================

// Register.js

const infoLogger = createLogger('Info')

infoLogger('Bắt đầu gửi mail')
infoLogger('Gửi mail lỗi lần 1, thử gửi lại...')
infoLogger('Gửi mail thành công cho user xxx')

// VD3:
function createStorage(key) {
    const store = JSON.parse(localStorage.getItem(key)) ?? {}

    const save = () => {
        localStorage.setItem(key, JSON.stringify(store))
    }

    const storage = {
        get(key) {
            return store[key]
        },
        set(key, value) {
            store[key] = value
            save()
        },
        remove(key) {
            delete store[key]
            save()
        }
    }

    return storage
}

// Profile.js
const profileSetting = createStorage('profile_setting')

console.log(profileSetting.get('fullName'))

profileSetting.set('fullName', 'Nguyễn Văn')

// VD4:
function createApp() {
    const cars = []

    return {
        add(car) {
            cars.push(car)
        },
        show() {
            console.log(cars)
        }
    }
}

const app = createApp()

app.show()
app.add('BMW')
app.show() 
```

## 14. Hoisting, Strict Mode, Data Types
### A. Hoisting
[:arrow_up: Mục lục](#mục-lục)

```js
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
```

### B. Strict Mode
[:arrow_up: Mục lục](#mục-lục)

```js
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
```

### C. Data Types
[:arrow_up: Mục lục](#mục-lục)

```js
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

console.log(a === b) // false: Do a và b không cùng địa chỉ ô nhớ

const c = {
    name: 'BMW'
}

const d = c

console.log(c === d) // true: Do c và d cùng địa chỉ ô nhớ 
```

## 15. This, Bind, Call, Apply
### A. This
[:arrow_up: Mục lục](#mục-lục)

```js
// This trả về đối tượng mà nó thuộc về
// Đặc tính 1: Trong 1 phương thức, this tham chiếu tới đối tượng truy cập phương thức (đối tượng trước dấu .)
// Đặc tính 2: Đứng ngoài phương thức, this tham chiếu tới đối tượng global

// VD1:
const iPhone7 = {
    // Thuộc tính - Property
    name: 'Iphone 7',
    color: 'Pink',
    weight: 300,

    // Phương thức - Method
    takePhoto() {
        console.log(this)
    },
    objChild: {
        name: 'Child Object',
        methodChild() {
            console.log(this)
        }
    }
}

console.log(iPhone7.takePhoto()) // this là iPhone7
// {
//     name: 'Iphone 7',
//     color: 'Pink',
//     weight: 300,
//     takePhoto: [Function: takePhoto],
//     objChild: { name: 'Child Object', methodChild: [Function: methodChild] }
// }
// undefined

iPhone7.objChild.methodChild() // this là objChild
// { name: 'Child Object', methodChild: [Function: methodChild] }


// VD2:
console.log(this) // Đối tượng global (windows)
// {}

// Lưu ý:
// this trong hàm tạo là đại diện cho đối tượng sẽ được tạo
// this trong một hàm là undefined khi ở strict mode
// Các phương thức bind(), call(), apply() có thể tham chiếu this tới đối tượng khác 
// Arrow function không có context
```

### B. Bind
[:arrow_up: Mục lục](#mục-lục)

```js
// bind (ràng buộc)
// Phương thức bind() sẽ trả về một hàm mới
// Có thể nhận các đối số như hàm ban đầu
// Tóm tắt:
// - Phương thức bind() cho phép ràng buộc this cho một phương thức (function)
// - Phương thức bind() sẽ trả về một hàm mới với context được bind
// - Hàm được trả về từ bind() vẫn có thể nhận các đối số của hàm gốc
// VD1:
this.firstName = 'Minh'
this.lastName = 'Thu'

const teacher = {
    firstName: 'Minh',
    lastName: 'Thảo',
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

const student = {
    firstName: 'Thang',
    lastName: 'Cung',
}

// Case 1:
console.log(teacher.getFullName()) // Minh Thảo

// Case 2:
const getTeacherName = teacher.getFullName // Khi gán cho biến khác đối tượng bị thay đổi 

console.log(getTeacherName()) // Minh Thu

// Giải thích: Khi mà ta gọi hàm getTeacherName() mà không có dấu chấm . ở đằng trước, this sẽ chọc ra phạm vi global (window)

// Case 3:
const getStudentName = teacher.getFullName.bind(student); // Đối tượng ràng buộc là student
// Thang Cung

// VD2:
const teacher1 = {
    firstName: 'Minh',
    lastName: 'Thảo',
    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

const button = document.querySelector('button')

button.onclick = teacher1.getFullName // undefined undefined
// Lúc này this trỏ tới button, đối tượng bị thay đổi

// Khắc phục: ràng buộc tới teacher1
button.onclick = teacher1.getFullName.bind(teacher1) // Minh Thảo
```

```js
// VD3:
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <h3 id="heading">Hello bind() method</h3>
//     <script src="./Fn.bind() method 2.js"></script>
// </body>
// </html>

console.log('Bài 3:')
const $1 = document.querySelector
const $$1 = document.querySelectorAll

// console.log(document.querySelector('#heading').innerText) // Hello bind() method
// console.log($1('#heading').innerText) // Lỗi

// Khắc phục
const $2 = document.querySelector.bind(document)
const $$2 = document.querySelectorAll.bind(document)

// console.log($2('#heading').innerText) // Hello bind() method

// VD4:
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <input type="text" placeholder="Enter car name..." id="input">
//     <button id="submit">Add</button>
//     <ul id="root"></ul>
//     <script src="./Fn.bind() method 2.js"></script>
// </body>
// </html>

console.log('Bài 4:')

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const app = (() => {
    const cars = ['BMW']
    const root = $('#root')
    const input = $('#input')
    const submit = $('#submit')

    return {
        add(car) {
            cars.push(car)
        },
        delete(index) {
            cars.splice(index, 1)
        },
        render() {
            const html = cars.map((car, index) => `
                <li>
                    ${car}
                    <span class="delete" data-index="${index}">&times</span>
                </li>
            `)
            .join('')
            
            root.innerHTML = html
        },
        handleDelete(e) {
            const deleteBtn = e.target.closest('.delete') // closest giúp kiểm tra element đó hoặc cha của nó có chứa class delete hay không ?
            if (deleteBtn) {
                const index = deleteBtn.dataset.index // data- này sẽ tạo ra dataset
                console.log(this) // Kiểm tra this là cái nào
                this.delete(index)
                this.render()
            }
        },
        init() {

            // Handle DOM events
            submit.onclick = () => { // Arrow function không có context nên không có this
                const car = input.value
                this.add(car)
                this.render()

                input.value = null
                input.focus()
            }
            root.onclick = this.handleDelete.bind(this) // Ràng buộc this là app

            this.render()
        }
    }
})();

app.init()
```

### C. Call
[:arrow_up: Mục lục](#mục-lục)

```js
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
```

### D. Apply
[:arrow_up: Mục lục](#mục-lục)

```js
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
```

## 16. Nullish Coalescing Operator
[:arrow_up: Mục lục](#mục-lục)

Nullish Coalescing Operator (`??`) được giới thiệu trong ECMAScript 2020 (ES11). Nó được sử dụng để cung cấp một giá trị mặc định khi một biểu thức là `null` hoặc `undefined`.

Cú pháp:

```js
let value = expression ?? defaultValue;
```

_Ví dụ:_

```js
let name = null;
let defaultName = "Guest";

let displayName = name ?? defaultName;
console.log(displayName); // Output: "Guest"

name = "Alice";
displayName = name ?? defaultName;
console.log(displayName); // Output: "Alice"
```

Trong ví dụ này, `displayName` sẽ nhận giá trị từ `name` nếu `name` không phải là `null` hoặc `undefined`. Nếu `name` là `null` hoặc `undefined`, `displayName` sẽ nhận giá trị từ `defaultName`.
