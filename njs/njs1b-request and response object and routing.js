import http from 'http';
const server = http.createServer((req,res)=>{
   console.log(`Request received from URL: ${req.url}, Method: ${req.method}`);
      if (req.url === '/'){
         res.statusCode = 200;
         res.setHeader('Content-Type', 'text/plain');
         res.end('You are at the home page!\n');
      }else if( req.url === '/about'){
         res.statusCode = 200;
         res.setHeader('Content-Type', 'text/plain');
         res.end('<html><body><h1>About Us</h1><p>This is the about page.</p></body></html>');
      }else if(req.url === '/api/products'){
         if(req.method === 'GET'){
            const products = [{ id: 1, name: 'Product A' }, { id: 2, name: 'Product B' }];
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end(JSON.stringify(products));
         }else{
            res.statusCode = 405;
            res.setHeader('content-type', 'text/plain');
            res.end('Method not allowrd for this endpoint.\n')
         }
      
      }else{
         res.statusCode = 405;
         res.setHeader('Content-Type', 'text/plain');
         res.end('not found\n');

      }

})


server.listen(8080,()=>{
   console.log(`server running at port 8080`);
})
