// DOM events
// 1. Attribute events (Sử dụng thuộc tính trong file HTML)
<h1 onclick="console.log(this)">
    <span onclick="console.log(this)">DOM events</span>
</h1>

// <span onclick="console.log(this)">DOM events</span> 
{/* 
<h1 onclick="console.log(this)">
    <span onclick="console.log(this)">DOM events</span>
</h1> 
*/}

// Sự kiện nổi bọt: Nghĩa là nó sẽ lắng nghe sự kiện của thằng con trước xong mới đến thằng cha là thẻ h1


// 2. Assign envent using the element node
// VD:
{/* 
<h1>
    <span>DOM events 1</span>
</h1>
<h1>
    <span>DOM events 2</span>
</h1>
<h1>
    <span>DOM events 3</span>
</h1> 
*/}

var h1Element = document.querySelectorAll('h1');

for(var i = 0; i < h1Element.length; i++){
    h1Element[i].onclick = function(e) { // e ở đây nghĩa là event
        console.log(e.target);
    }
}