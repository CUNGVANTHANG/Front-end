let schedule = {};

isEmpty = (obj) => {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) { // Kiểm tra trên các key có thuộc tính không
            return false;
        }
    }
    return true
}
console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false
