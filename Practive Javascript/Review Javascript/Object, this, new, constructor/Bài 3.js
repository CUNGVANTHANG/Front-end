let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let total = 0

for(let employee in salaries) {
    if(salaries.hasOwnProperty(employee)) {
        total += salaries[employee];
    }
}

console.log(total)