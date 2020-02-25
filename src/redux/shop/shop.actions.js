import ShopActionTypes from './shop.types';

export const updateOffers = offersMap => ({
  type: ShopActionTypes.UPDATE_OFFERS,
  payload: offersMap
});
