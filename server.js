var http=require("http");
http.createserver(function(req,res)
{
res.writeHead(200);

res.end("hello world");
}).listen(process.env.PORT || 5000);
