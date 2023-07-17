var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    }, 
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    }, 
    {
        id: 4,
        name: 'PHP',
        coin: 400
    }, 
    {
        id: 5,
        name: 'ReactJS',
        coin: 500
    }, 
];

// forEach
courses.forEach(function(course, index) { // Duyệt qua từng phần tử của mảng
    console.log(index, course);
});


// every
// var isFree = courses.every(function(course, index) { // Kiểm tra từng phần tử xem có thỏa mãn không
//     return course.coin === 0
// });

// console.log(isFree)


// some
// var isFree = courses.some(function(course, index) { // Chỉ cần 1 phần tử thỏa mãn 
//     return course.coin === 0;
// });

// console.log(isFree)


// find
// var isFree = courses.find(function(course, index) { // Tìm kiếm trả về 1 đối tượng tìm thấy đầu tiên
//     return course.name === 'Ruby';
// });

// console.log(isFree)


// filter
// var isFree = courses.filter(function(course, index) { // Tìm kiếm trả về tất cả đối tượng tìm thấy
//     return course.name === 'Ruby';
// });

// console.log(isFree)