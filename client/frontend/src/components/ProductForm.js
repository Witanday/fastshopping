import React, { Component } from 'react'
import {connect} from 'react-redux';
import {fetchproductId, addToCart} from '../actions'
import Header from './HeaderCategory';
import QuantityForm from './QuantityForm'
import {Field, reduxForm} from 'redux-form';
import jwt_decode from 'jwt-decode';
 class ProductForm extends Component {
  
    onSubmit =(formValues,id)=>{
        this.props.addToCart(id,formValues)
    }
 
    renderqtyCount= (qty)=>{
        for(var i = 1; i < 11; i += 1) {
          qty.push(i)   
      }return qty
       } 
    componentDidMount(){
      
        var qty = this.renderqtyCount([])
            console.log(this.props)
        //this.props.fetchproduct
        this.props.fetchproductId(this.props.match.params._id);
     
    }

    renderSigleProduct(user_id,formValues ){
        if(this.props.viwprod){
            const product =this.props.viwprod
            const id =product._id.toUpperCase();
            const name =product.name.toUpperCase();
            return(
                <form className="ui container fluid">
                    <Header />
                <div className="ui container viewp">
                <Field name="image" src={product.image} value ={product.image} component="img"></Field>
                <div className="contentvp">
                <h1 class="ui header">
                <div class="sub header">
                <Field type='text' name="id"  value ={product._id} component="div">{id}</Field>
                </div>
                <Field name="name"  value ={product.name} component="div">{name}</Field>
                </h1>
                <Field class="ui Sub Header" name="name"  value ={product.price} component="h2"><i className="dollar icon"></i>{product.price}</Field>
                <div>
            <label>QUANTITY</label>
            <div>
              <Field name="quantity" component="select" onClick={(e)=>{e.preventDefault()}}>
              {this.renderqtyCount([]).map(count=>{
                return <option value={count}>{count}</option>
              })}
              </Field>
            </div>
          </div>
                <button class="ui basic button"onClick={this.props.addToCart({formValues})}> <i class="icon cart"></i> Add to Cart</button>
                <div>
                <div class="ui">
                <h4 class="ui header">Description:</h4>
                <p>{product.description}</p>
                <Field name="name"  value ={product.description} component="p">{product.description}</Field>
                </div>
                </div>
                </div>
            </div></form>
            )
        }else{
            return <div>gelle</div>
        }
    }
    render() {
        const { handleSubmit, value, formValues ,pristine, reset, submitting } = this.props
        const token= window.localStorage.getItem('access_token')
        var decoded = jwt_decode(token);
       const user_id=decoded.user_id
        console.log(formValues)
        return (
           
            this.renderSigleProduct(user_id,formValues )
        )
    }
}
const mapSateToProps = (state,ownProps)=> {
    if(state.form.quantity){
        console.log(state.form.quantity.values)
    }

    return {viwprod : state.fast.singleproduct,
            UserPros:ownProps}
}
const productForm = reduxForm({form :'quantity'})(ProductForm)


export default connect( mapSateToProps , {fetchproductId,addToCart})( productForm )