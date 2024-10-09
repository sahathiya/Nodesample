const fs=require('fs')
fs.readFile("./index.html","utf8",(err,data)=>{
    console.log(data);
    
})
fs.writeFile("./index1.html","<html><body><h2>fathima</h2></body></html>",(err)=>{
    console.log("data added to html file");
    
})

fs.appendFile("./index1.html","helloo",(err)=>{
    console.log("appended data to a file");
    
})

fs.unlink("./delete.js",function(err){
    console.log("file deleted");
    
})