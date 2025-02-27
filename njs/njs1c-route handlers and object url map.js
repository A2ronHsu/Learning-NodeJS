import http from 'http';

const homeHandler = (req, res)=>{
   res.statusCode = 200;
   res.setHeader('Content-Type', 'text/plain');
   res.end('You are at the home page!\n')
}

const aboutHandler = (req, res) =>{
   res.statusCode = 200;
   res.setHeader('Content-type','text/plain');
   res.end('<html><body><h1>About Us</h1><p>This is the about page.</p></body></html>')
}

const productsHandler = (req,res)=>{
   if(req.method === 'GET'){
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      return res.end('This is the product api')
   }
   res.statusCode = 405;
   res.end('method not allowed');
}

const notFoundHandler = (req, res)=>{
   res.statusCode = 400;
   res.setHeader('Content-Type','text/plain');
   res.end('page not found')
}




const routes = {
   '/' : homeHandler,
   '/about' : aboutHandler,
   '/api/products': productsHandler
   
}


const server = http.createServer((req,res)=>{
   console.log('server running');
   const route = routes[req.url];
   console.log(route, req.url, req.method);
   if(route){
      route(req,res);
   }else{
      notFoundHandler(req,res);
   }
})

const port = 8080;

server.listen(port)