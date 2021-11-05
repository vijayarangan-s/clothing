import { createSelector } from "reselect"
import memoize from 'lodash.memoize';


export const selectShop = state => state.collections

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  )
);