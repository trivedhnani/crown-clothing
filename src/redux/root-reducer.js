import {combineReducers} from 'redux';
// combineReducders is to combine all reducers into rootReducer
import userReducer from '../redux/user/user-reducer';
export default combineReducers({
    user:userReducer
})