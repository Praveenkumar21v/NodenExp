// console.log("This is testing node.js")

//Common - JS

//HTTP module (using res):

// var http = require('http');

// http.createServer((req,res)=>{
// res.write('Hello World!!');
// res.end();
// console.log('Server running...')
// }).listen(8080);

//HTTP module (using req):

// var http = require('http');

// http.createServer((req,res)=>{
// res.write(req.url);
// res.end();
// console.log('Server running...')
// }).listen(8080);


//File system modules
//1.To read a file

// var http = require('http');
// var fs = require('fs');

// http.createServer((req,res)=>{
//     fs.readFile('test.txt' , (err,data)=>{
//         res.write(data);
//         res.end();
//         console.log('server running...')
//     })
// }).listen(8080);

//2. To append content

// var http = require('http');
// var fs = require('fs');

// http.createServer((req,res)=>{
//     fs.appendFile('test.txt' , 'Thank You', (err,data)=>{
//         res.write(data);
//         res.end();
//         console.log('server running...')
//     })
// }).listen(8080);

//3.To over-ride

// var http = require('http');
// var fs = require('fs');

// http.createServer((req,res)=>{
//     fs.writeFile('test.txt' , 'Hii guys..', (err,data)=>{
//         res.write(data);
//         res.end();
//         console.log('server running...')
//     })
// }).listen(8080);

//4.To delete 

// var http = require('http');
// var fs = require('fs');

// http.createServer((req,res)=>{
//     fs.unlink('test.txt', (err)=>{
//        if(err) throw err;
//         console.log('file deleted')
//     })
// }).listen(8080);

//URL module

// var url = require('url');
// var adr = 'https://geeksforgeeks.org/projects?sort=newest&lang=nodejs';

// var q=url.parse(adr,true);
// console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);
// var qdata = q.query; 
// console.log(qdata.lang);

//Node.js NPM

// const http = require('http');

// http.createServer(async (req, res) => {
//     try {
//         // Using dynamic import()
//         const uc = await import('upper-case');
//         res.write(uc.upperCase('hello World!!'));
//         res.end();
//         console.log('Server running...');
//     } catch (err) {
//         console.error('Error during dynamic import:', err);
//     }
// }).listen(8080);

// console.log('Server listening on port 8080');


// var nodemailer = require('nodemailer');
// var transporter = nodemailer.createTransport({
//     service:'gmail',
//     auth:{
//         user:'node22express@gmail.com',
//         pass:'Node@express22',
//     }
// })

// var options = {
//     from : 'node22express@gmail.com',
//     to : 'frontendtechnologiesclasses@gmail.com',
//     subject : 'Testing node js mailer',
//     text : 'That is easy to use'
// }

// transporter.sendMail(options,(err,info) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log('Email is sent'+info.response);
//     }
// })

//To integrate api

// var http = require('http');
// var fs = require('fs');

// http.createServer((req,res)=>{
//     fs.readFile('data.json',(err,data)=>{
//         res.write(data);
//         res.end();
//         console.log('API is running...')
//     })
// }).listen(8080);

// const {generateRandomNumber,celsiusToFahrenheit} = require('./utils');
// console.log(`Random Number : ${generateRandomNumber()}`);
// console.log(`Celsius to Fahrenheit : ${celsiusToFahrenheit(60)}F`);


// ES-module (for this include type:module in package.json) 
//(include.js from module folder)

// import { getPosts,getPostsLength } from "./postController.js";

// console.log(getPosts());
// console.log(`posts length : ${getPostsLength()}`);

// import http from 'http';
// const PORT = 8080;

// const server = http.createServer((req,res)=>{
//     res.write('Hello world !!!');
//     res.end();
// })
// server.listen(PORT,()=>{
//     console.log(`server running on port ${PORT}`);
// });

// import http from 'http';
// const PORT = 8080;

// const server = http.createServer((req,res)=>{
//     res.end('Hello world !!!');
// });

// server.listen(PORT,()=>{
//     console.log(`server running on port ${PORT}`);
// });

//setHeader

// import http from 'http';
// const PORT = 8080;

// const server = http.createServer((req,res) => {
//     // res.setHeader('content-Type','text/html');
//     res.setHeader('content-Type','text/plain');
//     res.statusCode = 404;
//     res.end('<h1> Hello World </h1>');
// })

// server.listen(PORT,() => {
//     console.log(`server running on port ${PORT}`)
// })

//writeHead

// import http from 'http';
// const PORT = 8080;

// const server = http.createServer((req,res) => {
//  res.writeHead(500,'OK', {'content-type' : 'application/json'})
//     res.end(JSON.stringify({message: 'server error'}));
// })

// server.listen(PORT,() => {
//     console.log(`server running on port ${PORT}`)
// })

//using nodemon

// import http from 'http';
// const PORT = process.env.PORT;

// const server = http.createServer((req,res) => {
//  res.writeHead(200, {'content-type' : 'text/html'})
//     res.end('<h1>Hello World</h1>');
// })

// server.listen(PORT,() => {
//     console.log(`server running on port ${PORT}`)
// })

// import http from 'http';
// const PORT = process.env.PORT;

// const server = http.createServer((req,res) => {
// console.log(req.url);
// console.log(req.method);

// })

// server.listen(PORT,() => {
//     console.log(`server running on port ${PORT}`)
// })


// import http from 'http';
// const PORT = process.env.PORT;

// const server = http.createServer((req,res) => {
//     res.writeHead(200, {'content-type' : 'text/html'})
//    res.end('<h1>Hello World</h1>');
//     })


// server.listen(PORT,() => {
//     console.log(`server running on port ${PORT}`)
// })


// import http from 'http';
// const PORT = process.env.PORT;

// const server = http.createServer((req,res) => {
//     try{
//         //check if GET req
//         if(req.method==='GET'){
//             if(req.url === '/'){
//                 res.writeHead(200, {'content-type' : 'text/html'})
//                 res.end('<h1>Home Page</h1>');
//             }
//             else if(req.url === '/about'){
//                 res.writeHead(200, {'content-type' : 'text/html'})
//                 res.end('<h1>About Page</h1>');
//             }
//             else{
//                 res.writeHead(404, {'content-type' : 'text/html'})
//                 res.end('<h1>Not Found</h1>');
//             }
//         }else{
//             throw new Error('Method not allowed')
//         }
//     }catch(error){
//         res.writeHead(500, {'content-type' : 'text/plain'})
//         res.end('<h1>Server Error</h1>');  
//     }
//     })

// server.listen(PORT,() => {
//     console.log(`server running on port ${PORT}`)
// })

import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";

const PORT = process.env.PORT;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename, __dirname);

const server = http.createServer(async (req, res) => {
  try {
    if (req.method === "GET") {
      let filePath;
      if (req.url === "/") {
        filePath = path.join(__dirname, "public", "index.html");
      } else if (req.url === "/about") {
        filePath = path.join(__dirname, "public", "about.html");
      } else {
        throw new Error("Not Found");
      }
      const data = await fs.readFile(filePath);
      res.setHeader("content-Type", "text/html");
      res.write(data);
      res.end();
    } else {
      throw new Error("Method not allowed");
    }
  } catch (error) {
    res.writeHead(500, { "content-type": "text/plain" });
    res.end("<h1>Server Error</h1>");
  }
});

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

