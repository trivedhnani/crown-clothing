import UserActionTypes from "./user.types.js";
const INITIAL_STATE = {
  currentUser: null,
  error: null,
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payLoad,
        error: null,
      };
    case UserActionTypes.SIGNIN_FAILURE:
    case UserActionTypes.SIGNOUT_FAILURE:
    case UserActionTypes.SIGNUP_FAILURE:
      return {
        ...state,
        error: action.payLoad,
      };
    case UserActionTypes.SIGNOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    default:
      return state;
  }
};
export default userReducer;
