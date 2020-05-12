import { takeLatest, call, all, put } from "redux-saga/effects";
import UserActionTypes from "../user/user.types";
import { clearCart } from "./cart.actions";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignout() {
  yield takeLatest(UserActionTypes.SIGNOUT_SUCCESS, clearCartOnSignOut);
}
export function* cartSagas() {
  yield all([call(onSignout)]);
}
