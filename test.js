// import path from 'path'
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)
// const abspath = path.join(__dirname,'page','App.css');
// console.log(abspath)


// let a = {
//     a:1,
//     b:{
//         c:2
//     }
// }

// let a1 = {...a}
// a1.a = 2;
// console.log(a)

let a = [1,4,3,5];

let c = 0
// let b = a.filter((a,b)=>{
//     console.log(a>b)
//     return a>2
// })
let b = a.reduce((sum,x)=> {
  return sum + x
} )

console.log(b)

