import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import {fetchcategories, fetchproducts,fetchproduct} from '../actions';
import HeaderCategory from './HeaderCategory'
import ProductSubMenu from './ProductMenu';
import RenderButton from './LocalAuth';
class Products extends Component {

  renderDropdownCategory(){
    var category = 'fruit'
    if(this.props.data){
        return this.props.data.map(category=>{
            const capitalize = (s) => {
                if (typeof s !== 'string') return ''
                return s.charAt(0).toUpperCase() + s.slice(1)
              }
            return <Link    to={`${category.name}`} key={category._id} class="dropdown-item" onClick={(e)=> {e.stopPropagation();e.preventDefault();this.componentDidMount(category.name);}}>{capitalize(category.name)}</Link>
        })
      //  console.log(this.props.match.params.name)
    }
    
}
    renderCards(e){
      const products= this.props.productbycategory
        if(this.props.productbycategory){
          console.log(this.props.productbycategory.Products)
          if(this.props.productbycategory.Products.length!==0){
           return this.props.productbycategory.Products.map(product=>{
           return <Link to={`/product/view/${product._id}`} class="carddiv">
    <div class="imagediv">
      <img src={product.image} />
    </div>
    <div class="extra">
        <p class="product-name">{product.name}</p>
        
        <p class="product-price"><i class="tag icon"></i><strong> <i class="dollar sign icon"></i>{product.price}</strong></p>
    </div> </Link>
            }) }else {
                return<h1 class="card ">No Data</h1>

              

            }
        }
        
    }
    componentDidMount(category2){
        const category = this.props.match.params.category
       console.log(category)
       
        this.props.fetchproducts()
      // this.props.fetchproduct(category)
       const savedcategory = category ||category2;
       this.props.fetchcategories()
       this.props.fetchproduct(savedcategory)
       
    }
    render() {
       console.log(this.props)
      //console.log(typeof this.props.match.params.category)
        return (
            <div className="ui container-fluid ">
           <div class="ui large secondary  pointing menu">
              <Link  to='' class="toc item">
                <i class="at icon"></i>
              </Link>
              <Link  to='/home' class="active item">Home</Link>
              <Link  to='/profile' class="item">Profile</Link>
              <Link  to='/category/add' class="item">Add Category</Link>
              <li class="nav-item dropdown">
                <Link  to='/products' class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Products</Link>
                <div class="dropdown-menu" aria-labelledby="dropdown01" onClick="document.location.reload(true)">
                 {/*<Link  to='/product/all' class="dropdown-item"  >All Products</Link>*/} 
                  { this.renderDropdownCategory()}
            </div>
              </li>
              <div class="right item">
              <RenderButton />
              </div>
            </div>

            <section class="jumbotron text-center">
    <div class="container">
      <h1 class="jumbotron-heading">Find your Favourite Product</h1>
      <div class="lead text-muted">Search many of Shop Smart's products</div>
      <form class="form-inline ">
        <input class="" type="text" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </section>
               <div className="cardsproducts">
<div class="ui four cards cad">
                {this.renderCards() || <h2>Hello Moto</h2>}
            </div> </div> </div>
        )
    }
}

function mapStateToProps (state,ownProps){
    const {category}= state.fast;
    console.log(state)
    return{
        products : state.fast.Products,
        productbycategory:state.fast.productCategory,
        data:category,
     
    }
}

export default connect(mapStateToProps,{fetchcategories,fetchproducts,fetchproduct})(Products)