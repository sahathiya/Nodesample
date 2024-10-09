
//1
// const fs=require("fs")
// fs.readFile(__filename,()=>{
//     console.log("readfile");
    
// })


// process.nextTick(()=>console.log("process nextTick "))

// Promise.resolve().then(()=>console.log("promise resolved "))

//2

// const fs=require("fs")
// setTimeout(()=>console.log("timeout"),0)

// fs.readFile(__filename,()=>{
//     console.log("readfile");
    
// })


//3
const fs=require("fs")
fs.readFile(__filename,()=>{
    console.log("readfile");
    
})
setTimeout(()=>console.log("timeout"),0)


process.nextTick(()=>console.log("process nextTick "))

Promise.resolve().then(()=>console.log("promise resolved "))