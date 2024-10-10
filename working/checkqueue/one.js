// //setimmediate
// //one
// const fs=require("fs")
// fs.readFile(__filename,()=>{
//     console.log("readfile");
    
// })
// setTimeout(()=>console.log("timeout"),0)


// process.nextTick(()=>console.log("process nextTick "))

// Promise.resolve().then(()=>console.log("promise resolved "))
// setImmediate(()=>console.log("this is setimmediate"))



//two

setImmediate(()=>console.log("this is setimmediate")
)
const fs=require("fs")
fs.readFile(__filename,()=>{
    console.log("readfile");
    
})
setTimeout(()=>console.log("timeout"),0)


process.nextTick(()=>console.log("process nextTick "))

Promise.resolve().then(()=>console.log("promise resolved "))
//check queues callbacks are executed after microtask queue ,timer,i/o are executed
