let message;
let login = ''

// Cách 1:
// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

// Cách 2:
message = login == 'Employee' ? 'Hello' : login == 'Director' ? 'Greetings' : login == '' ? 'No login' : ''

console.log(message)