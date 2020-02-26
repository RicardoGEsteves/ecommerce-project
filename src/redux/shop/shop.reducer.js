import shopActionTypes from './shop.types';

const INITIAL_STATE = {
  shopItems: null,
  isFetching: false,
  errorMessage: undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.FETCH_OFFERS_START:
      return {
        ...state,
        isFetching: true
      };
    case shopActionTypes.FETCH_OFFERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        shopItems: action.payload
      };
    case shopActionTypes.FETCH_OFFERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;
