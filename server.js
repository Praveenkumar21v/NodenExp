// import {createServer} from 'http';
// const PORT = process.env.PORT;

// const users = [
//     {id: 1, name: 'John Doe'},
//     {id: 2, name: 'Jane Doe'},
//     {id: 3, name: 'Jim Doe'},
// ];

// const server = createServer((req,res)=>{
// if(req.url === '/api/users' && req.method === 'GET'){
// res.setHeader('Content-Type', 'application/json');
// res.write(JSON.stringify(users));
// res.end();
// }
// else if(req.url.match(/\/api\/users\/([0-9]+)/)&& req.method === 'GET') {
//     const id = req.url.split('/')[3];
//     const user = users.find((user)=>user.id===parseInt(id));
//     if(user){
//         res.setHeader('Content-Type', 'application/json');
//         res.write(JSON.stringify(user));
//         res.end();
//     }else{
//         res.setHeader('Content-Type', 'application/json');
//         res.statusCode=404;
//         res.write(JSON.stringify({message: 'User not found'}));
//         res.end();
//     }

// }else{
// res.setHeader('Content-Type', 'application/json');
// res.statusCode=404;
// res.write(JSON.stringify({message: 'Route not found'}));
// res.end();
// }
      
// });
// server.listen(PORT, () => {
//     console.log(`server running on port ${PORT}`);
//   });


//using middleware

// import {createServer} from 'http';
// const PORT = process.env.PORT;

// const users = [
//     {id: 1, name: 'John Doe'},
//     {id: 2, name: 'Jane Doe'},
//     {id: 3, name: 'Jim Doe'},
// ];

// //Logger middleware

// const Logger = (req,res,next) => {
//     console.log(`${req.method} ${req.url}`);
//     next();
// }

// //Json middleware

// const jsonMiddleware = (req,res,next) => {
//     res.setHeader('Content-Type', 'application/json');
//     next();
// }

// //Route handler for GET /api/users

// const getUserHandler = (req,res) =>{
//     res.write(JSON.stringify(users));
//     res.end();
// }

// //Route handler for GET /api/users/:id
// const getUserByIdHandler = (req,res) =>{
//     const id = req.url.split('/')[3];
//     const user = users.find((user)=>user.id===parseInt(id));
//     res.setHeader('Content-Type', 'application/json');

//     if(user){
//         res.write(JSON.stringify(user));
//     }else{
//         res.statusCode=404;
//         res.write(JSON.stringify({message: 'User not found'}));
//     }
//     res.end();
// }

// //Not found handler

// const notFoundHandler = (req,res) => {
//     res.statusCode=404;
//     res.write(JSON.stringify({message: 'Route not found'}));
//     res.end();
// }

// const server = createServer((req,res)=>{
//     Logger(req, res, () => {
//         jsonMiddleware(req, res, () => {
//             if(req.url === '/api/users' && req.method === 'GET'){
//                 getUserHandler(req,res);
//             }else if(req.url.match(/\/api\/users\/([0-9]+)/)&& req.method === 'GET'){
//                getUserByIdHandler(req,res);
//             }else{
//                 notFoundHandler(req,res);
//             }
//         });
//     });  
// });
// server.listen(PORT, () => {
//     console.log(`server running on port ${PORT}`);
//   });


//get data from a body of a req

import {createServer} from 'http';
const PORT = process.env.PORT;

const users = [
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'Jane Doe'},
    {id: 3, name: 'Jim Doe'},
];

//Logger middleware

const Logger = (req,res,next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

//Json middleware

const jsonMiddleware = (req,res,next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
}

//Route handler for GET /api/users

const getUserHandler = (req,res) =>{
    res.write(JSON.stringify(users));
    res.end();
}

//Route handler for GET /api/users/:id
const getUserByIdHandler = (req,res) =>{
    const id = req.url.split('/')[3];
    const user = users.find((user)=>user.id===parseInt(id));
    res.setHeader('Content-Type', 'application/json');

    if(user){
        res.write(JSON.stringify(user));
    }else{
        res.statusCode=404;
        res.write(JSON.stringify({message: 'User not found'}));
    }
    res.end();
}

//Route handler for POST /api/users

const createUserHandler = (req,res) => {
    let body = '';

//Listen for data
req.on('data',(value) => {
    body+=value.toString();
});
req.on('end',() => {
    const newUser = JSON.parse(body);
    users.push(newUser);
    res.statusCode=201;
    res.write(JSON.stringify(newUser));
    res.end();
})
}

//Not found handler

const notFoundHandler = (req,res) => {
    res.statusCode=404;
    res.write(JSON.stringify({message: 'Route not found'}));
    res.end();
}

const server = createServer((req,res)=>{
    Logger(req, res, () => {
        jsonMiddleware(req, res, () => {
            if(req.url === '/api/users' && req.method === 'GET'){
                getUserHandler(req,res);
            }else if(req.url.match(/\/api\/users\/([0-9]+)/)&& req.method === 'GET'){
               getUserByIdHandler(req,res);
            }else if(req.url === '/api/users' && req.method === 'POST'){
               createUserHandler(req,res);
            }
            else{
                notFoundHandler(req,res);
            }
        });
    });  
});
server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });
