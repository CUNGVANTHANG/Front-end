// function constructor
function Course(name, price) {
    this.name = name;
    this.price = price;

    this.getName = function() {
        return this.name;
    };
}

// classes (sẽ viết gọn gàng hơn function construct)
class Course {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getName() {
        return this.name;
    }
}