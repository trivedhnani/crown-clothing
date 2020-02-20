import {combineReducers} from 'redux';
// combineReducders is to combine all reducers into rootReducer
import userReducer from '../redux/user/user-reducer';
import {persistReducer} from 'redux-persist';
import CartReducer from '../redux/cart/cart.reducer'
import storage from 'redux-persist/lib/storage';
const persistConfig={
    key:'root',
    storage,
    whitelist:['cart']
}
const rootReducer= combineReducers({
    user:userReducer,
    cart:CartReducer
})
export default persistReducer(persistConfig,rootReducer);
