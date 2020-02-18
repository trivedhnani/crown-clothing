import {UserActionTypes} from './user.types.js';
export const setCurrentUser=user=>({
    type:UserActionTypes.SET_CURRENT_USER,
    payLoad: user
});
