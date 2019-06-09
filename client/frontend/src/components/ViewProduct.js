import React, { Component } from 'react'
import {connect} from 'react-redux';
import {fetchproductId} from '../actions'
import Header from './HeaderCategory'

 class ViewProduct extends Component {

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
                <button class="ui icon button"><i class="plus icon"></i></button>
                    <input type="number"/>
                <button class="ui icon button"><i class="minus icon"></i></button>
                </div>
                <button class="ui basic button"> <i class="icon cart"></i> Add to Cart</button>
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
        
        return (
           
            this.renderSigleProduct()
        )
    }
}
const mapSateToProps = state=> {
    console.log(state.fast.singleproduct)
    return {viwprod : state.fast.singleproduct}
}

export default connect( mapSateToProps , {fetchproductId})(ViewProduct)