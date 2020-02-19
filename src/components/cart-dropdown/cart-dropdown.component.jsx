import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux';
import './cart-dropdown.styles.scss';
const CartDropDown=({cartItems})=>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            { cartItems.map(item=>(
                    <CartItem key={item.id} item={item}/>
                ))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)
const mapToStateToProps=({cart:{cartItems}})=>({
    cartItems
});
export default connect(mapToStateToProps)(CartDropDown);