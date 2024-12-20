import http from 'http';
import uc from 'upper-case';

http.createServer((req, res)=>{
   res.writeHead(200, {'content-type':'text/html'});
   res.write(uc.upperCase('Hello World'));
   res.end();
}).listen(8080);
