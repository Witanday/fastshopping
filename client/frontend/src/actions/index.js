import {
    SIGN_IN ,
    SIGN_UP,
    WELCOME,
    FETCH_CATEGORIES
} from './types';

import history from '../history';
import URL from '../baseUrl';

export const signIn = (formValues,user_id) => async (dispatch, getState) =>{
const response = await URL.post('/signin',  {...formValues.formValues});
 window.localStorage.setItem('access_token', response.data.token)
dispatch({
    type:SIGN_IN,
    payload: response.data,user_id
})
}

export const signOut = () => {
  return ({
        type:'SIGNOUT'
    })
   
   
}

export const welcome = ()=> async dispatch =>{
    const response = await URL.get('hello')
    dispatch({
        type:WELCOME,
        payload: response.data
    })
    
}

export const register = formValues => async (dispatch, getState) =>{
   const response =  await URL.post ('/register',  {...formValues.formValues});
   //console.log(response.data.token )
  dispatch({ type :'REGISTER', payload : response.data})
  //Do some programmatic navigation to
  // get the user back to the root route
 
  history.push('/signin');
  
 }

 export const addcategory = (formValues,name) => async (dispatch, getState) =>{
    const response =  await URL.post (`/category/${name}`,  {...formValues.formValues});
   // console.log(response.data.token )
   dispatch({ type :'ADD_CATEGORY', payload : response.data})
   //Do some programmatic navigation to
   // get the user back to the root route
  
   //history.push('/signin');
   
  }

  export const fetchcategories = () => async (dispatch) =>{
    const response =  await URL.get('/categories');

   dispatch({ type : FETCH_CATEGORIES, payload : response.data})
   //Do some programmatic navigation to
   // get the user back to the root route
  
  // history.push('/signin');
   
  }

  export const createproducts = (formValues,category) => async (dispatch, getState) =>{
    const response =  await URL.post (`/product/${category}`,  {...formValues.formValues});
    //console.log(response.data.token )
   dispatch({ type :'PRODUCT_CATEGORY', payload : response.data})
   // Do some programmatic navigation to
   // get the user back to the root route
  
   //history.push(`/product/${category}`);
   
  }

  export const fetchproducts = ()=> async (dispatch, getState) =>{
    const response =  await URL.get('/products');
   // console.log(response.data)
   dispatch({ type :'FETCH_PRODUCTS', payload : response.data})
   //Do some programmatic navigation to
   // get the user back to the root route
  
   //history.push('/product/all');
   
  }

  export const fetchproduct = (category) => async (dispatch, getState) =>{
   // console.log(typeof category)
   // console.log(getState())
    const response =  await URL.get(`/product/${category}`);
   //console.log(response )
   dispatch({ type :'FETCH_PRODUCT', payload : response.data})
   //Do some programmatic navigation to
   // get the user back to the root route
   /*if(category===undefined || category){
    history.push(`/product/${category}`);
   }*/
   
  }

  export const fetchproductId = (_id) => async (dispatch, getState) =>{
    // console.log(typeof category)
    // console.log(getState())
     const response =  await URL.get(`/product/view/${_id}`);
    //console.log(response )
    dispatch({ type :'FETCH_PRODUCT_ID', payload : response.data})
    //Do some programmatic navigation to
    // get the user back to the root route
    /*if(category===undefined || category){
     history.push(`/product/${category}`);
    }*/
    
   }

   export const addtoCart = () =>{
      return{
        type:'INCREMENT'
      }
   }

   export const addToCart = (user_id,data) => async (dispatch, getState) =>{
    // console.log(typeof category)
     const response =  await URL.post(`/cart/${user_id}`, data);
    dispatch({ type :'ADD_TO_CART', payload : response.data})
    //Do some programmatic navigation to
    // get the user back to the root route
    /*if(category===undefined || category){
     history.push(`/product/${category}`);
    }*/
    
   }
   export const getCart = () => async (dispatch, getState) =>{
    // console.log(typeof category)
   
     const response =  await URL.get(`/cart`);
    console.log(response )
    dispatch({ type :'GET_CART', payload : response.data})
    //Do some programmatic navigation to
    // get the user back to the root route
    /*if(category===undefined || category){
     history.push(`/product/${category}`);
    }*/
    
   }
 