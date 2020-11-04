import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.key(collections).map((key) => collections[key])
);

export const selectCollection = (collectionUrlParams) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParams]
  );
