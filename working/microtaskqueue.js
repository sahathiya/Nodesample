
//microtask queue 
//process.nextTick
console.log("it is 1");
process.nextTick(()=>console.log("process nextTick1")
)
console.log("it is 2");

//promise
Promise.resolve().then(()=>console.log("promise resolved")
)

process.nextTick(()=>console.log("process nextTick2")
)

setTimeout(()=>{
console.log("setTime out")
})

//3
// process.nextTick(()=>console.log("process nextTick 1"))
// process.nextTick(()=>{
//     console.log("process nextTick 2")
//     process.nextTick(()=>console.log("process nextTick inner")
// )
// })
// process.nextTick(()=>console.log("process nextTick 3"))



// Promise.resolve().then(()=>console.log("promise resolved 1"))
// Promise.resolve().then(()=>{
//     console.log("promise resolved 2")
//     process.nextTick(()=>console.log(" inner process nextTick "))


// })
// Promise.resolve().then(()=>console.log("promise resolved 3"))
