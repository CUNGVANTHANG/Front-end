// Optional chaining (?.)

const obj = {
    name: 'Alice',
    cat: {
        name: 'Dinah',
        cat2: {
            name: 'Dinah 2',
            cat3: {
                name: 'Dinah 3'
            }
        }
    }
}

// Bình thường sẽ viết
if(
    obj.cat &&
    obj.cat.cat2 &&
    obj.cat.cat2.cat3
) {
    console.log(obj.cat.cat2.cat3.name)
}

// Optional chaining cú pháp viết
if(obj?.cat?.cat2?.cat3) {  // Optional chaining (?.) được sử dụng khi không thực sự chắc chắn key tồn tại
    console.log(obj.cat.cat2.cat3.name)
}

// VD2:
const obj2 = {
    getNam(value) {
        console.log(value);
    }
}

obj2.getName?.(123);