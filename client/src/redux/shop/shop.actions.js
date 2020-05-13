import ShopActionTypes from "./shop.types";
import {
  firestore,
  convertCollectionssnapShotToMap,
} from "../../firebase/firebase.utils";
export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});
export const fetchCollectionsFail = (err) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAIL,
  payload: err,
});
export const fecthCollectionSuccess = (collection) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collection,
});
export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());
    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionssnapShotToMap(snapshot);
        dispatch(fecthCollectionSuccess(collectionsMap));
      })
      .catch((err) => dispatch(fetchCollectionsFail(err.message)));
  };
};
