// DOM events

// 1. preventDefault
// VD1:
{/* 
<a href="https://f8.edu.vn">
    Học Lập trình
</a>
<br />
<a href="https://google.com.vn">
    Tìm kiếm
</a>
// Khi bấm vào thẻ a chứa href="https://f8.edu.vn và href="https://google.com.vn sẽ tự động chuyển sang trình duyệt của trang web đó
// Mục tiêu: Muốn thẻ a chứa href="https://f8.edu.vn sẽ chuyển trang, còn thẻ a chứa href="https://google.com.vn sẽ không chuyển trang
*/}

var aElements = document.links;

for(var i = 0; i < aElements.length; ++i) {
    aElements[i].onclick = function(e) {
        if (!e.target.href.startsWith('https://f8.edu.vn')) { // Thuộc tính href không chứa https://f8.edu.vn thì sẽ ngăn chặn hành vi mặc định của thẻ a
            e.preventDefault();
        }
    }
}

// VD2:
{/* 
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
*/}
// Khắc phục:
var ulElement = document.querySelector('ul');

ulElement.onmousedown = function(e) { // Lắng nghe sự kiện khi nhấp chuột xuống
    e.preventDefault(); // Ngăn chặn hành vi mặc định
}

ulElement.onclick = function(e) {
    console.log(e.target);
}

// 2. stopPropagation
// VD: 
{/* 
<div>
    DIV 
    <button>CLick me!</button>
</div> 
*/}

// Sự kiện nổi bọt: Khi click chuột vào Click me! nó sẽ in ra cả DIV và Click me!
// Khắc phục: Khi click chuột vào Click me! chỉ in ra Click me!

document.querySelector('div').onclick = 
    function() {
        console.log('DIV')
    }

document.querySelector('button').onclick = 
    function(e) {
        e.stopPropagation();
        console.log('Click me!')
    }