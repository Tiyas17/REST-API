// import express, { json } from 'express';
// import joi from 'joi';//used for validation
// const app=express();
// app.use(json());

const express = require('express');
const connectDB=require("./config/dbConnection");

const Joi = require('joi'); //used for validation
const errorHandler = require('./middleware/errorHandler');

connectDB();

const app = express();

app.use(express.json());
//{
// const books=[
// {title: 'Harry Potter', id: 1},
// {title: 'Twilight', id: 2},
// {title: 'Lorien Legacies', id: 3}
// ]

// //READ Request Handlers
// app.get('/',(req,res)=>{
//     res.send('Welcome to the Shield REST API with Node.js Tutorial!!');
// });

// app.get('/api/books',(req,res)=>{
//     res.send(books);
// });

// app.get('/api/books/:id',(req,res)=>{
//     const book=books.find(c=>c.id===parseInt(req.params.id));
//     if(!book) res.status(404).send('<h2 style="font-family:Malgun Gothic; color: darkred;">Ooops... cant find what you are lookin for!</h2>');
//     res.send(book);
// })

// //CREATE Request Handler
// app.post('/api/books',(req,res)=> {
//     const { error } = validateBook(req.body);
//     if(error){
//         res.status(400).send(error.details[0].message)
//         return;
//     }
//     const book={
//         id: books.length + 1,
//         title: req.body.title
//     };
//     books.push(book);
//     res.send(book);
// });

// //UPDATE Request Handler
// app.put('/api/books/:id', (req,res)=>{
//     const book=books.find(c=>c.id===parseInt(req.params.id));
//     if(!book) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Not Found!! </h2>');

//     const { error }=validateBook(req.body);
//     if(error){
//     res.status(400).send(error.datails[0].message);
//     return;
//     }
//     book.title=req.body.title;
//     res.send(book);
// });

// //DELETE Request Handler
// app.delete('/api/books/:id',(req,res)=>{
// const book=books.find(c=>c.id===parseInt(req.params.id));
// if(!book)
// {
//     res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;"> Not Found!! </h2>');
// }

// const index=books.indexOf(book);
// books.splice(index,1);

// res.send(book);
// });

// function validateBook(book){
//     const schema=Joi.object({
//         title: Joi.string().min(3).required()
//     });
//     return schema.validate(book);
// //     router.post('/register', async (req,res) => {

// //         const { error } = schema.validate(req.body);
// //         res.send(error.details[0].message);
    
// // })
// }
//------------------------------------------
//}
//PORT ENVIRONMENT VARIABLE
const port=process.env.PORT || 8080;

app.use(express.json());//acts as middleware
console.log("Sahi hai");
app.use("/api/books", require("./routes/dataRoutes"));
app.use(errorHandler);
//this app.use is basically used when we need to use a middleware


app.listen(port,()=>console.log(`Listening on port ${port}..`));

//http://localhost:8080/api/books/