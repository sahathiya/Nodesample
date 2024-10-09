const http=require("http")

http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write("<h1>good morning<h1>") //to write the response
    res.end() //to end
}).listen(3000)