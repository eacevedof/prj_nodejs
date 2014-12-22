var http = require("http");

var server = http.createServer
(
    function(req,resp)
    {
        resp.writeHead(200,{"Content-Type":"text/plain"});
        resp.end("Hello world");
    }
);
    
server.listen(8000);
console.log("server running at 127..:8000");