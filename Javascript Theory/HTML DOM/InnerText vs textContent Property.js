// 1. Element
// 2. Attribute
// 3. Text

// innerText, textContent

// VD:
{/* <h1 class="heading">

    <span style="display: none">Heading</span>
    <span>text</span>

    <style>
        .box {
            width: 100px;
            height: 100px;
        }
    </style>
</h1> */}

var headingElement = document.querySelector('.heading');

// innerText chỉ tồn tại trên element node, nên muốn lấy text node phải thông qua element node
console.log(headingElement.innerText); //  --> innerText sẽ in ra text node có trên màn hình trình duyệt
// text


// textContetn tồn tại cả trên element node và text node
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

