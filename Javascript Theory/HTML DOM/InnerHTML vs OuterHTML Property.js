// VD1:
{/* <div class="box"></div> */}

var boxElement = document.querySelector('.box');

boxElement.innerHTML = '<h1>Heading</h1>';
{/* 
<div class="box">
    <h1>Heading</h1>
</div> 
*/}

boxElement.innerHTML = 'New heading';
{/* <div class="box">New heading</div>  */}

boxElement.innerHTML = '<h1 title="Heading">New heading</h1>';
{/* 
<div class="box">
    <h1 title="Heading">New heading</h1>
</div> 
*/}



// VD2:
{/* 
<div class="box">
    <h1 title="Heading">New heading</h1>
</div>  
*/}

var boxElement = document.querySelector('.box');

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
{/* <span>Test</span> */}
