var http = require("http");
http.createServer((req,res)=>{
    res.write("Hello Ajith..! Welcome to NodeJs");
    res.end();
}).listen(1437);