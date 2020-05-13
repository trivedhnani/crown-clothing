import { takeLatest, call, put, all } from "redux-saga/effects";
import ShopActionTypes from "./shop.types";
import {
  firestore,
  convertCollectionssnapShotToMap,
} from "../../firebase/firebase.utils";
import { fecthCollectionSuccess, fetchCollectionsFail } from "./shop.actions";
export function* fetchCollectionsStartAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionssnapShotToMap,
      snapshot
    );
    yield put(fecthCollectionSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFail(error));
  }
}
export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsStartAsync
  );
}
export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
