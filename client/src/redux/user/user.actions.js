import UserActionTypes from "./user.types.js";
export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payLoad: user,
});
export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGNIN_START,
});
export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGNIN_SUCCESS,
  payLoad: user,
});
export const signInFailure = (err) => ({
  type: UserActionTypes.SIGNIN_FAILURE,
  payLoad: err,
});
export const emailSignInStart = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_SIGNIN_START,
  payLoad: emailAndPassword,
});
export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});
export const signOutFailure = (error) => ({
  type: UserActionTypes.SIGNOUT_FAILURE,
  payLoad: error,
});
export const signOutStart = () => ({
  type: UserActionTypes.SIGNOUT_START,
});
export const signOutSuccess = () => ({
  type: UserActionTypes.SIGNOUT_SUCCESS,
});
export const signUpStart = (emailAndPassword) => ({
  type: UserActionTypes.SIGNUP_START,
  payLoad: emailAndPassword,
});
export const signUpSuccess = (emailAndPassword) => ({
  type: UserActionTypes.SIGNUP_SUCCESS,
  payLoad: emailAndPassword,
});
export const signUpFailure = (error) => ({
  type: UserActionTypes.SIGNUP_FAILURE,
  payLoad: error,
});
