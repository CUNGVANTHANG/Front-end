// Closure là một hàm có thể ghi nhớ nơi nó được tạo và truy cập được biến ở bên ngoài phạm vi của nó
// Biến được tham chiếu (refer) trong closure sẽ không được xóa khỏi bộ nhớ khi hàm cha thực thi xong
// VD1:
function createCounter() {
    let counter = 0

    function increase() {
        return ++counter
    }

    return increase
}

const counter1 = createCounter()

console.log(counter1())
console.log(counter1())
console.log(counter1())
// 1
// 2
// 3

// VD2:
function createLogger(namespace) {
    function logger(message) {
        console.log(`[${namespace}] ${message}`)
    }

    return logger
}

// ================ App ================

// Register.js

const infoLogger = createLogger('Info')

infoLogger('Bắt đầu gửi mail')
infoLogger('Gửi mail lỗi lần 1, thử gửi lại...')
infoLogger('Gửi mail thành công cho user xxx')

// VD3:
function createStorage(key) {
    const store = JSON.parse(localStorage.getItem(key)) ?? {}

    const save = () => {
        localStorage.setItem(key, JSON.stringify(store))
    }

    const storage = {
        get(key) {
            return store[key]
        },
        set(key, value) {
            store[key] = value
            save()
        },
        remove(key) {
            delete store[key]
            save()
        }
    }

    return storage
}

// Profile.js
const profileSetting = createStorage('profile_setting')

console.log(profileSetting.get('fullName'))

profileSetting.set('fullName', 'Nguyễn Văn')

// VD4:
function createApp() {
    const cars = []

    return {
        add(car) {
            cars.push(car)
        },
        show() {
            console.log(cars)
        }
    }
}

const app = createApp()

app.show()
app.add('BMW')
app.show() 