const express = require('express');
const morgan = require('morgan');
const mongoose = require ('mongoose');
const server = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport')

const User = require('./models/user');
const secret = require('./config/secret')



mongoose.set('useCreateIndex', true);
mongoose.set({ 'useNewUrlParser': true } )
mongoose.connect(secret.database, function(err){
    if(err){
        console.log(err)
    }else{
        console.log(" Connected to the Database")
    }
})

//Middleware
//Middleware



server.use(morgan('dev'));
server.use(morgan('dev'));
server.use(bodyParser.urlencoded({ extended: true}))
server.use(cookieParser());
server.use(session({
    resave :true,
    saveUnitialized:true,
    secret : secret.secretKey,
    store : new MongoStore({
        url :secret.database,
        autoReconnect:true
    })
}));




server.post('/signup',(req,res)=>{
   const user = new User()
    console.log(req.body)
    user.profile.name = req.body.name;
    user.password = req.body.password;
    user.email = req.body.email;
    console.log(user)
    user.save(function(){
        res.json('Successfully created a new user')
       
    });
    
})

server.post('/login', (req,res) => {
if(req.user) return res.redirect('/')
})
 
server.post('/login', )

   


server.listen(secret.port, function(err){
    if(err) throw err;

console.log( `/n Server is running ${secret.port}/n `)})