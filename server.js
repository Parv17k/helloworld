var http=require("http");
http.createserver(function(req,res)
{
res.writeHead(200);
res.write("hello world");
res.end();
}).listen(8080);
