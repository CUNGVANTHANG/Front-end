function arrToObj(arr) {
    var results = arr.reduce(function(obj, item) {
        var key = item[0];
        var value = item[1];
        obj[key] = value;
        return obj;
    }, {});
    return results;
}
 
// Expected results:
var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];
console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }
