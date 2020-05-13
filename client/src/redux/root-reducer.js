import {combineReducers} from 'redux';
// combineReducders is to combine all reducers into rootReducer
import userReducer from '../redux/user/user-reducer';
import {persistReducer} from 'redux-persist';
import CartReducer from '../redux/cart/cart.reducer'
import storage from 'redux-persist/lib/storage';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';
const persistConfig={
    key:'root',
    storage,
    whitelist:['cart']
}
const rootReducer= combineReducers({
    user:userReducer,
    cart:CartReducer,
    directory: directoryReducer,
    shop:shopReducer
})
export default persistReducer(persistConfig,rootReducer);
