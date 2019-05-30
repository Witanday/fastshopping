const express = require('express');
const morgan = require('morgan');
const server = express();


//Middleware

server.use(morgan('dev'));


server.get('/',(req,res)=>{
    res.json("HELLO FASTSHOPPING")
});


server.listen (3000, (err)=>{
    if(err) throw err;
    console.log( "/n Server is running /n")
})