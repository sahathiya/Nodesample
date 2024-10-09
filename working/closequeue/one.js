const fs=require("fs")

const readableStream=fs.createReadStream(__filename);
readableStream.close();
readableStream.on("close",()=>{
    console.log("this is from readablestream close event callback");
    
})

setImmediate(()=>console.log("setimmediate"))
setTimeout(()=>console.log("timeout"))

Promise.resolve().then(()=>console.log("promise resolved "))
process.nextTick(()=>console.log("process nextTick "))

//close queue callbacks are executed after all other queue