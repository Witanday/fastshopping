import React, { Component } from 'react'
import {connect} from 'react-redux';
import {  getCart } from '../actions';
import {Link} from 'react-router-dom';
import Header from './Header';
//import { timingSafeEqual } from 'crypto';


 class CartMenu extends Component {
   
    renderDropdownCart=()=>{ 
        if(this.props.datacart){
        return this.props.datacart.map(cartinfo=>{
        return <Link    to='' key='' class="" >
                <div className="ui container fluid">
                  
                <div className="ui container viewp">
                <img class="img" src='' />
                <div className="contentvp">
                <h1 class="ui header">{cartinfo.product_name}</h1>
                <h2 class="ui Sub Header"><i className="dollar icon"></i>{cartinfo.product_price}</h2>
                <div>
                </div>
                <div>
                </div>
                </div>
            </div></div>
           
        </Link>
            })} }
        
      
    componentDidMount(){
        
        this.props.getCart()
      
       
    }
    render() {
      
   console.log(this.props)
        return (
            <div class="" aria-labelledby="">
                  <Header />
                 {/*<Link  to='/product/all' class="dropdown-item"  >All Products</Link>*/} 
                  { this.renderDropdownCart()}
            </div>
        )
    }


}

function mapStateToProps (state){
 
    console.log(state.fast.CARTLIST)
    return{
        datacart:state.fast.CARTLIST
    }
}
export default connect(mapStateToProps,{  getCart})(CartMenu) 