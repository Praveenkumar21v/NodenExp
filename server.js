 const express = require('express');
 const path = require('path');
 const posts = require('./routes/posts');
 const port = process.env.PORT || 8000;
 
 const app = express();

//  app.get('/',(req,res) => {
//     res.send('Hello World');
//  });

// app.get('/',(req,res) => {
//     res.send('<h1>Hello World</h1>');
//  });

// app.get('/',(req,res) => {
//     res.send({message:'Hello World'});
//  });

// app.get('/',(req,res) => {
//     res.send('<h1>Hello World</h1>');
//  });

//  app.get('/about',(req,res) => {
//     res.send('about');
//  });

// app.get('/',(req,res) => {
//     res.sendFile(path.join(__dirname,'public','index.html'));
//  });

//  app.get('/about',(req,res) => {
//     res.sendFile(path.join(__dirname,'public','about.html'));
//  });

//setup static folder

// app.use(express.static(path.join(__dirname, 'public')));

// let posts = [
//     {id:1, title:'Post One'},
//     {id:2, title:'Post Two'},
//     {id:3, title:'Post Three'},

// ]

// //Get all posts

// app.get('/api/posts',(req,res) => {
// const limit = parseInt(req.query.limit);

// if(!isNaN(limit) && limit > 0){
// return res.status(200).json(posts.slice(0, limit));
// }
// res.status(200).json(posts); 

// })


// //Get single posts
// app.get('/api/posts/:id',(req,res) => {
//     const id = parseInt(req.params.id);
//     const post = posts.find((post) => post.id === id)

//     if(!post){
//        return res.status(404).json({msg:`A post with the id ${id} was not found`})
//     }
//         res.status(200).json(post);
//     })

    
//Routes

app.use('/api/posts', posts);

app.listen(port,() => console.log(`Server is running on port ${port}`));