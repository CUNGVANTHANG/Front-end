// DOM attributes

// VD1: <h1>Heading</h1>

var headingElement = document.querySelector('h1');

// C1: seter
headingElement.title = 'heading'; // Thêm thuộc tính title vào thẻ h1
// <h1 title="heading">Heading</h1>

headingElement.className = 'heading'; // Thêm thuộc tính class vào thẻ h1
// <h1 class="heading">Heading</h1>

// C2: Dùng để tạo thuộc tính mới hoặc thuộc tính đã có của element
headingElement.setAttribute('class', 'heading');
// <h1 class="heading">Heading</h1>

headingElement.setAttribute('data', 'heading');
// <h1 data="heading">Heading</h1>



// VD2: <h1 title="heading-test">Heading</h1>
var headingElement = document.querySelector('h1');
headingElement.data = 'data test';

// C1: Sử dụng phương thức setAttribute
console.log(headingElement.setAttribute('title')); // Lấy ra value của thuộc tính
// heading-test

// C2:
console.log(headingElement.title); // Điều kiện thuộc tính phải hợp lệ nghĩa là tồn tại trong element
// heading-test

console.log(headingElement.data); // data không phải thuộc tính có sẵn trong element nên không hợp lệ
// Undefined

console.log(headingElement.getAttribute('data')); // Sử dụng phương thức getAttribute có thể lấy ra được thuộc tính tự tạo mới
// data test