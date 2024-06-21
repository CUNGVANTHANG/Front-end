# ReactJS Theory
## Mục lục

<details>
  <summary>Ôn tập lại JS</summary>

- [I. SPA/MPA là gì?](#i-spampa-là-gì)
- [II. Ôn lại ES6+](#ii-ôn-lại-es6)
  - [1. Arrow function](#1-arrow-function)
  - [2. Enhanced object literals](#2-enhanced-object-literals)
  - [3. Destructuring, Rest](#3-destructuring-rest)
  - [4. Spread operator](#4-spread-operator)
  - [5. Modules](#5-modules)
</details>

<details>
  <summary>ReactJS</summary>

- [I. React, ReactDOM](#i-react-reactdom)
- [II. JSX](#ii-jsx)
  - [1. JSX](#1-jsx)
  - [2. Component](#2-component)
  - [3. Props](#3-props)
  - [4. Cách viết hàm chuẩn](#4-cách-viết-hàm-chuẩn)
  - [5. Sử dụng thư viện clsx để viết câu lệnh if](#5-sử-dụng-thư-viện-clsx-để-viết-câu-lệnh-if)
  - [6. Truyền props sử dụng toán tử Spread](#6-truyền-props-sử-dụng-toán-tử-spread)
  - [7. Trích xuất giá trị từ mảng với Destructuring](#7-trích-xuất-giá-trị-từ-mảng-với-destructuring)
- [III. Hook - useState](#iii-hook---usestate)
  - [1. useState](#1-usestate)
  - [2. Closures](#2-closures)
  - [3. Các nguyên tắc khi làm việc với Hooks](#3-các-nguyên-tắc-khi-làm-việc-với-hooks)
  - [4. Tính bất biến trong ReactJS](#4-tính-bất-biến-trong-reactjs)
  - [5. Trạng thái với mảng](#5-trạng-thái-với-mảng)
  - [6. Trạng thái với đối tượng](#6-trạng-thái-với-đối-tượng)
  - [7. Xử lý form](#7-xử-lý-form)
  - [8. Truyền vào hàm](#8-truyền-vào-hàm)
  - [9. Chuyển trạng thái lên](#9-chuyển-trạng-thái-lên)
- [IV. Hook - useEffect](#iv-hook---useeffect)
</details>

## I. SPA/MPA là gì?
[:arrow_up: Mục lục](#mục-lục)

**1. SPA - Single-Page Application**
- ReactJS là 1 trong những thư viện tạo SPA
- Các "ông lớn" sử dụng SPA: Google, Facebook, Twitter
- Các SPA khác: F8, Shoppe, 30shine, chotot, zingmp3

**2. Các triển khai**
- SPA - Single-Page Application
- MPA - Multi-Page Application

**3. Sự khác biệt**

- SPA
  - Được cho là cách tiếp cận hiện tại hơn
  - Không yêu cầu tải lại trang trong quá trình sử dụng

- MPA
  - Là cách tiếp cận cổ điện hơn
  - Tải lại trang trong quá trình sử dụng (click vào đường link, chuyển sang, ...)

**4. So sánh**

- Tốc độ
  - SPA nhanh hơn khi sử dụng
    - Phần lớn tài nguyên được tải trong lần đầu
    - Trang chỉ tải thêm dữ liệu mới khi cần
  - MPA chậm hơn khi sử dụng
    - Luôn tải lại toàn bộ trang khi truy cập và chuyển hướng

**5. Bóc tách**
- SPA có phần Front-end riêng biệt
- MPA Front-end & Back-end phụ thuộc nhau nhiều hơn, được đặt trong cùng 1 dự án

**6. SEO**
- SPA không thiện thiện với SEO như MPA
- Trải nghiệm trên thiết bị di động tốt hơn

**7. UX**
- SPA cho trải nghiệm tốt hơn, nhất là các thao tác chuyển trang
- Trải nghiệm trên thiết bị di động tốt hơn

**8. Quá trình phát triển**
- SPA dễ dàng tái sử dụng code (component)
- SPA bóc tách FE & BE
    - Chia team phát tiển song song
    - Phát triển thêm mobile app dễ dàng

## II. Ôn lại ES6+ 
[:arrow_up: Mục lục](#mục-lục)
### 1. Arrow function
[:arrow_up: Mục lục](#mục-lục)

```jsx
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

// Nâng cao
// Viết bình thường
const course = {
    name: 'JavaScript basic!',
    getName: function() {
        return this; // context
    }
};

console.log(course.getName()); // JavaScript basic!

// Viết kiểu arrow function
const course1 = {
    name: 'JavaScript basic!',
    getName: () => {
        return this; // context
    }
};

console.log(course1.getName()); // Lỗi
```

### 2. Enhanced object literals
[:arrow_up: Mục lục](#mục-lục)

```jsx
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

### 3. Destructuring, Rest
[:arrow_up: Mục lục](#mục-lục)

```jsx
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


// 2. Toán tử Rest ... lấy ra những phần còn lại
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

// 3. Toán tử Rest ... trở thành mảng gần giống Arguments
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

### 4. Spread operator
[:arrow_up: Mục lục](#mục-lục)

```jsx
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

### 5. Modules
[:arrow_up: Mục lục](#mục-lục)

```jsx
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

## I. React, ReactDOM
[:arrow_up: Mục lục](#mục-lục)

### 1. Làm quen với React
[:arrow_up: Mục lục](#mục-lục)

Để cài đặt gói **react** vào dự án, bạn cần cài đặt bằng trình quản lý gói (**npm** hoặc **yarn**).

Chúng ta sẽ sử dụng Trình quản lý Gói Node (npm).

```
npm install react
```

Dưới đây là cách thêm React (sau khi đã cài đặt React):

```jsx
import React from "react";
```

**React Element** là khối xây dựng nhỏ nhất đại diện cho một đơn vị nhỏ trong giao diện người dùng.

`React.createElement` trả về một đối tượng đại diện cho phần tử DOM.

Đối tượng có dạng như sau:

```jsx
const element = React.createElement("h1");
//returns an object similar to this one:
{
  type: 'h1',
  props: {}
}
```

Lý do tại sao `React.createElement` trả về một đối tượng thay vì phần tử DOM là vì React hoạt động dựa trên Virtual DOM (DOM ảo). Chúng ta sẽ tìm hiểu chi tiết sau này, trước hết hãy xem phần giải thích đơn giản về Virtual DOM:

Virtual DOM là một phiên bản của giao diện người dùng được lưu giữ trong bộ nhớ và được đồng bộ với DOM thật.

Vì vậy, `React.createElement()` trả về một đối tượng thay vì phần tử DOM vì điều này cho phép React tối ưu hóa hiệu suất (như Virtual DOM).

**Thay đổi lớp/kiểu dáng**

Cú pháp của hai phương thức tương tự nhau khi thiết lập các thuộc tính này:

```jsx
React.createElement("h1", {className: "center", style: "color: red"})
```

**Viết văn bản**

Để viết văn bản bên trong phần tử, bạn phải **cung cấp tham số thứ ba** cho `React.createElement`, được gọi là children (có thể truyền các phần tử React khác làm children).

```jsx
React.createElement("h1", {}, "Hello World")
```

### 2. Làm quen với React DOM
[:arrow_up: Mục lục](#mục-lục)

Hãy bắt đầu bằng việc cài đặt ReactDOM:

```
npm install react-dom
```

React và ReactDOM là hai phần của cùng một thư viện tên là React. Sau đó, chúng đã được tách ra thành hai thư viện độc lập là React và ReactDOM để tạo điều kiện cho việc phát triển React Native.

React Native là sự kết hợp giữa React và ứng dụng native. React là thư viện cho phép bạn viết UI có thể tái sử dụng và:

- ReactDOM làm cho UI đó hiển thị trên trình duyệt.
- React Native làm cho UI đó hiển thị trên ứng dụng native.

React tạo ra phiên bản ảo của UI trong bộ nhớ, sau đó ReactDOM nhận và đồng bộ hóa UI (và các thay đổi trong đó) vào DOM. Quá trình này được gọi là reconciliation.

Thêm phương thức `createRoot` của ReactDOM: 

```jsx
import {createRoot} from "react-dom/client"
```

Với phần tử root trên, chúng ta có thể hiển thị phần tử React đầu tiên:

```jsx
import {createRoot} from "react-dom/client";

const root = document.querySelector("#root");
createRoot(root).render(React.createElement("p", {}, "Hello World"));
```

## II. JSX
[:arrow_up: Mục lục](#mục-lục)

### 1. JSX
[:arrow_up: Mục lục](#mục-lục)

- **JSX là cú pháp rút gọn cho React.createElement**

Khi làm việc với React, bạn cần sử dụng `React.createElement` để biểu diễn giao diện người dùng. Tuy nhiên, **cú pháp của nó khá dài**. Cú pháp sẽ **trở nên càng dài và nhàm chán hơn** khi bạn bắt đầu phát triển giao diện người dùng phức tạp hơn.

React sử dụng một cú pháp đặc biệt được gọi là **JSX** **để giải quyết vấn đề đó**. Cú pháp **JSX** trông có vẻ giống **HTML**, nhưng nó KHÔNG PHẢI LÀ HTML.

```jsx
import React from "react";

const title = <h1>Hello World</h1>
```

nó sẽ biên dịch thành 

```jsx
import React from "react";

const title = React.createElement("h1", {}, "Hello World");
```

- **JSX KHÔNG PHẢI là một phần của trình duyệt**

Trình duyệt không hiểu được JSX vì đó là một cú pháp được tạo bởi React. Bạn sẽ cần một công cụ (như **babel**) để **chuyển đổi code JSX thành JavaScript thông thường** (sẽ chứa các cuộc gọi `React.createElement`).

- **Làm việc với JSX**

Vì JSX được chuyển đổi thành `React.createElement()` trả về một đối tượng, bạn có thể coi phần tử JSX như một đối tượng.

Vì vậy, bạn có thể coi `<h1 className="title">Supermarket</h1>` như một đối tượng với các thuộc tính sau (được đơn giản hóa):

```jsx
{
  type: 'h1',
  props: {
    className: "title",
    children: "Supermarket"
  }
}
```

- **Biểu thức trong JSX**
  
Bạn có thể sử dụng các biểu thức trên trong JSX bằng cách đóng gói trong dấu ngoặc nhọn `{expression}`.

_Ví dụ cơ bản:_

```jsx
const title = <h1>You have {2 + 3} notifications</h1>;
```

Câu lệnh này sẽ tạo một phần tử h1 chứa văn bản: **You have 5 notifications**.

**Gọi hàm:**

Bạn cũng có thể gọi hàm trong biểu thức, ví dụ:

```jsx
function capitalise(word) {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
}
const name = "brendan";

const element = <p className="user-info">Welcome {capitalise(name)}</p>
```

Đoạn code trên sẽ tạo một đoạn văn bản chứa nội dung: **Welcome Brendan** (lưu ý chữ B viết hoa).

- **Biểu thức thuộc tính**

JSX cũng hỗ trợ biểu thức thuộc tính, tức là giá trị của thuộc tính được xác định dựa trên biểu thức (hoặc thường là biến), ví dụ:

```jsx
const limit = 5;

const element = <input type="number" max={limit} />;
```

Khi chuyển đổi thành `React.createElement()`, code sẽ có dạng:

```jsx
const limit = 5;
const element = React.createElement("input", {
  type: "number",
  max: limit
});
```

Ví dụ này cho thấy các thuộc tính có thể có giá trị chuỗi cũng như giá trị động; ví dụ: thuộc tính max lấy giá trị của biến limit.

**Số và boolean**

Giá trị của các thuộc tính số và boolean nên được truyền dưới dạng biểu thức:

```jsx
<input max={2} disabled={true} className="textbox" />
```

- **Luôn đóng gói các phần tử JSX bằng `()` khi viết JSX sau một lệnh re**turn.

```jsx
const getList = () => {
    return (
        <ul>
            <li>First Item</li>
            <li>Second Item</li>
        </ul>
    );
}
```

- **Trả về nhiều element bằng JSX Fragments**

React giúp giải quyết vấn đề này bằng cách yêu cầu trả về một **Fragment** đóng gói các phần tử cần trả về.

Vì vậy, nếu bạn muốn trả về HTML dưới đây từ một hàm:

```jsx
<h1>Grocery delivered to your door</h1>
<h2>Free delivery</h2>
<p>Get started now!</p>
```

Bạn sẽ phải sử dụng một Fragment đóng gói 3 phần tử này:

```jsx
function getHeroBanner() {
    return (
        <>
            <h1>Grocery delivered to your door</h1>
            <h2>Free delivery</h2>
            <p>Get started now!</p>
        </>
    );
}
```

Cú pháp ngắn gọn cho `React.Fragment` (`<>` và `</>`) vừa được đề cập ở trên.

Bạn có thể thấy ở đâu đó sử dụng cú pháp gốc dài hơn với `React.Fragment`:

```jsx
function getHeroBanner() {
    return (
        <React.Fragment>
            <h1>Grocery delivered to your door</h1>
            <h2>Free delivery</h2>
            <p>Get started now!</p>
        </React.Fragment>
    );
}
```

### 2. Component
[:arrow_up: Mục lục](#mục-lục)

Component React là một mẫu hoặc bản thiết kế cho phép bạn mô tả một phần của giao diện người dùng; ví dụ: `<Footer></Footer>` là component mô tả phần chân trang.

_Ví dụ:_

Dưới đây là một ví dụ về component React:

```jsx
function Footer() {
    return (
        <div>
            <h3>Company name</h3>
            <p>All rights reserved</p>
        </div>
    );
}
```

Sau khi định nghĩa, component Footer có thể được sử dụng trong cùng một file JavaScript với JSX:

```jsx
import {createRoot} from "react-dom/client";

function Footer() {
    return (
        <div>
            <h3>Company name</h3>
            <p>All rights reserved</p>
        </div>
    );
}

const root = document.querySelector("#root");

createRoot(root).render(<Footer></Footer>);
```

Chúng ta gọi đây là **function component** vì Component được định nghĩa dưới dạng **hàm**.

- **Tên component viết hoa chữ cái đầu (UpperCamelCase)**

Bạn có thể nhận thấy đoạn code trên gọi hàm là **Footer** thay vì **footer**. Điều này là cần thiết. **Ký tự đầu tiên phải viết hoa** để React nhận biết rằng đó là một **Component**; lý do sẽ được giải thích trong bài học tiếp theo.

Hãy luôn viết tên hàm theo kiểu UpperCamelCase; dưới đây là một số ví dụ:

- Footer
- ChatMessage
- Button
- ListItem

- **Quy tắc code: Một file chỉ chứa 1 Component**

Một ứng dụng được xây dựng bằng React sẽ có **nhiều component**.

Quy ước là định nghĩa **một component trong mỗi file riêng biệt** để sau này dễ dàng tìm thấy nó (có một số ngoại lệ, nhưng hiện tại bạn chưa cần để ý đến những ngoại lệ này).

Tên file phải khớp với tên Component, ví dụ:

- file: Footer.js cho Component Footer
- file: AppNavbar.js cho Component AppNavbar

**index.js**

Ứng dụng sẽ có một file `index.js` là điểm mà quá trình chạy ứng dụng bắt đầu (đôi khi được gọi là `app.js`).

Vì vậy, bạn sẽ định nghĩa các component trong những file khác và sau đó sử dụng chúng trong `index.js`.

_Ví dụ:_

Hãy xem một ví dụ bằng cách sử dụng hai file: **Footer.js** và **index.js**:

File Footer.js định nghĩa component Footer:

```jsx
//Footer.js
export default function Footer() {
    return (
        <>
             <h3>Footer</h3>
             <p>All rights reserved</p>
        </>
    );
}
```

Để ý file này sử dụng `default export` để khai báo component Footer.

Điều này là bắt buộc để có thể sử dụng component Footer trong các file khác.

```
//index.js
import {createRoot} from "react-dom/client";
import Footer from "./Footer.js";

function App() {
    return (<>
         <Footer />
         <Footer />
    </>);
}

const root = document.querySelector("#root");

createRoot(root).render(<App />);
```

Để ý component Footer đã được thêm vào file `index.js` từ `./Footer.js` để file có thể sử dụng component.

Điều đó là vì `<Footer />` được chuyển đổi thành: `React.createElement(Footer, {})` vì vậy để component hoạt động, hàm Footer phải có phạm vi hoạt động trong file `index.js`, tức là nó phải được thêm vào file.

Ngoài ra, đoạn code hiển thị Footer hai lần bằng cách sử dụng component hai lần trong component App.

### 3. Props
[:arrow_up: Mục lục](#mục-lục)

- **Props**

Giả sử chúng ta có một component tên là **<GreetUser />** hiển thị: **Welcome Sam** hoặc **Welcome Alex**.

Chúng ta cần làm cho component hiển thị **Welcome** và sau đó là tên người dùng.

Hãy bắt đầu bằng phiên bản hiển thị thủ công của component này:

```jsx
//GreetUser.js
export default function GreetUser() {
    return <div>Welcome USER</div>;
}
```

Component **<GreetUser />** sẽ hiển thị **Welcome USER**.

Thay vì hiển thị **<GreetUser />**, chúng ta có thể hiển thị **<GreetUser user="Sam" />**.

`user="Sam"` là thuộc tính user với giá trị Sam được thêm vào component **GreetUser**.

Bây giờ chúng ta có thể đọc `user="Sam"` này như một đối tượng: {user: "Sam"}.

Chúng ta gọi đối tượng đó là **props** (viết tắt của properties - trường thuộc tính).

```jsx
//GreetUser.js
export default function GreetUser(props) {
    console.log(props); // {user: "Sam"}
    return <div>Welcome USER</div>;
}
```

Trường thuộc tính được truyền bây giờ nằm bên trong đối tượng mà hàm **GreetUser** nhận làm đối số đầu tiên.

Vì vậy, chúng ta có thể sử dụng biểu thức để hiển thị tên người dùng (có thể đọc là `props.user`):

```jsx
//GreetUser.js
export default function GreetUser(props) {
    return <div>Welcome {props.user}</div>;
}
```

`<GreetUser user="Sam"/>` sẽ hiển thị `<div>Welcome Sam</div>`

`<GreetUser user="Alex"/>` sẽ hiển thị `<div>Welcome Alex</div>`

Điều này làm cho component linh hoạt hơn và có thể tái sử dụng!

- **Props con**

Có một loại props đặc biệt dành cho trường thuộc tính con. Hãy xem một ví dụ:

```jsx
const element = <HeroTile>Welcome!</HeroTitle>
```

Nội dung nằm giữa các thẻ `<HeroTitle>` và `</HeroTitle>` được gọi là trường thuộc tính con.

Bạn có thể truy cập vào bằng cách sử dụng props.children, ví dụ:

```jsx
const element = <HeroTitle>Welcome!</HeroTitle>
```

Một ví dụ về `props.children` là chuỗi "Welcome!", nhưng trên thực tế, nó có thể là bất cứ kiểu dữ liệu nào.

`props.children` có thể tham chiếu đến các phần tử hoặc component React khác (hoặc thậm chí là nhiều component); ví dụ:

```jsx
function Navbar(props){
    return <div className="navbar">{props.children}</div>;
}

const element = <Navbar>
    <HeroTitle>Welcome!</HeroTitle>
    <div>Some content</div>
    <p>Another content</p>
</Navbar>;
```

Trong ví dụ này, `props.children` là một mảng chứa 3 mục:

```jsx
<HeroTitle>Welcome!</HeroTitle>
<div>Some content</div>
<p>Another content</p>
```

### 4. Cách viết hàm chuẩn
[:arrow_up: Mục lục](#mục-lục)

- **Hàm thuần túy (Pure function)**

Tất cả các component React không bao giờ thay đổi các props của chúng.

Điều này có nghĩa là **bạn không nên thay đổi giá trị của prop bên trong component**; hãy xem một ví dụ:

```jsx
function Notifications(props) {
    // ❌ 
    props.data.count = props.data.count - 1;
    return <h3>You have {props.data.count} unread notifications.</h3>;
}

const notifications = {
    count: 3
};

const element = <Notifications data={notifications} />;
console.log(notifications); // {count: 2}
```

Để ý việc sử dụng phần tử `<Notifications  data={notifications}/>` có tác dụng phụ là thay đổi giá trị của props `(notifications.count)`.

Thay vào đó, code nên được viết như sau:

```jsx
function Notifications(props) {
    // ☑️ 
    const value = props.data.count - 1;
    return <h3>You have {value} unread notifications.</h3>;
}

const notifications = {
    count: 3
};

const element = <Notifications data={notifications} />;
console.log(notifications); // {count: 3}
```

Vì vậy, bạn nên **coi props là thuộc tính chỉ đọc.**

### 5. Sử dụng thư viện clsx để viết câu lệnh if
[:arrow_up: Mục lục](#mục-lục)

- **Để cài đặt clsx, chạy lệnh:**

```
npm install clsx
```

- **Thêm clsx vào file**

Bạn có thể sử dụng clsx trong bất kỳ bài tập React nào bằng cách nhập lệnh import vì gói đã được cài đặt sẵn.

Để thêm **clsx**, bạn phải thêm clsx từ tên gói:

```
import clsx from "clsx";
```

- **Các lớp có điều kiện**:

Sau khi đã thêm **clsx**, hãy xem cách thư viện giúp đơn giản hóa việc sử dụng lớp có điều kiện:

```jsx
import clsx from "clsx";

const result = clsx({
    "link": true,
    "link-primary": true
});

console.log(result); //"link link-primary"
```

Chúng ta đã truyền cho **clsx** một đối tượng chứa:

- khóa link với giá trị true
- và khóa `link-primary` với giá trị true, kết quả trả về một chuỗi chứa cả hai lớp được phân tách bằng dấu cách.

Hãy xem một ví dụ khác:

```jsx
import clsx from "clsx";

const result = clsx({
    "link": true,
    "link-primary": false
});

console.log(result); //"link"
```

Đây về cơ bản cùng một cách làm như ví dụ trước. Tuy nhiên, lần này chúng ta chỉ định rằng `link-primary` là `false`, vì vậy chuỗi kết quả sẽ **không bao gồm link-primary**.

Thay vì thiết lập giá trị cố định là true hoặc false, điều gì sẽ xảy ra nếu chúng ta thay thế chúng bằng một biến hoặc kết quả của một biểu thức? Ví dụ:

```jsx
import clsx from "clsx";

function MyComponent(props) {
    const className = clsx({
        "title": props.loggedIn
    });

    return <h1 className={className}></h1>
}

const example1 = <MyComponent loggedIn={true} />; // className="title"
const example2 = <MyComponent loggedIn={false} />; // className=""
```

Trong đoạn code trên, `props.loggedIn` là một giá trị boolean. Chúng ta sử dụng giá trị boolean đó để thêm/xóa lớp title theo điều kiện:

- khi `props.loggedIn` là **true**, clsx nhận `{"title": true}` và trả về chuỗi title.
- Ngược lại, khi `props.loggedIn` là **false**, clsx nhận`{"title": false}` và trả về chuỗi rỗng "".

### 6. Truyền props sử dụng toán tử Spread
[:arrow_up: Mục lục](#mục-lục)

Việc sử dụng cú pháp này trong JSX đôi khi có khá nhiều công dụng hữu ích. Ví dụ, bạn có **một Component nhận nhiều props** và bạn muốn lấy ra **children**, sau đó **destructure tất cả các props còn lại vào một biến mới** và truyền chúng vào một phần tử:

```jsx
function Navbar(props) {
    const {children, ...rest} = props;
    return <h1 {...rest}>{children}</h1>;
}
```

Chúng ta bắt đầu bằng cách `destructure children` từ props, sau đó chúng ta tạo một đối tượng mới gọi là rest chứa tất cả các props khác.

Và cuối cùng, chúng ta sử dụng cú pháp `spread` để truyền đối tượng này vào `<h1>`, theo đó truyền toàn bộ props vào phần tử `<h1>`.

Ví dụ, nếu bạn sử dụng Navbar như sau: `<Navbar tabIndex="2" className="navbar">Hello World</Navbar>`, bạn sẽ nhận được biến `children = "Hello World"` và biến rest với đối tượng sau:

```jsx
{
    tabIndex: "2",
    className: "navbar"
}
```

và sau đó Component sẽ trả về phần tử React sau:

```jsx
<h1 tabIndex="2" className="navbar">Hello World</h1>
```

Giả sử chúng ta thêm một thuộc tính mới, ví dụ: `disabled={true}`, khi đó code vẫn hoạt động và vẫn áp dụng thuộc tính **disabled** cho h1 **mà không cần cập nhật Component**.

### 7. Trích xuất giá trị từ mảng với Destructuring
[:arrow_up: Mục lục](#mục-lục)

Hãy giả sử chúng ta có đối tượng person sau:

```jsx
const person = {
    firstName: "Sam",
    lastName: "Doe",
    age: 24
}
```

và bạn muốn tạo 2 biến firstName và lastName:

```jsx
const firstName = person.firstName;
const lastName = person.lastName;
```

Bạn có thể làm điều đó trong một dòng bằng cú pháp destructuring sau:

```jsx
const {firstName, lastName} = person;
```

Bạn cũng có thể cung cấp giá trị mặc định cho biến trong trường hợp không có giá trị tương ứng trong đối tượng. Ví dụ:

```jsx
const {firstName, lastName, status = 'single'} = person;
```

Trong trường hợp này, `status` sẽ có giá trị mặc định là `"single"` vì đối tượng `person` không có thuộc tính này.

Bạn cũng có thể destructuring biến props trong đối số, thoạt nhìn thì code có vẻ khó đọc nhưng bạn sẽ thấy nó được sử dụng khá nhiều trong thực tế:

```jsx
function WelcomeUser({username, notifications}) {
    return <div>Welcome {username}! You've got {notifications} unread notifications.</div>;
}
```

Thay vì viết WelcomeUser(props), bạn ngay lập tức thay thế props bằng `{username, notifications}`, lệnh này trích xuất `props.username` và `props.notifications` và tạo ra 2 biến: `username` và `notifications`.

## III. Hook - useState
[:arrow_up: Mục lục](#mục-lục)

### 1. useState
[:arrow_up: Mục lục](#mục-lục)

- **Cài đặt useState**

Hãy bắt đầu bằng cách tạo biến trạng thái đầu tiên.

Để làm điều đó, chúng ta cần thêm hàm **useState** từ gói `"react"`.

**useState** là một named export có cú pháp thêm là:

```jsx
import {useState} from "react";
```

Nếu bạn đã thêm React vào trong cùng một file, bạn có thể kết hợp các lệnh import thành một lệnh import duy nhất. Ví dụ:

```jsx
import React from "react";
import {useState} from "react";
```

2 câu lệnh có thể được kết hợp thành một lệnh import duy nhất:

```jsx
import React, {useState} from "react";
```

Thoạt nhìn cú pháp có thể trông hơi lạ mắt, nhưng bạn hãy nhớ rằng:

1. React là **default export** (không có dấu ngoặc nhọn)
2. useState là **named export** (được đóng gói trong dấu ngoặc nhọn)

- **useState trả về cái gì?**

useState trả về một mảng gồm 2 phần tử:

1. phần tử đầu tiên là **giá trị hiện tại của trạng thái**
2. phần tử thứ hai là một hàm cập nhật trạng thái

Vì vậy, thay vì viết:

```jsx
const result = useState(0)
const seconds = result[0];
const setSeconds = result[1];
```

Chúng ta sẽ sử dụng cú pháp array destructuring:

```jsx
const [seconds, setSeconds] = useState(0);
```

`seconds` hiện tại là một số có giá trị `0` và `setSeconds` là một hàm.

Điều quan trọng là đặt tên các thuộc tính được destructure như sau:

1. Phần tử đầu tiên nên lấy tên của trạng thái (trong ví dụ này là `seconds`)
2. Phần tử thứ hai có phần đầu là `set` và theo sau là tên trạng thái viết hoa chữ cái đầu (trong ví dụ này là `setSeconds`)

Điều này quan trọng vì khi các component trở nên phức tạp hơn, chúng ta cần biết rằng **seconds là trạng thái** và **setSeconds là hàm cập nhật trạng thái của seconds**.

**Các điểm quan trọng cần lưu ý:**

1. Bạn chỉ nên gọi **useState bên trong component**, không phải bên ngoài.
2. **useState nên là thành phần đầu tiên được gọi bên trong hàm**

- **Thay đổi trạng thái?**

Trạng thái là **một biến mà chúng ta có thể cập nhật** vào thời điểm nào đó trong tương lai.

Để cập nhật trạng thái, **bạn luôn phải sử dụng hàm 'set' nhận được từ useState**.

Vì vậy nếu ta tạo một trạng thái gọi là `seconds` thì ta sẽ sử dụng hàm `setSeconds(newValue)` đã được destructure. Hãy sử dụng Component Stopwatch giống như trước đây:

```jsx
import {useState} from "react";

function Stopwatch() {
    // hooks have to be at the top
    const [seconds, setSeconds] = useState(0);

    return (<>
        <h2>{seconds}</h2>
        {/* increment seconds state by 1, when you click on the button*/}
        <button onClick={() => setSeconds(seconds + 1)}>Click to add 1</button>
    </>);
}
```

Đoạn code cập nhật trạng thái bằng cách gọi `setSeconds()` và truyền vào đó giá trị mới của trạng thái.

Giá trị mới của trạng thái là `seconds + 1`, tương đương với: **giá trị hiện tại + 1**.

Điều đó xảy ra là vì `seconds` lưu giữ giá trị hiện tại của trạng thái, vì vậy `seconds + 1` sẽ **tăng giá trị đó lên 1.**

- **Thay đổi trạng thái có điều kiện: Props**

Giả sử chúng ta có một **component có thể tăng giá trị của bộ đếm**. Tuy nhiên, component này **có thể được kích hoạt hoặc vô hiệu hóa**. Khi component bị vô hiệu hóa, bộ đếm sẽ không tăng giá trị.

```jsx
import {useState} from "react";

function Counter(props) {
    const [counter, setCounter] = useState(0);

    function handleIncrementClick() {
        if (props.enabled){
            setCounter(counter + 1);
        }
    }

    return (<>
        <h2>{counter} times clicked</h2>
        <button onClick={handleIncrementClick}>Add 1</button>
    </>);
}

// Sample usages:
const element1 = <Counter enabled={true} />;
const element2 = <Counter enabled={false} />;
```

Chúng ta có thể kiểm tra giá trị của Prop và dựa trên đó thay đổi trạng thái như sau:

```jsx
if (props.enabled) {
    setCounter(counter + 1);
}
```

### 2. Closures
[:arrow_up: Mục lục](#mục-lục)

**Closure** là khi hàm bên trong có quyền truy cập vào các biến của hàm bên ngoài. Hãy xem ví dụ dưới đây:

```jsx
function getUser() {
    const name = "Sam";

    function getWelcomeMessage() {
        return `Hello ${name}`;
    }

    return {
        name: name,
        message: getWelcomeMessage()
    }
}
```

Chúng ta có một closure ở đây vì chúng ta có hàm `getWelcomeMessage` bên trong hàm `getUser`.

Giải thích đoạn code:

- Hàm getUser định nghĩa biến name có giá trị là "Sam".
- Bên trong hàm đó, chúng ta định nghĩa hàm getWelcomeMessage trả về Hello ${name}.
- Sau đó, chúng ta return một đối tượng chứa name và message, trong đó message là kết quả trả về bởi `getWelcomeMessage()`.

Như bạn thấy, biến `name` có thể được truy cập bởi hàm `getWelcomeMessage` vì `getWelcomeMessage` được định nghĩa bên trong `getUser`.
Vì vậy, vì `name` được định nghĩa trong `getUser`, nó có thể được truy cập bởi bất kỳ hàm nào được định nghĩa bên trong `getUser`, trong ví dụ này là `getWelcomeMessage`.

### 3. Các nguyên tắc khi làm việc với Hooks
[:arrow_up: Mục lục](#mục-lục)

Để hook hoạt động chính xác, bạn phải tuân theo hai quy tắc.

- Quy tắc số 1: Chỉ gọi Hook từ các hàm React
- Quy tắc số 2: Chỉ gọi Hook ở Cấp độ trên cùng và **không bao giờ gọi hook trong vòng lặp, điều kiện if hoặc các hàm lồng nhau**.

React phụ thuộc vào thứ tự các hook được gọi để hoạt động một cách chính xác.

### 4. Tính bất biến trong ReactJS
[:arrow_up: Mục lục](#mục-lục)

Hãy bắt đầu bằng việc so sánh số, chuỗi và boolean:

```
1 === 1; //true
27 === 27; //true
"hello world" === "hello world"; //true
"welcome" === "welcome"; //true
true === true; //true
false === false; //true (because they're the same)
```

Không có gì đặc biệt ở đây. Chúng ta đang so sánh hai giá trị hoàn toàn giống nhau, vì vậy kết quả là true.

Bây giờ hãy thử với mảng và đối tượng:

```
[] === []; //false
{} === {}; //false
[10] === [10]; //false
{key: "something"} === {key: "something"}; //false
```

Chú ý: bạn vẫn nhận được `false` ngay cả khi bạn sử dụng `==` thay vì `===`.

Mảng và Đối tượng đều được coi là đối tượng trong JavaScript.

Khi bạn viết `[]`, bạn đang tạo một thực thể mới của **Array**.

Khi bạn viết `{}`, bạn đang tạo một thực thể mới của **Object**.

```
new Array(); // creates []
new Object(); //creates {}
```

Hãy quay lại ví dụ trước và thay đổi các mảng và đối tượng thành cú pháp mới:

```
new Array() === new Array(); //false
new Object() === new Object(); //false

const arr1 = new Array();
arr1.push(10);
const arr2 = new Array();
arr2.push(10);
arr1 === arr2; //false

const obj1 = new Object();
obj1.key = "something";
const obj2 = new Object();
obj2.key = "something";
obj1 === obj2; //false
```

Điều này sẽ giải thích lý do tại sao chúng không bằng nhau.

`new Array()` tạo ra một **thực thể mới của mảng**.

Mỗi lần bạn gọi `new Array()`, bạn nhận được một thực thể mới, tức là `new Array()` **chắc chắn không giống** `new Array()` vì chúng là **các thực thể khác nhau**.

Vì vậy, với Mảng và Đối tượng, chúng ta cần một phương pháp khác để so sánh ngang bằng từ quan điểm giá trị.

Chúng ta mong đợi `[] === []` là `true` vì chúng đều là mảng rỗng, nhưng JavaScript lại hoạt động theo cách khác, nó kiểm tra xem chúng có phải là cùng một thực thể hay không.

- **Tính bất biến (Immutability) là gì?**

**Đối tượng bất biến là một đối tượng không thể thay đổi. Mỗi lần cập nhật tạo ra một giá trị mới, không làm thay đổi giá trị cũ.**

Hãy cùng tìm hiểu lý do tại sao React yêu cầu tính bất biến khi làm việc với Mảng và Đối tượng. Giả sử bạn đã viết Component sau:

```jsx
import {useState} from "react";

function App() {
  const [data, setData] = useState([]);
  
  function handleAddClick() {
      data.push(10)
      setData(data);
  }

  return <button onClick={handleAddClick}>Add 10</button>;
}
```

Đây không phải là cách chính xác để thêm **10** vào trạng thái data (mảng). Nhưng hãy xem lý do tại sao và điều gì xảy ra sau cùng.

Khi bạn gọi `useState` với một mảng rỗng, `const [data, setData] = useState([])`, nó sẽ tạo một biến trạng thái với giá trị `[]`.

Sau đó, hàm `setData` sẽ lấy `newState` (giá trị mới của trạng thái) và kiểm tra xem nó đã thay đổi chưa. Nếu nó đã thay đổi, nó sẽ yêu cầu ReactDOM hiển thị lại Component này.

Nếu chúng ta viết một hàm setData đơn giản, nó sẽ có dạng như sau:

```jsx
let state = []; //created by `useState([])`

// newState is the result of `data.push(10)` on <button /> click 
function setData(newState) {
  if (state === newState) {
    // no need to re-render because the state has not changed
    return false;
  }
  // store the newState for the next time the user calls setData()
  state = newState;
  // Ask ReactDOM to re-render
}
```

Để ý React đã so sánh `state === newState`. Điều này cho React biết trạng thái đã thay đổi hay chưa.

Nếu `state === newState` là `true`, **điều đó có nghĩa là trạng thái KHÔNG thay đổi, tức là không cần hiển thị lại Component.**

Nhưng khi `state === newState` là `false`, **điều đó có nghĩa là trạng thái đã thay đổi và React phải hiển thị lại Component bằng ReactDOM.**

- **Điều gì xảy ra khi không sử dụng tính bất biến?**

Trong ví dụ trước, chúng ta sử dụng `data.push(10)` để thay đổi mảng. Nếu chúng ta viết tất cả các thao tác theo từng dòng, chương trình sẽ trông như sau:

```jsx
let state = []; //from useState([])
let newState = state;
state.push(10);

state === newState; //true, whereas it should have been false
```

Vì **chúng ta đã thay đổi mảng bằng `.push`**, React sẽ nghĩ rằng chúng ta **CHƯA thay đổi trạng thái** và do đó sẽ **KHÔNG hiển thị lại Component.**

Và đây là lý do tại sao React yêu cầu sử dụng tính bất biến.

Vì vậy, cách duy nhất để `state === newState` trả về false khi ta sửa đổi mảng là trả về một mảng mới. 

Lưu ý rằng React sử dụng toán tử `===` thay vì so sánh sâu vì so sánh sâu thường khá chậm (khi số lượng Component trong ứng dụng tăng lên).

Đây là lý do tại sao mỗi khi bạn có một trạng thái của mảng hoặc đối tượng, chúng phải là bất biến.

### 5. Trạng thái với mảng
[:arrow_up: Mục lục](#mục-lục)

- **Thêm phần tử vào mảng (bất biến)**

Vậy làm thế nào để thêm một phần tử vào mảng mà vẫn duy trì tính bất biến?

Chúng ta không thể sử dụng `.push()` vì `push` sẽ thay đổi mảng.

Thay vào đó, chúng ta phải tạo một bản sao nông và chèn phần tử mới vào mảng mới:

```jsx
const numbers = [1, 2, 3];
const result = [...numbers, 4];
console.log(result); //[1, 2 ,3 ,4]
```

Chúng ta sao chép các giá trị của mảng numbers và sau đó thêm 4. Mảng mới sẽ chứa `1, 2, 3, 4`.

Đây là thao tác bất biến vì chúng ta **KHÔNG thay đổi mảng numbers** mà **tạo ra một bản sao mới và thêm giá trị vào**.

- **Cập nhật phần tử (bất biến)**

Để cập nhật một hoặc nhiều phần tử trong mảng, bạn có thể sử dụng phương thức [`.map`](https://github.com/CUNGVANTHANG/Front-end/tree/master/Javascript%20Theory#6-l%C3%A0m-vi%E1%BB%87c-v%E1%BB%9Bi-m%E1%BA%A3ng) để trả về một bản sao của mảng và đồng thời sửa đổi một hoặc nhiều phần tử. Ví dụ:

```jsx
const grades = [10, 20, 18, 14];
// change 18 to 17
const updatedGrades = grades.map(grade => {
    if (grade === 18){
        return 17;
    }
    // in all other cases, keep it as it was
    return grade;
});
console.log(updatedGrades); //[10, 20, 17, 14]
```

Bạn cũng có thể cập nhật nhiều phần tử, ví dụ: cộng 1 cho tất cả các điểm thi thấp hơn 10:

```jsx
const grades = [10, 8, 9, 4, 16];
// add 1 to all grades below 10
const updatedGrades = grades.map(grade => {
    if (grade < 10){
        return grade + 1;
    }
    // in all other cases, keep it as it was
    return grade;
});
console.log(updatedGrades); //[10, 9, 10, 5, 16]
```

- **Xóa phần tử (bất biến)**

Bạn có thể xóa phần tử một cách bất biến bằng cách sử dụng phương thức [`.slice`](https://github.com/CUNGVANTHANG/Front-end/tree/master/Javascript%20Theory#6-l%C3%A0m-vi%E1%BB%87c-v%E1%BB%9Bi-m%E1%BA%A3ng) (slice chứ không phải splice). **slice là phương thức bất biến trong khi splice là phương thức thay đổi mảng**.

```jsx
const grades = [10, 8, 9, 4, 16];

// remove the first grade
// think of it as: get all grades except the first one
const subset1 = grades.slice(1); //start from position 1
console.log(subset1); // [8, 9, 4, 16]

// remove the last 2 grades
// think of it as: get all grades except the last 2
// so start from 0 and stop after 5 - 2 = 3 items
const subset2 = grades.slice(0, grades.length - 2); 
console.log(subset2); // [10, 8, 9]
```

Đôi khi việc sử dụng [`.filter`](https://github.com/CUNGVANTHANG/Front-end/tree/master/Javascript%20Theory#6-l%C3%A0m-vi%E1%BB%87c-v%E1%BB%9Bi-m%E1%BA%A3ng) sẽ dễ dàng hơn bởi nó **trả về một tập con của mảng gốc dựa trên điều kiện**, ví dụ:

```jsx
const grades = [10, 8, 9, 4, 16];

// return all grades >= 10
const subset1 = grades.filter(grade => grade >= 10);
console.log(subset1); // [10, 16]

// remove the 2nd grade
const subset2 = grades.filter(grade => grade !== 8);
console.log(subset2); // [10, 9, 4, 16]
```

Lưu ý rằng ví dụ thứ hai sẽ bỏ qua tất cả các điểm thi là 8. Nếu bạn chỉ muốn bỏ qua phần tử thứ hai, bạn có thể sử dụng đối số thứ hai mà bạn nhận được với `filter`, đó là chỉ số.

```jsx
const grades = [10, 8, 9, 4, 16];

const subset = grades.filter((grade, index) => index !== 1);
console.log(subset); // [10, 9, 4, 16];
```

- **Trạng thái của mảng**

Giả sử chúng ta có mảng grades và chúng ta muốn tạo một thẻ ul và một thẻ li cho mỗi điểm số:

```jsx
function Grades(){
    const grades = [8, 18, 10, 7, 14];

    // this will generate a warning (keep reading)
    return <ul>
        { grades.map(grade => <li>{grade}</li>) }
    </ul>;
}
```

Component trên sẽ hiển thị:

```jsx
<ul>
    <li>8</li>
    <li>18</li>
    <li>10</li>
    <li>7</li>
    <li>14</li>
</ul>
```

Mỗi khi sử dụng phương thức map trong JSX, bạn cần cung cấp một **thuộc tính key** để tránh gặp cảnh báo (vì lý do hiệu suất):

```jsx
function Grades() {
    const grades = [8, 18, 10, 10];

    return <ul>{
        grades.map((grade, index) => <li key={index}>{grade}</li>)
    }</ul>;
}
```

`key` nên là giá trị đại diện duy nhất cho từng phần tử trong danh sách. Tuy nhiên, trong trường hợp các phần tử không phải là duy nhất, chúng ta có thể sử dụng index được cung cấp bởi phương thức `.map` làm `key`.

Chỉ số bắt đầu từ 0 và tăng lên 1 sau mỗi lần lặp.

Nếu mảng chứa các mục duy nhất thì các giá trị của mục sẽ là key:

```jsx
function Users() {
    // collection of user ids
    const users = [1, 10, 3, 4, 13];

    return <ul>{
        users.map(user => <li key={user}>{user}</li>)
    }</ul>;
}
```

Vì vậy, việc sử dụng `index` làm key chỉ nên là phương án cuối cùng. Trong các ví dụ trước đây, vì chúng ta chỉ làm việc với mảng chứa chuỗi và mảng số nên việc sử dụng chỉ số làm `key` là tạm thời chấp nhận.

Tuy nhiên, khi tìm hiểu về mảng chứa đối tượng, bạn sẽ được hướng dẫn cách chọn giá trị `key` phù hợp cho từng trường hợp.

- **Tại sao chúng ta cần key?**

Khi **một phần tử mảng thay đổi**, **React cần biết li nào cần được cập nhật**; do đó, nó yêu cầu **cung cấp một key duy nhất** để chỉ **cập nhật phần tử đó** mà không **xóa tất cả các li khác** và hiển thị lại.

### 6. Trạng thái với đối tượng
[:arrow_up: Mục lục](#mục-lục)

- **Thêm khóa/giá trị một cách bất biến**

Hãy bắt đầu với phương thức làm thay đổi đối tượng:

```jsx
const data = {
    id: 1,
    name: "Sam"
}

//BAD: mutates
data.age = 18;
console.log(data); // {id: 1, name: "Sam", age: 18}
```

Thay vì cách trên, chúng ta có thể tạo một bản sao của đối tượng bằng cách sử dụng toán tử `spread: {...data}`.

Toán tử này tạo ra một đối tượng mới với các khóa và giá trị tương tự, sau đó chúng ta có thể thêm cặp khóa/giá trị mới vào đối tượng:

```jsx
const data = {
    id: 1,
    name: "Sam"
}

//GOOD: immutable
const newObj = {...data, age: 18}
console.log(newObj); // {id: 1, name: "Sam", age: 18}
```

- **Thay thế giá trị của khóa hiện có**

Cách sử dụng phương thức thay đổi đối tượng sẽ như sau:

```jsx
const data = {
    id: 1,
    name: "Sam"
}

//GOOD: immutable
const newObj = {...data, age: 18}
console.log(newObj); // {id: 1, name: "Sam", age: 18}
```

Thay vì cách trên, chúng ta có thể tạo một bản sao mới của đối tượng với `{...data}` và sau đó kết hợp nó với khóa mới nhưng có giá trị khác:

```jsx
const data = {
    id: 1,
    age: 19
}

// GOOD: immutable
const newObj = {...data, age: 20};
console.log(newObj); // {id: 1, age: 20}
console.log(data); // original object did not change {id: 1, age: 19}
```

Đoạn code này hoạt động vì `age: 20` trong `{...data, age: 20}` sẽ ghi đè lên `age` hiện tại.

- **Để ý thứ tự**

Lưu ý rằng khi bạn muốn thay thế giá trị, các giá trị mới nên đứng sau bản sao của đối tượng cũ.

Điều này cho phép ghi đè lên các giá trị cũ bằng các giá trị mới.

Do đó, đoạn code dưới đây SẼ KHÔNG hoạt động:

```jsx
const data = {
    id: 1,
    age: 19
}
const wrongNewObj = {age: 20, ...data};
```

Nguyên nhân là vì `age: 19` từ đối tượng data sẽ ghi đè lên `age: 20`.

Bạn chỉ cần sửa đổi thành `{...data, age: 20}` và đoạn code sẽ hoạt động.

- **Loại bỏ key-value**

Để xóa cặp key/value khỏi đối tượng mà không làm thay đổi đối tượng gốc, chúng ta cũng cần sử dụng toán tử `spread` nhưng với một cách tiếp cận khác.

Trước tiên, hãy bắt đầu với phương thức làm thay đổi đối tượng:

```jsx
const obj = {
    id: 1,
    title: "Harry potter",
    year: 2017,
    rating: 4.5
}

// BAD: mutates
delete obj.year;
console.log(obj); // { id: 1, title: "Harry potter", rating: 4.5}
```

Để xóa `year` mà không làm thay đổi đối tượng, chúng ta sẽ phải sử dụng 2 tính năng của JavaScript: **destructuring đối tượng và toán tử spread**:

```jsx
const obj = {
    id: 1,
    title: "Harry potter",
    year: 2017,
    rating: 4.5
}

// GOOD: immutable
const {year, ...rest} = obj;
console.log(rest); // { id: 1, title: "Harry potter", rating: 4.5}
```

Đoạn code này hoạt động vì const `{year, ...rest} = obj` destructure giá trị của khóa year từ `obj`.

Điều này tương tự như việc đọc `obj.year`.

Tuy nhiên, chúng ta cũng yêu cầu JavaScript destructure phần còn lại của đối tượng với `...rest`; tương đương với việc kết hợp tất cả các key/value khác trong một đối tượng mới tên là `rest`.

Vì vậy, chúng ta có rest là một bản sao bất biến của `obj` nhưng không có khóa `year`!

- **Giá trị mặc định**

Khi khởi tạo một trạng thái mới, chúng ta cần cung cấp một giá trị mặc định. 

Dạng phổ biến nhất mà bạn thường thấy là đặt giá trị mặc định là một đối tượng rỗng:

```jsx
import {useState} from "react";

function App() {
    const [data, setData] = useState({});
}
```

- **Lặp qua đối tượng trong JSX**

Đôi khi chúng ta có thể cần lặp qua đối tượng. Tuy nhiên, thao tác này không phổ biến như việc lặp qua mảng. Cách thực hiện như sau:

```jsx
function App() {
    const settings = {
        title: "Blog",
        theme: "dark"
    }

    return <ul>{
        Object.entries(settings).map(item => {
            return <li key={item[0]}>{item[0]} with value {item[1]}</li>
        })
    }</ul>;
}
```

JSX kết quả sẽ là:

```jsx
<ul>
    <li key="title">title with value Blog</li>
    <li key="theme">theme with value dark</li>
</ul>
```

Đoạn code trên hoạt động vì `Object.entries(settings)` trả về mảng sau:

```jsx
[
    ["title", "Blog"],
    ["theme", "dark"],
]
```

### 7. Xử lý form
[:arrow_up: Mục lục](#mục-lục)

- **Thuộc tính value trong HTML**

Trong HTML, chúng ta thường cung cấp giá trị mặc định cho ô nhập liệu bằng cách chỉ định thuộc tính value, ví dụ:

```jsx
<!-- HTML example -->
<input type="text" name="address" value="Amsterdam">
```

Đoạn code trên sẽ hiển thị một trường nhập liệu chứa giá trị **Amsterdam** và người dùng **có thể chỉnh sửa văn bản**.

Tuy nhiên, trong React, cách hoạt động của phần tử này có chút khác biệt.

**defaultValue**

Khi bạn thiết lập value cho phần tử input trong React, **giá trị đó sẽ không bao giờ thay đổi** (trừ khi bạn chỉ định trình xử lý onChange).

Do đó, dòng code JSX dưới đây không nên được sử dụng:

```jsx
<input type="text" name="address" value="Amsterdam" />
```

Để ý code sử dụng cú pháp **tự đóng thẻ** vì chúng ta đang sử dụng JSX; điều này là bắt buộc.

Kết quả trả về một trường nhập liệu **chứa giá trị Amsterdam nhưng không thể thay đổi**, nghĩa là nó là một trường nhập liệu **chỉ đọc**.

Thay vào đó, khi bạn muốn cung cấp giá trị mặc định cho người dùng, bạn nên sử dụng thuộc tính `defaultValue` như sau:

```jsx
<input type="text" name="address" defaultValue="Amsterdam" />
```

- **Nhận giá trị đầu vào**

Để lấy văn bản do người dùng viết, chúng ta sử dụng trình xử lý sự kiện `onChange` trên thẻ `<input />`:

```jsx
function handleAddressChange(event) {
    //...
}

<input type="text" name="address" onChange={handleAddressChange} />
```

Hàm `handleAddressChange` sẽ được gọi mỗi khi người dùng nhập một ký tự mới, xóa một ký tự hoặc thực hiện bất kỳ chỉnh sửa nào trên ô văn bản. Hàm sẽ được kích hoạt mỗi khi giá trị của trường nhập liệu thay đổi.

**Đối số event**

Hàm được truyền vào `onChange` sẽ nhận đối số là một `event`, tương tự như khi làm việc với DOM.

Tuy nhiên, event này về mặt kỹ thuật là sự kiện tổng hợp (**synthetic event**)

Bạn có thể đọc giá trị được viết bởi người dùng bằng cách truy cập vào: `event.target.value`:

```jsx
function handleAddressChange(event) {
    console.log(event.target.value);
}

<input type="text" name="address" onChange={handleAddressChange} />
```

Trong ví dụ này, `event.target` **tham chiếu đến phần tử** (trong ví dụ này là `<input />`). Vì đó là một trường nhập liệu, bạn đọc nội dung bên trong nó bằng cách truy cập trường thuộc tính `.value`.

**target vs currentTarget**

Nếu bạn đã từng viết code JavaScript thuần túy, bạn có thể đã quen việc sử dụng `currentTarget` thay cho `target` (vì `currentTarget` luôn tham chiếu đến phần tử mà bạn gọi `addEventListener` trong khi `target` sẽ phụ thuộc vào vị trí chính xác mà người dùng nhấp chuột).

Khi sử dụng `onChange` của React, **không có sự khác biệt** giữa `target` và `currentTarget` vì **chỉ có một phần tử duy nhất mà không có phần tử con**. Do đó, cả **hai giá trị sẽ trỏ đến cùng một phần tử**.

Bạn sẽ thấy nhiều nhà phát triển sử dụng `target` và đó cũng là một thực hành mà bạn nên làm theo.

**Hàm nội tuyến**

Các hàm inline (nội tuyến) thường được sử dụng với biểu mẫu vì bạn thường cần có một trình xử lý sự kiện nhỏ, ví dụ:

```jsx
<input type="text" name="address" onChange={event => console.log(event.target.value)} />
```

- **Controlled component là gì?**

**Controlled component** là khi bạn theo dõi giá trị của một input dưới dạng state và cập nhật giá trị mỗi khi nó thay đổi.

Việc sử dụng controlled component là rất hữu ích trong các trường hợp có thẻ `<input />` (hoặc các thẻ `<select />` hoặc `<textarea />`) vì nó cho phép bạn lấy giá trị do người dùng viết và tự động thay đổi giá trị khi trạng thái thay đổi.

**Cách tạo một controlled component:**

- Bắt đầu bằng việc tạo biến state để lưu trữ giá trị
- Biến sẽ có giá trị mặc định là một chuỗi rỗng ""
- Thiết lập giá trị của input là biến state đó
- Cập nhật state mỗi khi nó thay đổi

**Cung cấp giá trị mặc định**

Để lấy một giá trị mặc định **khác chuỗi rỗng**, bạn có thể cập nhật giá trị mặc định của `useState`:

```jsx
import {useState} from "react";

function App() {
    const [address, setAddress] = useState("Amsterdam");

    return <input type="text" value={address} onChange={event => setAddress(event.target.value)} />;
}
```

Bạn **không cần sử dụng thuộc tính `defaultValue`** nữa vì đây là một **controlled component**.

- **Gửi biểu mẫu**

Phần tử Form trong React hoạt động tương tự như trong các ứng dụng không sử dụng React, tức là khi bạn submit biểu mẫu, nó sẽ gửi dữ liệu đến trang hiện tại và dẫn đến việc tải lại trang.

Khi làm việc với `fetch`, bạn cần ngăn biểu mẫu gửi dữ liệu để có thể gửi dữ liệu với [`fetch`](https://github.com/CUNGVANTHANG/Front-end/tree/master/Javascript%20Theory#c-fetch).

Cách thực hiện cũng tương tự trong React, chúng ta cần gọi [`event.preventDefault()`](https://github.com/CUNGVANTHANG/Front-end/tree/master/Javascript%20Theory#k-preventdefault-and-stoppropagation) trong sự kiện submit:

```jsx
function App() {

    function handleFormSubmit(event) {
        event.preventDefault();
    }

    return <form onSubmit={handleFormSubmit}>
        <input type="text" name="name" />
        <input type="submit" value="Add" />
    </form>;
}
```

- **Gán nhãn cho form**

Dưới đây là cách thêm label cho một input trong HTML (trong React sẽ khác một chút):

```jsx
<form>
    <label for="login-email">Email: </label>
    <input type="email" id="login-email" placeholder="alex@email.com">

    <label for="login-password">Password: </label>
    <input type="password" id="login-password" placeholder="Password">

    <input type="submit" >
</form>
```

Phần tử `<label>` cần một thuộc tính for trỏ tới id của trường nhập liệu/hộp chọn/vùng văn bản mà nó liên kết đến.

Để ý đoạn code làm cho phần tử HTML hoạt động bằng cách thêm: `id="login-email"` và sau đó tham chiếu đến nó bằng `for="login-email"`. Và đối với trường mật khẩu: `id="login-password"` và sau đó tham chiếu đến nó bằng `for="login-password"`.

Đảm bảo rằng `id` là duy nhất vì `id` đó chỉ nên được sử dụng một lần trên mỗi trang HTML.

**Nhãn trong React**

Trong React, cách sử dụng thẻ label có một số khác biệt nhỏ so với cách sử dụng thông thường, tương tự như việc sử dụng thuộc tính class trong React khác với cách sử dụng trong HTML thông thường.

Hãy nhớ rằng trong React, chúng ta phải sử dụng `className` thay vì `class`. React truyền tất cả những props này xuống DOM, DOM mong đợi `props` là các trường thuộc tính hợp lệ của một phần tử HTML.

Điều tương tự áp dụng cho thuộc tính `for`. Tên trường thuộc tính thực tế là `htmlFor`.

Vì vậy, đây là biểu mẫu tương tự nhưng được viết bằng JSX:

```jsx
<form>
    <label htmlFor="login-email">Email: </label>
    <input type="email" id="login-email" placeholder="alex@email.com" />

    <label htmlFor="login-password">Password: </label>
    <input type="password" id="login-password" placeholder="Password" />

    <input type="submit" />
</form>
```

`<label />` cần một trường thuộc tính `htmlFor` trỏ tới `id` của phần tử.

### 8. Truyền vào hàm
[:arrow_up: Mục lục](#mục-lục)

- **Phân biệt Stateless component và Stateful component?**

**Stateless component** KHÔNG quản lý trạng thái bên trong. (**Không** có lệnh gọi **useState** bên trong component)

**Stateful component** quản lý trạng thái bên trong (**Có ít nhất** một lệnh gọi **useState** bên trong component).

- **Truyền hàm vào props**

Ngoài ra, **props cũng có thể chứa hàm**. Dưới đây là một ví dụ (để thuận tiện, cả hai component được định nghĩa trong cùng một file):

```jsx
function App() {
    function handleWelcome() {
        console.log("Hello World");
    }
    return <StoreFront onWelcome={handleWelcome} />;
}

function StoreFront(props) {
    props.onWelcome();

    return <div>Store renders here</div>;
}
```

Cùng phân tích các bước:

Chúng ta định nghĩa phương thức `handleWelcome` trong component cha tên là `App`.

Sau đó, chúng ta hiển thị component `StoreFront` và truyền một prop có tên là `onWelcome`.

Prop `onWelcome` là một hàm (tham chiếu đến hàm `handleWelcome`)

Từ bên trong component `StoreFront`, chúng ta có thể gọi hàm đó bằng `props.onWelcome()`.

`Hello World` sẽ được in ra màn hình.

- **Quy ước đặt tên**

Khi truyền hàm, bạn cần tuân theo quy ước đặt tên sau:

1. Các hàm vẫn được gọi bằng cách sử dụng `handleSubjectEvent`. (Ví dụ trên đã được đơn giản hóa và không có Event nên ta đã bỏ qua nó)
2. Đối với props là hàm, bắt đầu chúng với `onSubjectEvent`. Điều này giúp phân biệt dễ dàng giữ các phần tử props là hàm.

Thêm một ví dụ:

```jsx
function App() {
    function handleStoreOpen() {

    }

    function handleItemClick() {

    }

    return <StoreFront
            onStoreOpen={handleStoreOpen}
            onItemClick={handleItemClick}
        />
}
```

Để ý `onStoreOpen` là một prop truyền một hàm và tương tự cho `onItemClick`.

### 9. Chuyển trạng thái lên
[:arrow_up: Mục lục](#mục-lục)

- **Phân biệt Stateless component và Stateful component?**

**Stateless component** KHÔNG quản lý trạng thái bên trong. (**Không** có lệnh gọi **useState** bên trong component)

**Stateful component** quản lý trạng thái bên trong (**Có ít nhất** một lệnh gọi **useState** bên trong component).

- **Cải tiến component Form**

Bây giờ chúng ta đã biết cách truyền hàm dưới dạng props trong React, hãy xem xét component React sau:

```jsx
// index.js
import {useState} from "react";

function App() {
    const [name, setName] = useState("");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    return <div>
        <h2>Hello {name}</h2>
        <form>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" value={name} onChange={handleNameChange} />
        </form>
    </div>
}
```

Chúng ta muốn tái cấu trúc component thành:

```jsx
// index.js
import {useState} from "react";
import NameForm from "./NameForm.js";

function App() {
    const [name, setName] = useState("");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    return <div>
        <h2>Hello {name}</h2>
        <NameForm />
    </div>
}
```

Để ý đoạn code đã tái cấu trúc component `<form>` thành component `NameForm`.

**Truyền "value" và "onChange"**

Component `NameForm` cần hiển thị một hộp văn bản và cập nhật giá trị của nó mỗi khi có thay đổi; do đó, nó cần thiết lập các prop `value` và `onChange`.

Để làm điều đó, chúng ta bắt đầu bằng cách truyền chúng từ component App xuống:

```jsx
// index.js
import NameForm from "./NameForm.js";

function App() {
    const [name, setName] = useState("");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    return <div>
        <h2>Hello {name}</h2>
        <NameForm name={name} onNameChange={handleNameChange} />
    </div>
}
```

Một số điều cần lưu ý:

`name={name}` truyền biến trạng thái name xuống

`onNameChange={handleNameChange}` truyền hàm `handleNameChange`

`onNameChange` tuân theo quy ước đặt tên

Để ý trạng thái được tạo và duy trì trong component cha. Component App là **stateful component** vì nó **quản lý trạng thái**.

**Sử dụng "value" và "onChange"**

Bây giờ trong component `NameForm`, chúng ta có thể sử dụng 2 `prop` này:

```jsx
//NameForm.js
export default function NameForm(props) {

    return <form>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" value={props.name} onChange={props.onNameChange} />
    </form>
}
```

Một số điều cần lưu ý:

Component là **stateless** vì nó **KHÔNG quản lý trạng thái**. Mặc dù có một hộp văn bản, component này có một trình xử lý `onChange` gọi `props.onNameChange` thuộc về component cha của nó. Component cha xử lý trạng thái.

`value={name}` đã thay đổi thành `value={props.name}` vì `name` không còn là trạng thái nội bộ nữa mà là một `prop` **nhận được từ component cha**.

Bạn có nhận thấy rằng `App` là **stateful component** và `NameForm` là **stateless component** không?

- **Chia sẻ trạng thái giữa các component**

Giả sử chúng ta muốn xây dựng một Danh sách việc cần làm; chúng ta sẽ cần một form để thêm "todo" cũng như một danh sách ul để liệt kê các tác vụ.

```jsx
import {useState} from "react";

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [entry, setEntry] = useState("");

    function handleEntryChange(event) {
        setEntry(event.target.value);
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        // add the new entry
        setTodos([...todos, entry]);
        // reset/empty the textbox
        setEntry("");
    }

    return <>
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="todo">Enter To do: </label>
            <input type="text" id="todo" value={entry} onChange={handleEntryChange} />
        </form>
        <ul>
            {todos.map((todo, index) => <li key={index}>{todo}</li>)}
        </ul>
    </>;
}
```

Bây giờ hãy tách component này thành 2 component mới:

`<TodoForm />` chứa `<form>` và các component con của nó

`<TodoList />` chứa `<ul>` và các component con của nó

Vấn đề là cả hai component `TodoForm` và `TodoList` đều phụ thuộc vào cùng một trạng thái, đó là `todos` và `entry`.

Biểu mẫu cần trạng thái `todos` để có thể thêm `entry` mới vào mảng `todos`.

Vì vậy, chúng ta phải nâng trạng thái và định nghĩa trạng thái trong component cha, đó là `<TodoApp />`.

Sau đó, component `TodoApp` này sẽ truyền trạng thái và phương thức onChange xuống cả hai component con.

![image](https://github.com/CUNGVANTHANG/Front-end/assets/96326479/f8e6c191-5ccd-4856-aaa0-b7c1ed13e2e9)

Như vậy, trạng thái đã được định nghĩa trong component cha.

Code sau khi được tái cấu trúc:

```jsx
// TodoApp.js
import {useState} from "react";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [entry, setEntry] = useState("");

    function handleEntryChange(event) {
        setEntry(event.target.value);
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        setTodos([...todos, entry]);
        setEntry("");
    }

    return <>
        <TodoForm entry={entry} onEntryChange={handleEntryChange} onFormSubmit={handleFormSubmit} />
        <TodoList todos={todos} />
    </>;
}

// TodoForm.js
function TodoForm(props) {
    return <form onSubmit={props.onFormSubmit}>
        <label htmlFor="todo">Enter To do: </label>
        <input type="text" id="todo" value={props.entry} onChange={props.onEntryChange} />
    </form>;
}

// TodoList.js
function TodoList(props) {
    return <ul>
        {props.todos.map((todo, index) => <li key={index}>{todo}</li>)}
    </ul>;
}
```

Việc có trạng thái chung trong component cha chung gần nhất mang lại một số lợi ích nhất định (mặc dù code có thể dài hơn một chút). Cụ thể:

1. Component cha chung trở thành **nguồn dữ liệu duy nhất**. Điều này giúp dễ dàng việc tìm kiếm và sửa lỗi, vì bạn biết chỉ có một nơi duy nhất mà trạng thái sẽ được thay đổi.
2. Có một vị trí quản lý trạng thái chung giúp duy trì tính nhất quán trong ứng dụng. Nếu bạn tạo một số logic xác thực cho entry, bạn chỉ cần thực hiện một lần duy nhất trong component cha chung.

### 10. Cập nhật trạng thái bằng hàm
[:arrow_up: Mục lục](#mục-lục)

- **Cập nhật trạng thái có tính chất không đồng bộ**

Cập nhật trạng thái trong React là **hành vi bất đồng bộ**, tức là trạng thái không nhất thiết phải được cập nhật ngay lập tức.

Hành vi này được thiết kế như vậy nhằm giúp cải thiện hiệu suất của ứng dụng React.

Khi bạn cập nhật trạng thái trong React, điều này yêu cầu phải hiển thị lại component (và có thể cả các component khác), đó có thể là một hoạt động tốn kém. Đó là lý do tại sao React gom nhóm nhiều cập nhật trạng thái lại với nhau và kết hợp chúng thành một lần render để làm cho ứng dụng phản hồi nhanh hơn và giảm công việc mà trình duyệt phải thực hiện.

Hãy xem ví dụ sau:

```jsx
import React, {useState} from "react";

function App() {    
    const [date, setDate] = useState(new Date());
    const [counter, setCounter] = useState(0);

    console.log("rendered"); //allows us to visualize re-renders

    function handleButtonClick() {
        setDate(new Date());
        setCounter(counter + 1);
    }

    return <button onClick={handleButtonClick}>Click me</button>
}
```

Hàm `setDate()` thiết lập ngày hiện tại bằng cách gọi `new Date()`.

Bây giờ hãy trả lời những câu hỏi sau:

1. Có bao nhiêu cập nhật trạng thái xảy ra khi nhấp vào nút?
2. Component này sẽ được hiển thị lại bao nhiêu lần khi nhấp vào nút?

**Câu trả lời cho câu hỏi đầu tiên là:** có **hai** cập nhật trạng thái. Tuy nhiên, **component chỉ hiển thị lại một lần**.

Điều này là do React gom nhóm (kết hợp) hai thay đổi trạng thái này và thực hiện chúng cùng một lúc. Điều này giúp ứng dụng phản hồi nhanh hơn đối với tương tác của người dùng.

- **Cập nhật trạng thái bằng hàm**

Vì cập nhật trạng thái là hành vi bất đồng bộ, có một điều mà chúng ta cần phải để ý.

Để cho đơn giản, chúng ta sẽ xem xét component sau:

```jsx
import {useState} from "react";

function App() {
    const [counter, setCounter] = useState(0);

    function handleButtonClick() {
        setCounter(counter + 1);
        setCounter(counter + 1);
    }

    return <button onClick={handleButtonClick}>Click me {counter}</button>
}
```

Đây chỉ là code minh họa; tuy nhiên, code có **hai lệnh** gọi `setCounter` liên tiếp nhau.

Với đoạn code trên, bạn dự đoán giá trị của counter sẽ là bao nhiêu sau khi nhấp vào nút?

**Giá trị sẽ là 1**, không phải 2, lý do là:

```jsx
//assuming: counter is 0
setCounter(counter + 1);
setCounter(counter + 1);
```

Hai lần cập nhật trạng thái này sẽ được **gộp chung** và khi `counter = 0`, cuộc gọi `setCounter()` đầu tiên sẽ đặt giá trị của counter là `0 + 1 = 1`, nhưng việc cập nhật này không xảy ra ngay lập tức vì nó là **hành vi bất đồng bộ**.

Khi gọi **lần thứ hai** `setCounter(counter + 1)`, **giá trị của counter vẫn là 0** vì component chưa được hiển thị lại. Vì vậy, lần gọi thứ hai cũng sẽ cập nhật trạng thái thành 1.

Lưu ý rằng điều này xảy ra do các lần cập nhật trạng thái được gộp chung.

- **Cập nhật trạng thái bằng hàm**

Để giải quyết vấn đề này, React cung cấp khái niệm cập nhật trạng thái bằng hàm (**functional state updates**), đó là truyền một hàm vào hàm cập nhật trạng thái, dưới đây là một ví dụ:

```jsx
setCounter((previousCounter) => {
    return previousCounter + 1;
});
```

Phiên bản ngắn gọn hơn:

```jsx
setCounter(previousCounter => previousCounter + 1);
```

Chúng ta định nghĩa một hàm nhận giá trị trạng thái trước đó và trả về giá trị trạng thái mới. Trong ví dụ này, giá trị trạng thái mới là giá trị trạng thái trước đó + 1.

Dưới đây là cách bạn có thể sửa ví dụ trên để cộng vào trạng thái hai lần:

```jsx
import {useState} from "react";

function App() {
    const [counter, setCounter] = useState(0);

    function handleButtonClick() {
        setCounter(prevCounter => prevCounter + 1);
        setCounter(prevCounter => prevCounter + 1);
    }

    return <button onClick={handleButtonClick}>Click me {counter}</button>
}
```

**Giá trị trạng thái counter sẽ tăng thêm 2** mỗi lần bạn nhấp vào nút.

Bạn có thể chưa hiểu rõ nguồn gốc của `prevCounter`. Hãy nhớ rằng `prevCounter => prevCounter + 1` là **một định nghĩa hàm**. React sẽ gọi hàm này và truyền giá trị trạng thái trước đó vào làm đối số đầu tiên.

Điều này có nghĩa là bạn có thể đặt tên đối số đó thành bất cứ điều gì bạn muốn. Trong ví dụ này, ta sử dụng `prevCounter`.

## IV. Hook - useEffect
[:arrow_up: Mục lục](#mục-lục)

- **React.StrictMode**

React cung cấp component `StrictMode` giúp bạn tìm ra một số lỗi không mong muốn khi React đang chạy ở **chế độ phát triển**.

Bạn có thể giữ `StrictMode` khi chạy trong **chế độ sản xuất vì nó không có tác động đến ứng dụng**.

Thông qua đối tượng **React**, bạn có thể truy cập vào component `StrictMode`. Vì React là một đối tượng và `StrictMode` **là một khóa** của đối tượng đó, bạn có thể truy cập component đó bằng cách sử dụng cú pháp: `<React.StrictMode></React.StrictMode>` miễn là bạn đã thêm React vào file JavaScript.

```jsx
import React from "react";
import {createRoot} from "react-dom/client";

function App() {
}

const root = document.querySelector("#root");

createRoot(root).render(<React.StrictMode><App /></React.StrictMode>);
```

### 1. useEffect
[:arrow_up: Mục lục](#mục-lục)

Hook `useEffect` được dùng để triển khai hiệu ứng (effect) trong component.

Dưới đây là một số ví dụ về hiệu ứng:

- Gửi một yêu cầu đến nhà cung cấp dịch vụ phân tích
- Khởi tạo một plugin DOM ngoài React (ví dụ: vẽ bản đồ; sẽ được triển khai trong Dự án tiếp theo)
- Thay đổi tiêu đề trang (tiêu đề hiển thị trên thanh tab của trình duyệt)
- Đăng ký người dùng vào dịch vụ trò chuyện trực tiếp (với WebSockets)

Những hành động này được gọi là hiệu ứng vì chúng là các **chỉ thị chạy bên ngoài component hoặc là kết quả của component**.

- **Tiêu đề trang**

Trong JavaScript, bạn có thể cập nhật tiêu đề trang bằng cách thay đổi `document.title`, ví dụ:

```jsx
document.title = "React Tutorial App";
```

Bây giờ, giả sử chúng ta có một component React và chúng ta muốn đồng bộ tiêu đề với trạng thái hiện tại; ví dụ, chúng ta có biến trạng thái counter và chúng ta muốn hiển thị giá trị của bộ đếm đó trong tiêu đề; cách thực hiện như sau:

```jsx
import {useState, useEffect} from "react";

function Counter() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        document.title = `Counter is ${counter}`;
    });

    function handleButtonClick() {
        setCounter(prevCounter => prevCounter + 1);
    }
    
    return <button onClick={handleButtonClick}>Click me {counter}</button>
}
```

Bây giờ hàm này:

```jsx
() => {
    document.title = `Counter is ${counter}`;
}
```

sẽ được gọi sau mỗi lần hiển thị lại của component `Counter`.

Vì vậy, sau mỗi lần component `Counter` hiển thị (hoặc hiển thị lại), hàm trên sẽ được gọi, từ đó cập nhật tiêu đề trang.

Điều này cho phép bạn đồng bộ tiêu đề của tài liệu với giá trị `counter`.

