var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    }, 
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    }, 
    {
        id: 4,
        name: 'PHP',
        coin: 400
    }, 
    {
        id: 5,
        name: 'ReactJS',
        coin: 500
    }, 
];

// Biến lưu trữ
// Thực hiện việc lưu trữ

var i = 0;

function coinHandler(accumulator, currentValue, currentIndex, originArray) {
    i++;

    var total = accumulator + currentValue.coin;
    console.table({
        'Lượt chạy: ': i,
        'Biến tích trữ: ': accumulator,
        'Giá khóa học: ': currentValue.coin,
        'Tích trữ được: ': total
    });
    console.log(currentValue);

    return total;
}

var totalCoin = courses.reduce(coinHandler, 0); // 0 là giá trị khởi tạo

console.log(totalCoin);