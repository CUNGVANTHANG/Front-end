// Object constructor // Mô tả thiết kế của đối tượng

var User = function(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}

var author = new User('Thang', 'Cung', 'Avatar');
var user = new User('Cung', 'Thang', 'Avatar');

author.title = 'Học lập trình Javascript';
user.comment = 'Học lập trình C++';

console.log(author);
console.log(user);