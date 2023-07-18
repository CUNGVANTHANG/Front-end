let n = prompt('Nhập n')

let isPrime = (element) => {
    let count = 0
    for(let i = 2; i <= Math.sqrt(element); i++) {
        if (element % i == 0) {
            count++
            if (count > 0) {
                continue
            }
        }
    }
    if (count == 0) {
        console.log(element)
    }
}

for(let element = 2; element <= n; element++) {
    isPrime(element)
}