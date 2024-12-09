var http = require('http'); //here we require the http module

http.createServer(function(req,res){ // with the the http module we created a server using the .createServer method.
   res.writeHead(200,{"content-type":"text-html"}); //this give the status code responde to the (client).
   res.end('Hello Word'); // here we stop de server with the message hello world.
}).listen(8080);// here the server listen for a connection a the port 8080.
