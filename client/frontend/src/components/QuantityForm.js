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

     
    }

    renderSigleProduct(){
            return(
                <form className="ui container fluid" onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <label>QUANTITY</label>
              <Field name="quantity" component="select">
              {this.renderqtyCount([]).map(count=>{
                return <option value={count}>{count}</option>
              })}
              </Field>
                <button class="ui basic button">
                     <i class="icon cart"></i> Add to Cart</button>
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

export default reduxForm({form :'qty'})(QtyForm)

