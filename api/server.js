const express = require('express');
const morgan = require('morgan');
const mongoose = require ('mongoose');
const server = express();

mongoose.connect('mongodb+srv://root:fast123@cluster0-qu09c.mongodb.net/test?retryWrites=true&w=majority', function(err){
    if(err){
        console.log(err)
    }else{
        console.log(" Connected to the Database")
    }
})
//Middleware

server.use(morgan('dev'));


server.get('/',(req,res)=>{
    res.json("HELLO FASTSHOPPING")
});


server.listen (3000, (err)=>{
    if(err) throw err;
    console.log( "/n Server is running /n")
})