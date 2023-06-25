// DOM events

// 1. Input / select
// VD:
{/* 
<input type="text">
<input type="checkbox">
<select>
    <option value="valuel">l</option>
    <option value="value2">2</option>
    <option value="value3">3</option>
</select> 
*/}

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

