Array.prototype.reduce2 = function(callback, result) {
    let i = 0
    if (arguments.length < 2) {
        i = 1
        result = this[0]
    }
    for(; i < this.length; i++){
        result = callback(result, this[i], i, this)
    }
    return result
}

const numbers = [1, 2, 3, 4, 5]

const result = numbers.reduce2((total, number, index, array) => {
    console.log(total, number, index, array)
    return total + number
}, 0)

console.log(result)

// Trường hợp 1: Không truyền initialValue: result lúc này sẽ là phần tử đầu tiên của mảng
// Trường hợp 2: Truyền initialValue: result lúc này sẽ là initialValue 
// Với mỗi phần tử, hàm callback được gọi với các tham số: result (giá trị kết quả hiện tại), phần tử hiện tại, chỉ số và mảng gốc (this).