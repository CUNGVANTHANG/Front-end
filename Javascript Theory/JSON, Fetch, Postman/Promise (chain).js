// Bài toán 1:
var promise = new Promise(
    // Executor
    function(resolve, reject) {
        // Logic
        // Thành công: resolve()
        // Thất bại: reject()

        resolve();
    }
);

// Cách hoạt động 1: Chạy dọc từ trên xuống dưới
promise
    .then(function() {
        console.log(1);
    })
    .then(function() {
        console.log(2);
    })
    .then(function() {
        console.log(3);
    })
    .catch(function(error) {
        console.log(error);
    })
    .finally(function() {
        console.log('Done!');
    });
// 1
// 2
// 3
// Done!

// Cách hoạt động 2: Chạy dọc từ trên xuống dưới, nhận giá trị data từ thằng phía trên
promise
    .then(function() {
        return 1;
    })
    .then(function(data) {
        console.log(data);
        return 2;
    })
    .then(function(data) {
        console.log(data);
        return 3;
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log(error);
    })
    .finally(function() {
        console.log('Done!');
    });

// 1
// 2
// 3
// Done!

// Cách hoạt động 3: Nếu thằng trên không return gì cả, thì thằng dưới sẽ trả về undefined
promise
    .then(function() {
      
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log(error);
    })
    .finally(function() {
        console.log('Done!');
    });

// undefined
// Done!

// Cách hoạt động 4: return Promise: Thằng thứ 2 phải đợi thằng 1 thực thi promise xong
promise
    .then(function() {
        return new Promise(function(resolve) {
            setTimeout(resolve, 3000);
        });
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log(error);
    })
    .finally(function() {
        console.log('Done!');
    });

// undefined
// Done!

// Bài toán 2:
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
        return sleep(1000);
    }) 
    .then(function() {
        console.log(3);
        return sleep(1000);
    }) 
    .then(function() {
        console.log(4);
        return sleep(1000);
    }); 

// 1
// 2
// 3
// 4
    