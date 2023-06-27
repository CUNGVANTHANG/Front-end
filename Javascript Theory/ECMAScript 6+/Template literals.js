// VD1:
// Viết bình thường
const course = 'Javascript';
const course2 = 'PHP ' + course;
console.log(course2);

// Viết kiểu Template string
const courseName = 'Javascript';
const courseName2 = 'PHP';
const courseName3 = `${courseName} ${courseName2}`
console.log(courseName3);
// Javascript PHP

const descriptiton = `Template string noi suy voi: \${}`
console.log(descriptiton);
// Template string noi suy voi: ${}

// VD2:
// Viết bình thường
const lines = 'line 1\n'
    + 'line 2\n'
    + 'line 3\n'
    + 'line 4\n'
    + 'line 5\n'

console.log(lines);
// line 1
// line 2
// line 3
// line 4
// line 5

// Viết kiểu template string
const line = `line 1
line 2
line 3`

console.log(line);
// line 1
// line 2
// line 3