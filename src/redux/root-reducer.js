import {combineReducers} from 'redux';
// combineReducders is to combine all reducers into rootReducer
import userReducer from '../redux/user/user-reducer';
import CartReducer from '../redux/cart/cart.reducer'
export default combineReducers({
    user:userReducer,
    cart:CartReducer
})