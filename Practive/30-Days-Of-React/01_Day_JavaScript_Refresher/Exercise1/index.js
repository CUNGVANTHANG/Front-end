const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

// 1
const array1 = new Array();

// 2
const array2 = new Array(5);

// 3
console.log(array2.length);

// 4
const array3 = [1, 2, 3, 4, 5];
console.log(array3[0]);
console.log(array3[parseInt(array3.length / 2)]);
console.log(array3[array3.length - 1]);

// 5
const mixDataTypes = [1, 3, 5.6, "Thang", "Hello", 5.98];
console.log(mixDataTypes.length);

// 6
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// 7
console.log(itCompanies);

// 8
console.log(itCompanies.length);

// 9
console.log(itCompanies[0]);
console.log(itCompanies[parseInt(itCompanies.length / 2)]);
console.log(itCompanies[itCompanies.length - 1]);

// 10
itCompanies.forEach((element) => console.log(element));

// 11
const array4 = itCompanies.map((element) => {
  return element.toUpperCase();
});

console.log(array4);

// 12
let res = "";
itCompanies.forEach((element, index) => {
  if (index === itCompanies.length - 1) {
    res += "và " + element + " là những công ty CNTT lớn.";
    return;
  } else {
    res += element;
  }

  if (index == itCompanies.length - 2) {
    res += " ";
  } else {
    res += ", ";
  }
});

console.log(res);

// 13
const search = "sd";

let empty = itCompanies.some((value) => {
  return value === search;
});

console.log(empty);

// 14
let companiesWithTwoOs = [];
for (let i = 0; i < itCompanies.length; i++) {
  let count = 0;
  for (let j = 0; j < itCompanies[i].length; j++) {
    if (itCompanies[i][j] === "o") count++;
  }
  if (count > 1) companiesWithTwoOs.push(itCompanies[i]);
}
console.log(companiesWithTwoOs);

// 15
itCompanies.sort();
console.log(itCompanies);

// 16
itCompanies.reverse();
console.log(itCompanies);

// 17
itCompanies.splice(0, 3);
console.log(itCompanies);

// 18
itCompanies.splice(-3);
console.log(itCompanies);
