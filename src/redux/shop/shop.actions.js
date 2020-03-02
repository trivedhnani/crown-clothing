import ShopActionTypes from "./shop.types";
import {
  firestore,
  convertCollectionssnapShotToMap
} from "../../firebase/firebase.utils";

export const fetchCollectionStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});
export const fetchCollectionSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});
export const fetchCollectionFailure = error => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: error
});
export const fetchCollectionStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionStart());
    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionssnapShotToMap(snapshot);
        dispatch(fetchCollectionSuccess(collectionsMap));
      })
      .catch(error => {
        dispatch(fetchCollectionFailure(error.message));
      });
  };
};
