import { createSelector } from 'reselect';

const OFFER_ID_MAP = {
  adventure: 1,
  roadtrip: 2,
  vacations: 3,
  trips: 4,
  accommodations: 5
};

const selectShop = state => state.shop;

export const selectShopItems = createSelector(
  [selectShop],
  shop => shop.shopItems
);

export const selectOffer = offerUrlParam =>
  createSelector([selectShopItems], offers =>
    offers.find(offer => offer.id === OFFER_ID_MAP[offerUrlParam])
  );
