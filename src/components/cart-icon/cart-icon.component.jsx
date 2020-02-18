import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';
import {toggleHidden} from '../../redux/cart/cart.actions';
import './cart-icon.styles.scss';
const cartIcon=({toggleCartHidden})=>(
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"></ShoppingIcon>
        <span className="item-count">0</span>
    </div>
);
const mapDispatchToProps=dispatch=>({
    toggleCartHidden:()=>dispatch(toggleHidden())
});
export default connect(null,mapDispatchToProps)(cartIcon);

