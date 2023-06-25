// sync (đồng bộ)
console.log(1);
console.log(2);

// 1
// 2
// Nghĩa là chạy theo trình tự từ trên xuống dưới
// Hay nghĩa là console.log(1) chạy trước xong đến console.log(2)

// async (bất đồng bộ)
// setTimeout, setInterval, fetch, XMLHttpRequest, file reading, request animation frame
// Khắc phục bằng callback

setTimeout(function() { // sleep
    console.log(1);
}, 1000);

console.log(2);

// 2
// 1
// Nghĩa là in ra không theo trình tự, thực tế thì nó vẫn chạy theo trình tự nhưng có sự cản trở 

