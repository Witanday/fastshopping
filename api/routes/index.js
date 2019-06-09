const express = require('express');
const RouteFastShooping = express.Router();
const TaskManager = require('../TaskManager');


// ** ROUTERS FOR OUR LAMBDA NOTES APP ** //
RouteFastShooping.get('/hello',TaskManager.Hello);
// ## SIGN UP
RouteFastShooping.post('/signup',TaskManager.SignUp);

// ## SIGN UP
RouteFastShooping.post('/signin',TaskManager.SignIn);
// ## SIGN UP
RouteFastShooping.post('/register',TaskManager.register);

RouteFastShooping.post('/category',TaskManager.AddCategory);

RouteFastShooping.get('/categories',TaskManager.GetCategory);
RouteFastShooping.post('/product/',TaskManager.CreateProductbyCategoryName);
RouteFastShooping.get('/product/view/:_id',TaskManager.GetProduct);
RouteFastShooping.get('/products',TaskManager.GetAllProducts);
RouteFastShooping.get('/product/:category',TaskManager.GetAllProductsbyCategory);
/*
// ## SIGN UP
RouteFastShooping.post('/signin',TaskManager.SignIn);
// ## GET A NOTE
RouterNote.get('/get/:_id',TaskManager.getNotebyId);

// ## CREATE A NOTE/create
RouterNote.post('/create',TaskManager.CreateNewNote);

// ## EDIT A NOTE
RouterNote.put('/edit/:_id',TaskManager.UpdateNote);

// ## DELETE A NOTE
RouterNote.delete('/delete/:_id',TaskManager.DestroyNote);
*/
module.exports = RouteFastShooping;