import{combineReducers}from 'redux';
import{reducer as formReducer} from 'redux-form';
import fastshopping from './fastUrl';


export default combineReducers(
{
     
   fast :fastshopping,
   form : formReducer
}
) 

  
    
