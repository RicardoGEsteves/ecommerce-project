import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopItems = createSelector(
  [selectShop],
  shop => shop.shopItems
);

export const selectOffersForPreview = createSelector(
  [selectShopItems],
  offers => Object.keys(offers).map(key => offers[key])
);

export const selectOffer = offerUrlParam =>
  createSelector([selectShopItems], offers => offers[offerUrlParam]);
