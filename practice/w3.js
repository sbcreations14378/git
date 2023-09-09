var http = require('http');
var dt =require('./mypack');
var url = require('url')
var fs=require('fs')
http.createServer((req,res)=>{
    res.writeHead(200,{
        'content-type':'text/html'
    });
    res.write("From W3Schools"+dt.time());
    res.write("From W3Schools"+dt.name(1,6));
    res.write("\n "+dt.login("admin","admin"));
    var q=url.parse(req.url,true).query;
    res.write(q.usr+""+q.pwd+""+q.role);
    fs.readFile('package.json',(err,data)=>
    {
        res.write(data);
        res.end("");
    })
}).listen(1437);


http.createServer((req,res)=>{
    fs.readFile('show.html',(err,data)=>
    {
        res.write(data);
        res.end("");
    })
}).listen(8080);