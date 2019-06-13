import{combineReducers}from 'redux';
import{reducer as formReducer} from 'redux-form';
import fastshopping from './fastUrl';
import quantitycount from './icredecreqty';


export default combineReducers(
{
     
   fast :fastshopping,
   form : formReducer,
   qtycount:quantitycount
}
) 

  
    
