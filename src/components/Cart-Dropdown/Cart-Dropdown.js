import React from 'react'
import { CartItem } from '../Cart-Item/Cart-Item';
import {connect} from 'react-redux'
import CustomButton from '../Custom-Button/Custom-Button.component';
import './Cart-Dropdown.styles.scss'
import { selectCartItems } from '../../utils/Selectors/cart.selectors';
import { createStructuredSelector } from 'reselect';


const CartDropDown = ({cartItems}) => {
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {   cartItems.length ?
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    )) :(
                        <span className="empty-message">Your cart is empty</span>
                    )
                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})


export default connect(mapStateToProps, null)(CartDropDown);