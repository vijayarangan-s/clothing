import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../utils/Selectors/cart.selectors'
import CheckoutItem from '../Checkout-Item/Checkout-Item'
import StripeCheckoutButton from '../Stripe-Button/Stripe-Button.component'
import './Checkout.styles.scss'


const Checkout = ({cartItems, total}) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => 
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )
            }
            <div className="total">
                <span>TOTAL : ${total}</span>
            </div>
            <StripeCheckoutButton price={total} />
        </div>
    )
}

const mapDispatchToProps = null;

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)