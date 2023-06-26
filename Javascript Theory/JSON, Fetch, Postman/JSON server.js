// Cách cài package.json trong 1 thư mục
// npm init
// npm i json-server

// Tiếp theo vào file package.json thêm "start": "json-server --watch db.json" trong phần "scripts"
// npm start

// {
//     "name": "json_server",
//     "version": "1.0.0",
//     "description": "",
//     "main": "index.js",
//     "scripts": {
//       "start": "json-server --watch db.json",
//       "test": "echo \"Error: no test specified\" && exit 1"
//     },
//     "author": "",
//     "license": "ISC",
//     "dependencies": {
//       "json-server": "^0.17.3"
//     }
//   }
  
var courseApi = 'http://localhost:3000/courses';

fetch(courseApi)
    .then(function(response) {
        return response.json();
    })

    .then(function(courses) {
        console.log(courses);
    });