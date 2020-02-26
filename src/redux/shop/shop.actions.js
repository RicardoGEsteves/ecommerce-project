import ShopActionTypes from './shop.types';

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';

export const fetchOffersStart = () => ({
  type: ShopActionTypes.FETCH_OFFERS_START
});

export const fetchOffersSuccess = offersMap => ({
  type: ShopActionTypes.FETCH_OFFERS_SUCCESS,
  payload: offersMap
});

export const fetchOffersFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_OFFERS_FAILURE,
  payload: errorMessage
});

export const fetchOffersStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('offers');
    dispatch(fetchOffersStart());

    collectionRef
      .get()
      .then(snapshot => {
        const offersMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchOffersSuccess(offersMap));
      })
      .catch(error => dispatch(fetchOffersFailure(error.message)));
  };
};
