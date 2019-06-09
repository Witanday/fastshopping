import React, { Component } from 'react'
import {connect} from 'react-redux';
import {  fetchcategories, fetchproduct } from '../actions';
import {Link} from 'react-router-dom';
//import { timingSafeEqual } from 'crypto';


 class ProductMenu extends Component {
   
    renderDropdownCategory(){
        var category = 'fruit'
        if(this.props.data){
            return this.props.data.map(category=>{
                const capitalize = (s) => {
                    if (typeof s !== 'string') return ''
                    return s.charAt(0).toUpperCase() + s.slice(1)
                  }
                return <Link    to={`${category.name}`} key={category._id} class="dropdown-item" onClick={(e)=> {e.stopPropagation();this.componentDidMount(category.name)}}>{capitalize(category.name)}</Link>
            })
          //  console.log(this.props.match.params.name)
        }
        
    }

    rerender=(path)=>{
        return path
    }
    fetchproductHandler(path){
            if(path){
                return this.props.fetchproduct(path)
              
             }
           
        }
       
    
    componentDidMount(category){
        //console.log(category)
        const savedcategory = category;
        this.props.fetchcategories()
        this.props.fetchproduct(savedcategory)
       
    }
    render() {
      
   // console.log(this.props)
        return (
            <div class="dropdown-menu" aria-labelledby="dropdown01">
                 {/*<Link  to='/product/all' class="dropdown-item"  >All Products</Link>*/} 
                  { this.renderDropdownCategory()}
            </div>
        )
    }


}

function mapStateToProps (state){
 
    const {category}= state.fast;
    return{
        data:category
    }
}
export default connect(mapStateToProps,{fetchcategories, fetchproduct})(ProductMenu) 