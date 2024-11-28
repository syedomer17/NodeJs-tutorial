// console.log("hello world!");
// const readline = require('readline');
// const rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });

// rl.question("please enter your name:",(name)=>{
//     console.log(`your name is ${name}`);
//     rl.close();
// })

// rl.on('close',()=>{
//     console.log("interface is close");
//     process.exit(0);
// })

const readline = require('readline');
const fs =require('fs');
let textin = fs.readFileSync('./files/input.txt','utf-8');
console.log(textin);

let contant = `data from input.txt:${textin} \nDate created ${new Date()}`
fs.writeFileSync('./files/output.txt',contant)