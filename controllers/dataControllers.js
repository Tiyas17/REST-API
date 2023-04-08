const express = require('express');
const asyncHandler=require("express-async-handler");
const Data=require("../models/dataModels");
const Joi = require('joi');
//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getBooks=asyncHandler(async(req,res)=>{
    const data=await Data.find();
    res.status(200).json(data);
});


//@desc Create New contact
//@route POST /api/contacts
//@access public
const createBook=asyncHandler(async(req,res)=>{
    console.log("The message is", req.body)
  // Define a schema for validating the request body
  const schema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    id: Joi.string().required(),
  });

    // Validate the request body against the schema
    const { error } = schema.validate(req.body);

    if (error) {
      res.status(400);
      throw new Error(error.details[0].message);
    }
    //The req.body property contains key-value pairs of data submitted in the request body
    const{title,author,id}=req.body;
    const data= await Data.create({
        title,
        author,
        id,
    });
    res.status(201).json(data);
});

//@desc Get contact
//@route GET /api/contacts/:id
//@access public
const getBook=asyncHandler(async(req,res)=>{
    const data=await Data.findById(req.params.id);
    if(!data)
    {
        res.status(404);
        throw new Error("Book not found");
    }
    res.status(200).json(data);
});

//@desc Update contact
//@route PUT /api/contacts
//@access public
const updateBook=asyncHandler(async(req,res)=>{
// Define a schema for validating the request body
  const schema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    id: Joi.string().required(),
  });

    // Validate the request body against the schema
    const { error } = schema.validate(req.body);

    if (error) {
      res.status(400);
      throw new Error(error.details[0].message);
    }
    const data=await Data.findById(req.params.id);
    if(!data)
    {
        res.status(404);
        throw new Error("Book not found");
    }
    const updatedData= await Data.findByIdAndUpdate(req.params.id,req.body,{
        new:true
    });
    res.status(200).json(updatedData);
});

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access public
const deleteBook=asyncHandler(async(req,res)=>{
    try {
        const data=await Data.findById(req.params.id);
    if(!data)
    {
        res.status(404);
        throw new Error("Book not found");
    }
    // await contact.remove();
    await Data.deleteOne(data)
    res.status(200).json(data);
    } catch (error) {
        console.log(error.message)
    }
});

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

module.exports={getBooks,createBook,getBook,updateBook,deleteBook};