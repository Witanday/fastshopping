const express = require('express');
const morgan = require('morgan');
const mongoose = require ('mongoose');
const server = express();
const bodyParser = require('body-parser');
const cors = require('cors')

//require('./config/passport')
const User = require('./models/user');
require('dotenv').config();
const RouteFastShooping = require('./routes')


    mongoose.set({ 'NewUrlParser': true } )
mongoose.connect(process.env.DB_URL_HOST, function(err){
    if(err){
        console.log(err)
    }else{
        console.log(" Connected to the Database")
    }
})

server.use(express.json());
server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
server.use(cors());
server.use(morgan('dev'))
server.use(require("body-parser").text());
server.use(bodyParser.urlencoded({extended: true}));


server.use('/', RouteFastShooping)

server.listen(process.env.PORT, function(err){
    if(err) throw err;

console.log( `/n Server is running ${process.env.PORT}/n `)})