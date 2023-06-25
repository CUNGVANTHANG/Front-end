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