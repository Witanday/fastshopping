import React, { Component } from 'react'
import {connect} from 'react-redux';
import {fetchproductId, addToCart} from '../actions'
import Header from './HeaderCategory';
import QuantityForm from './QuantityfForm'
import {Field, reduxForm} from 'redux-form';

 class QtyForm extends Component {
  
 
    renderqtyCount= (qty)=>{
        for(var i = 1; i < 11; i += 1) {
          qty.push(i)   
      }return qty
       } 
    componentDidMount(){
      
        var qty = this.renderqtyCount([])
{/*<div class="product-quantity-box left"> 

<span class="ss-icon product-minus js-change-quantity" data-func="minus">
    <span class="icon-minus"></span>
    <input type="number" min="0" size="2" class="quantity" name="updates[]" id="updates_16025772294190" value="3" data-line-id="1">
         <span class="ss-icon product-plus js-change-quantity" data-func="plus" />
        <span class="icon-plus">
        </span></div>/**/ */}
     
    }

    renderSigleProduct(de){
            return(
                <form className="ui container fluid"  onClick={this.props.handleSubmit(this.props.onSubmit)}>
              <Field name="quantity" component="select">
              {this.renderqtyCount([]).map(count=>{
                return <option value={count} defaultValue={'3'} placeholder={this.props.defaultValue}>{count}</option>
              })}
              </Field>
              <button class="ui basic button" onChange="document.location.reload(true)"> <i class="icon cart"></i> Add to Cart</button>
          </form>
            )
        }
    
    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props
        return (
           
            this.renderSigleProduct()
        )
    }
}


export default reduxForm({form :'quantity'})(QtyForm)