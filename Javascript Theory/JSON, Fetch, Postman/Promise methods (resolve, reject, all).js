// Bài toán 1: 
function sleep(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

sleep(1000)
    .then(function() {
        console.log(1);
        return sleep(1000);
    }) 
    .then(function() {
        console.log(2);
        return new Promise(function(resolve, reject) {
            reject('Co loi!');
        });
    }) 
    .then(function() {
        console.log(3);
        return sleep(1000);
    }) 
    .then(function() {
        console.log(4);
        return sleep(1000);
    }) 
    .catch(function(error) {
        console.log(error);
    })

// 1
// 2
// Co loi!

// 1. Promise.resolve
// 2. Promise.reject
// 3. Promise.all

var promise = Promise.resolve('Success!'); // Luôn luôn thành công

promise 
    .then(function (result) {
        console.log('result: ', result);
    })
    .catch(function(err) {
        console.log('err: ', err);
    })

// result: Success!

var promise = Promise.reject('Error!'); // Luôn luôn thất bại

promise 
    .then(function (result) {
        console.log('result: ', result);
    })
    .catch(function(err) {
        console.log('err: ', err);
    })

// err: Error!

// Bài toán 2:
var promise1 =  new Promise(
    function(resolve) {
        setTimeout(function() {
            resolve([1]);
        }, 2000);
    }
);

var promise2 =  new Promise(
    function(resolve) {
        setTimeout(function() {
            resolve([2, 3]);
        }, 5000);
    }
);

// Nếu viết như thế này thì tổng thời gian chạy 2 promise sẽ là 7s
// Khắc phục bằng cách sử dụng all thì tổng thời gian chạy 2 promise chỉ còn là 5s

Promise.all([promise1, promise2])
    .then(function(result) {
        var result1 = result[0];
        var result2 = result[1];

        console.log(result1.concat(result2));
    })

// [1, 2, 3]

// Bài toán 3: 
var promise1 =  new Promise(
    function(resolve) {
        setTimeout(function() {
            resolve([1]);
        }, 2000);
    }
);

var promise2 =  Promise.reject('Co loi!');

Promise.all([promise1, promise2])
    .then(function([result1, result2]) {
        console.log(result1.concat(result2));
    })
    .catch(function(error) {
        console.log(error);
    });

// Co loi!