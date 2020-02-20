import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {withRouter} from 'react-router-dom';
import {toggleHidden} from '../../redux/cart/cart.actions';
import './cart-dropdown.styles.scss';
const CartDropDown=({cartItems,history,dispatch})=>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {   cartItems.length?
                cartItems.map(item=>(
                    <CartItem key={item.id} item={item}/>
                ))
                :<span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={()=>{
            history.push('/checkout');
            dispatch(toggleHidden())
        }}>GO TO CHECKOUT</CustomButton>
    </div>
)
const mapToStateToProps=(state)=>({
    cartItems:selectCartItems(state)
});
export default withRouter(connect(mapToStateToProps)(CartDropDown));