let user = {}

user.name = 'David'
user.surname = 'Xuan'
console.log(user)
// { name: 'David', surname: 'Xuan' }

user.name = 'Cafedev'
console.log(user)
// { name: 'Cafedev', surname: 'Xuan' }


delete user.name
console.log(user)
// { surname: 'Xuan' }