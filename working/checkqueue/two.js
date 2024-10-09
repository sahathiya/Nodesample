

const fs=require("fs")
fs.readFile(__filename,()=>{
    console.log("readfile");
    setImmediate(()=>console.log("this is setimmediate"))
    process.nextTick(()=>console.log(" inner process nextTick "))

Promise.resolve().then(()=>console.log("inner promise resolved "))
})


process.nextTick(()=>console.log("process nextTick "))

Promise.resolve().then(()=>console.log("promise resolved "))

setTimeout(()=>console.log("timeout"),0)
