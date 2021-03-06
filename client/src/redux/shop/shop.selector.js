import { createSelector } from "reselect";
const selectShop = (state) => state.shop;
export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);
export const selectCollectionForPreview = createSelector(
  [selectShopCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);
export const selectCollection = (collectionUrlParameter) =>
  createSelector([selectShopCollections], (collections) =>
    collections ? collections[collectionUrlParameter] : null
  );
export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);
export const selectCollectionsIsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);
