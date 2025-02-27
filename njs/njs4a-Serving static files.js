import fs from 'fs';
import http, { ClientRequest, IncomingMessage, ServerResponse } from 'http';
import path from 'path';


const homeHandler = async (req = IncomingMessage, res = ServerResponse )=>{
   fs.readFile('./Static Files/index.html',(err,data)=>{
      if(err){
         res.writeHead(400,{'content-type':'text/plain'});
         return res.end('incorrect patch')
      }
      res.writeHead(200,{'content-type':'text/html'});
      return res.end(data);

   });

};

const homeHandlerCss = async (req = ClientRequest, res = ServerResponse)=>{
   fs.readFile('./Static Files/styles.css',(err,data)=>{
      if(err){
         res.writeHead(400,{'content-type':'text/plain'});
         return res.end('incorrect patch')
      }
      res.writeHead(200,{'content-type':'text/css'});
      return res.end(data);

   });
}

const notFoundHandler = (req, res)=>{
   res.statusCode = 400;
   res.end('page not found')
}

const routes = {
   '/':homeHandler,
   '/css': homeHandlerCss
}


const server = http.createServer((req,res)=>{
   const route = routes[req.url];
   if(route){
      route(req,res);
   }else{
      notFoundHandler(req,res);
   }
}).listen(8080);