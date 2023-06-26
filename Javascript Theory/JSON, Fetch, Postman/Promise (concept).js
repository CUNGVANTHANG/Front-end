// Trả lời phỏng vấn về promise
// Promise được sinh ra để xử lý những thao tác bất đồng bộ
// Trước khi có promise thì chúng ta thường sử dụng callback và callback có xảy ra 1 vấn đề là callback hell
// Để tạo ra 1 promise thì ta sẽ sử dụng từ khóa new với Promise trong Contructor của nó, rồi truyền 1 Executor function, trong Executor function nhận được 2 tham số resolve và reject
// Resolve gọi khi thao tác xử lý thành công
// Reject gọi khi thao tác xử lý thất bại 
// Chúng ta sử dụng qua các phương thức .then và .catch
// .then được thực thi khi mà promise được resolve
// .catch được thực thi khi mà promise được reject

// Bước 1: new Promise
// Bước 2: Executor

// Tồn tại ở 3 trạng thái
// 1. Pendding (chờ đợi thành công hay thất bại)
// 2. Fulfilled (thành công)
// 3. Rejected (Thất bại)
 
var promise = new Promise(
    // Executor
    function(resolve, reject) {
        // Logic
        // Thành công: resolve()
        // Thất bại: reject()

        // Fake call API
        resolve([
            {
                id: 1,
                name: 'Javascript'
            }
        ]);

        reject('Co loi!');
    }
);

promise
    .then(function(courses) {
        console.log(courses);
    })
    .catch(function(error) {
        console.log(error);
    })
    .finally(function() {
        console.log('Done!');
    });