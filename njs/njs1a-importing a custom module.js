var http = require('http');
var dt = require('./njs1-myfirstModule');

http.createServer((req,res)=>{
   res.writeHead(200,{'content-type': 'text/html'});
   res.write("The date and time are currently"+ dt.myDateTime());
   res.end("Hello world");
}).listen(8080);