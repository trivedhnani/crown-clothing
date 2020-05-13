import { put, takeLatest, all, call } from "redux-saga/effects";
import UserActionTypes from "./user.types";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/firebase.utils";
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure,
  emailSignInStart,
} from "./user.actions";
export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    // console.log(user);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data }));
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}
export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGNIN_START, signInWithGoogle);
}
export function* emailSignInWith({ payLoad: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data }));
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}
export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGNIN_START, emailSignInWith);
}
export function* isUserAuthentiacted() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data }));
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}
export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthentiacted);
}
export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error.message));
  }
}
export function* onSignoutStart() {
  yield takeLatest(UserActionTypes.SIGNOUT_START, signOut);
}
export function* signUpStart({ payLoad: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield call(createUserProfileDocument, user, { displayName });
    yield put(signUpSuccess({ email, password }));
  } catch (error) {
    yield put(signUpFailure(error.message));
  }
}
export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGNUP_START, signUpStart);
}
export function* signUpSuccessSignIn({ payLoad: { email, password } }) {
  try {
    yield put(emailSignInStart({ email, password }));
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}
export function* onSignupSuccess() {
  yield takeLatest(UserActionTypes.SIGNUP_SUCCESS, signUpSuccessSignIn);
}
export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignoutStart),
    call(onSignUpStart),
    call(onSignupSuccess),
  ]);
}
