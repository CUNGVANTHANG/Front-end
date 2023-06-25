// ClassList property

// add 
// contains
// remove
// toggle

// VD: 
{/* 
<style>
    .red {
        color: red;
    }
</style>

<div class = "box box-2"></div> 
*/}

var boxElement = document.querySelector('.box');

console.log(boxElement.classList);

// DOMTokenList(2) ["box","box-2", value: "box box-2"]

console.log(boxElement.classList.length) // 2 (Trả về số lượng)
console.log(boxElement.classList[1]) // box-2 
console.log(boxElement.classList.value) // box box-2

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

// Ứng dụng trong việc đóng/mở cửa sổ