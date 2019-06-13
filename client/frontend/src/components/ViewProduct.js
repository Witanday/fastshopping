import React, { Component } from 'react'
import {connect} from 'react-redux';
import Header from './HeaderCategory';
import QuantityForm from './qtyForm'
import {fetchproductId, addToCart} from '../actions'
import jwt_decode from 'jwt-decode';

 class ViewProduct extends Component {

    onSubmit =(formValues)=>{
        const value= {formValues}
        const product_id =this.props.match.params._id
        const Formvalue= value.formValues
        const token= window.localStorage.getItem('access_token')
        var decoded = jwt_decode(token);
       const user_id=decoded.user_id;
       const data= {};
        data.product_id=product_id;
        if(this.props.viwprod){
            data.product_name =this.props.viwprod.name;
            data.product_price =this.props.viwprod.price;
            data.quantity=Formvalue.quantity;
            console.log(data, user_id)
            this.props.addToCart(user_id,data)
        }


    }
  
    componentDidMount(){
            console.log(this.props)
        //this.props.fetchproduct
        this.props.fetchproductId(this.props.match.params._id)
    }

    renderSigleProduct(){
        if(this.props.viwprod){
            const product =this.props.viwprod
            const id =product._id.toUpperCase();
            const name =product.name.toUpperCase();
            return(
                <div className="ui container fluid">
                    <Header />
                <div className="ui container viewp">
                   
                <img class="img" src={product.image} />

                
                <div className="contentvp">
                <h1 class="ui header">
                <div class="sub header">{id}</div>{name}</h1>
                <h2 class="ui Sub Header"><i className="dollar icon"></i>{product.price}</h2>

                <div>
               <QuantityForm onSubmit={this.onSubmit}/>
                </div>
              
                <div>
                <div class="ui">
<h4 class="ui header">Description:</h4>
<p>{product.description}</p>
<p>{product.description}</p>
<p>{product.description}</p>


</div>
                </div>
                </div>
            </div></div>
            )
        }else{
            return <div>gelle</div>
        }
    }
    render() {
        console.log(this.props)
        return (
           
            this.renderSigleProduct()
        )
    }
}
const mapSateToProps = state=> {
    console.log(state.fast)
    return {viwprod : state.fast.singleproduct}
}

export default connect( mapSateToProps , {addToCart,fetchproductId})(ViewProduct)