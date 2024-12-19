import http from 'http';
import fs from 'fs';
import url from 'url';

let winter;
let summer;

http.createServer((req, res)=>{
   const q = url.parse(req.url, true);
   const filename = "./"+q.pathname;
   console.log (filename);
   fs.readFile(filename, (err, data)=>{
      if (err) {
         res.writeHead(404, {'Content-Type': 'text/html'});
         return res.end("404 not found");
      }
      console.log(data);
      res.writeHead( 200, {'Content-Type':'text/html'})
      res.write(data);
      return res.end();
   });
}).listen(8080);