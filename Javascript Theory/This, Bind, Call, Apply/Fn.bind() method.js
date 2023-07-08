// bind (ràng buộc)
// Phương thức bind() sẽ trả về một hàm mới
// Có thể nhận các đối số như hàm ban đầu
// Tóm tắt:
// - Phương thức bind() cho phép ràng buộc this cho một phương thức (function)
// - Phương thức bind() sẽ trả về một hàm mới với context được bind
// - Hàm được trả về từ bind() vẫn có thể nhận các đối số của hàm gốc
// VD1:
this.firstName = 'Minh'
this.lastName = 'Thu'

const teacher = {
    firstName: 'Minh',
    lastName: 'Thảo',
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

const student = {
    firstName: 'Thang',
    lastName: 'Cung',
}

// Case 1:
console.log(teacher.getFullName()) // Minh Thảo

// Case 2:
const getTeacherName = teacher.getFullName // Khi gán cho biến khác đối tượng bị thay đổi 

console.log(getTeacherName()) // Minh Thu

// Giải thích: Khi mà ta gọi hàm getTeacherName() mà không có dấu chấm . ở đằng trước, this sẽ chọc ra phạm vi global (window)

// Case 3:
const getStudentName = teacher.getFullName.bind(student); // Đối tượng ràng buộc là student
// Thang Cung

// VD2:
const teacher1 = {
    firstName: 'Minh',
    lastName: 'Thảo',
    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

const button = document.querySelector('button')

button.onclick = teacher1.getFullName // undefined undefined
// Lúc này this trỏ tới button, đối tượng bị thay đổi

// Khắc phục: ràng buộc tới teacher1
button.onclick = teacher1.getFullName.bind(teacher1) // Minh Thảo


