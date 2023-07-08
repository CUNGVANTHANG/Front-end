// import html from './core.js' // Nội suy

// const cars = ['BMW', 'Porsche', 'Mercedes']

// const isSuccess = true

// map: convert mảng sang chuỗi, nối bằng dấu ,
// const output = html`
//     <h1></h1>
//     <ul>
//         ${cars.map(car => `<li>${car}</li>`)} 
//     </ul>
// `

// console.log(output)

import { attach } from './store.js'
import app from './component/app.js'

attach(app, document.getElementById('root'))