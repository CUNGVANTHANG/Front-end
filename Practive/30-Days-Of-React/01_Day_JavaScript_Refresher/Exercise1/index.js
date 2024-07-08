const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]
  
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
]

// 1
const array1 = new Array();

// 2
const array2 = new Array(5);

// 3
console.log(array2.length)

// 4
const array3 = [1, 2, 3, 4, 5]
console.log(array3[0])
console.log(array3[parseInt(array3.length / 2)])
console.log(array3[array3.length - 1])

// 5
const mixDataTypes = [1, 3, 5.6, "Thang", "Hello", 5.98]
console.log(mixDataTypes.length)

// 6
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

// 7
console.log(itCompanies)

// 8
console.log(itCompanies.length)

// 9 
console.log(itCompanies[0])
console.log(itCompanies[parseInt(itCompanies.length / 2)])
console.log(itCompanies[itCompanies.length - 1])

// 10
itCompanies.forEach(element => console.log(element))

// 11
itCompanies.filter