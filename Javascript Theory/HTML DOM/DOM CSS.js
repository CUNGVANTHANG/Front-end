// DOM style

// background-position <-> backgroundPosition (kiểu viết camelCase)


var boxElement = document.querySelector('.box');

// C1:
boxElement.style.width = '100px';
boxElement.style.height = '200px';
boxElement.style.backgroundColor = 'red';

// C2: Thêm nhiều thuộc tính
Object.assign(boxElement.style, {
    width: '200px',
    height: '100px',
    backgroundColor: 'green',
});
