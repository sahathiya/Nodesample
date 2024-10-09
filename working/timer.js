// setTimeout(()=>{
//     console.log("setTimeout 1");
    
// },0)

// setTimeout(()=>{
//     console.log("setTimeout 2");
    
// },0)
// setTimeout(()=>{
//     console.log("setTimeout 3");
    
// },0)

// Promise.resolve().then(()=>console.log("promise resolved 1"))
// process.nextTick(()=>console.log("process nextTick 1"))



//5
// setTimeout(()=>{
//     console.log("setTimeout 1");
    
// },0)
// setTimeout(()=>{
//     console.log("setTimeout 2")
//     process.nextTick(()=>console.log(" inner process nextTick "))

    
// },0)
// setTimeout(()=>{
//     console.log("setTimeout 3")
// })


//6

// setTimeout(()=>{
//     console.log("setTimeout 1");
    
// },0)
// setTimeout(()=>{
//     console.log("setTimeout 2")
//     Promise.resolve().then(()=>console.log(" inner promise resolved"))

    
// },0)
// setTimeout(()=>{
//     console.log("setTimeout 3")
// })



//7

setTimeout(()=>{
    console.log("setTimeout 1");
    
},1000)
setTimeout(()=>{
    console.log("setTimeout 2");
    
},500)
setTimeout(()=>{
    console.log("setTimeout 3");
    
},0)