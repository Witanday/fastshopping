import {
    SIGN_IN ,
    SIGN_UP,
    WELCOME,
    FETCH_CATEGORIES
} from '../actions/types';
import _ from 'lodash'
const INITIAL_STATE = {
    isSignedIn: null,
   user_id:null,
   category :null

}

export default ( state= INITIAL_STATE, action) =>{
 
    switch(action.type){
        case WELCOME :
                return {...state, ...action.payload }
        case 'SIGNIN' :
            return {...state, ...action.payload, }
        case 'SIGNOUT' :
           
            return {...state, isSignedIn:false, user_id:null}

            case 'REGISTER' :
           
            return {...state, ...action.payload}

            case 'ADD_CATEGORY' :
            return {...state, ...action.payload}

            case FETCH_CATEGORIES :
                   // return {...state, ..._.mapKeys(action.payload, 'id')};
                   //return {...state, category:action.payload}
                   return {...state,  ...{category :action.payload}}
            case 'PRODUCT_CATEGORY' :
            return {...state, ...action.payload}

            case 'FETCH_PRODUCT' :
            return {...state, ...{productCategory: action.payload}}

            case 'FETCH_PRODUCT_ID' :
                return {...state, ...{singleproduct: action.payload}}

            case 'FETCH_PRODUCTS' :
            return {...state, ...{AllProducts :action.payload}}
    default : 
    return state
}
}