// IIFE - Immediately Invoked Function Expression

// 1. IIFE trông như nào?
// 2. Dùng dấu ; trước IIFE
// 3. IIFE là hàm "private"
// 4. Sử dụng IIFE khi nào?
// 5. Các cách tạo ra một IIFE
// 6. Ví dụ sử dụng IIFE

// 1. IIFE trông như nào?
(function () { // IIFE - Tạo ra function xong đó gọi ngay function đó
    console.log('NOW NOW') // NOW NOW
})()

(function(message) {
    console.log('Message: ', message) // Chao ban
})('Chao ban')

// 2. Dùng dấu ; trước IIFE
// 3. IIFE là hàm "private"
;(function myFunc() {
    i++
    console.log(i)

    if (i < 10)
        myFunc()
})()
// Chạy bình thường in ra 1 2 3 4 5 6 7 8 9 10

;(function myFunc() {
    console.log('NOW')
})()

myFunc()
// Lỗi vì IIFE là hàm "private" không gọi ở ngoài được

// 4. Sử dụng IIFE khi nào?
// Sử dụng IIFE khi mà viết với khối lượng code lớn, rất nhiều biến, hàm có thể bị trùng lặp dẫn đến ghi đè hoặc bị lỗi
// Ta sẽ dùng IIFE để sử dụng trong hàm mà không ảnh hưởng đến biến, hàm xung quanh

// 5. Các cách tạo ra một IIFE
// C1:
;(function () {
    let fullName = 'Cung Thang'
    console.log(fullName)
})()

// C2:
;(function () {
    let fullName = 'Cung Thang'
    console.log(fullName)
}())

// C3: Dùng toán tử +, -, !... vào trước
+function () {
    let fullName = 'Cung Thang'
    console.log(fullName)
}()

// 6. Ví dụ sử dụng IIFE
const app = {
    cars: [],
    add(car) {
        this.cars.push(car)
    },
    edit(index, car) {
        this.cars[index] = car
    },
    delete(index) {
        this.cars.splice(index, 1)
    }
}
// Xảy ra trường hợp khi ta add.cars = null xong đó all.cart = 'Mazda' xảy ra lỗi
// Dẫn đến có thể hỏng ứng dụng

// Khắc phục sử dụng IIFE để bảo toàn tính toàn vẹn
const app1 = (function() {
    // Private 
    const cars = []  

    // Public 
    return {
        get(index) {

        },
        add(car) {
            cars.push(car)
        },
        edit(index, car) {
            cars[index] = car
        },
        delete(index) {
            cars.splice(index, 1)
        }
    }  
})()