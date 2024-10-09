setImmediate(()=>console.log("this is setimmediate 1"))
setImmediate(()=>{
    console.log("this is setimmediate 2")
    process.nextTick(()=>console.log("process nextTick "))


    Promise.resolve().then(()=>console.log("promise resolved "))
})
setImmediate(()=>console.log("this is setimmediate 3"))