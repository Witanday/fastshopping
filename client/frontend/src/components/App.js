import React from 'react';
import {Router, Route} from 'react-router-dom';

import history from '../history'
import SignIn from './signIn';
import SignUp from './signUp'
import Profile from './Profile'
//import logo from './logo.svg';
import './App.css';
import Layout from './Layout';
import Header from './Header';
import AddCategory from './Addcategory';
import Product from './Products';
import ViewProduct from './ViewProduct';
import ViewProductForm from './ProductForm';
import CartMenu from './CartMenu'

function App() {
  return (
    <div className="ui container-fluid">
      <Router history ={history}>
     {/*<Route path='/' exact component ={Header } />*/} 
      <Route path='/home' exact component ={Layout } />
      <Route path='/product/:category' exact component ={Product} />
      <Route path='/signin' exact component ={SignIn} />
      <Route path='/cart' exact component ={ CartMenu} />
      <Route path='/signup' exact component ={SignUp} />
      <Route path='/Profile' exact component ={Profile} />
      <Route path='/view/:_id' exact component ={ViewProduct} />
      <Route path='/category/add' exact component ={AddCategory} />
      </Router>
      
    
    </div>
  );
}

export default App;
