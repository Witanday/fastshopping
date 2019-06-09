import React, { Component } from 'react'
import RenderButton from './LocalAuth';
import {Link} from 'react-router-dom';
import ProductSubMenu from './ProductMenu'
 class Header extends Component {

 

    render() {
     console.log()
        return (
            <div class="ui container">
            <div class="ui large secondary  pointing menu">
              <Link  to='' class="toc item">
                <i class="at icon"></i>
              </Link>
              <Link  to='/home' class="active item">Home</Link>
              <Link  to='/profile' class="item">Profile</Link>
              <Link  to='/category/add' class="item">Add Category</Link>
              <li class="nav-item dropdown">
                <Link  to='/products' class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Products</Link>
                <ProductSubMenu />
              </li>
              <div class="right item">
              <RenderButton />
              </div>
            </div>
          </div>
        )
    }
}


export default Header