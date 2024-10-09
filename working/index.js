//asynchronous


// const fs=require("fs")
// console.log("first");
// fs.readFile("./one.txt","utf8",(err,data)=>{
//     console.log("second",data);
    
// })
// console.log("third");

//synchronous

const fs=require("fs")
console.log("first");
 const a=fs.readFileSync("./one.txt","utf8")
    console.log("second",a);
    

console.log("third");

