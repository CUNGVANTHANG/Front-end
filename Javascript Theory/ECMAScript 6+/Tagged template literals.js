function hightlight([first, ...strings], ...values) {
    return values.reduce(
        (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()],
        [first]
    )
    .join('');
}

var brand = 'F8';
var course = 'Javascript';

const html = hightlight`Học lập trình ${course} tại ${brand}!`;  // Tagged template literal

console.log(html);