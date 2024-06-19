# ReactJS Theory
## Mục lục

<details>
  <summary>Ôn tập lại JS</summary>

- [I. SPA/MPA là gì?](#i-spampa-là-gì)
- [II. Ôn lại ES6+](#ii-ôn-lại-es6)
</details>

<details>
  <summary>ReactJS</summary>

- [I. React, ReactDOM](#i-react-reactdom)
- [II. JSX](#ii-jsx)
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

## III. Component
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

## IV. Props
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

