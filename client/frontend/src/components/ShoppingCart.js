import React, { Component } from 'react'

export default class ShoppingCart extends Component {
    render() {
        return (
            <div>
                <div>SHOPPING CART</div>
                <div>
                <div>IMAGE</div>
                <div>
                <div>TITLE</div>
                <div>PRICE</div>
                <div>QUANTITY</div>
                </div>
                <div>
                <div>
                <div>Subtotal</div>
                <div>$29.99</div>
                </div>
                <div>
                    <i className='lock icon'></i>
                    <div>CHECKOUT</div>
                </div>
                <div>STRIPE PAY</div>
                <div>CONTINUE SHOOPING</div>
                </div>
                </div>
                
            </div>
        )
    }
}
