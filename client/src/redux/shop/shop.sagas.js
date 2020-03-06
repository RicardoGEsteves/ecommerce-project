import { takeLatest, call, put, all } from 'redux-saga/effects';

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';

import { fetchOffersSuccess, fetchOffersFailure } from './shop.actions';

import shopActionTypes from './shop.types';

export function* fetchOffersAsync() {
  try {
    const collectionRef = firestore.collection('offers');
    const snapshot = yield collectionRef.get();
    const offersMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchOffersSuccess(offersMap));
  } catch (error) {
    yield put(fetchOffersFailure(error.message));
  }
}

export function* fetchOffersStart() {
  yield takeLatest(shopActionTypes.FETCH_OFFERS_START, fetchOffersAsync);
}

export function* shopSagas() {
  yield all([call(fetchOffersStart)]);
}
