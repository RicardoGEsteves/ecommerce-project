import shopActionTypes from './shop.types';

const INITIAL_STATE = {
  shopItems: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.UPDATE_OFFERS:
      return {
        ...state,
        shopItems: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;
