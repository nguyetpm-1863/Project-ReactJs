import * as connect from './actions';

const initialState = {
  product: null,
  count: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case connect.DETAIL_PRODUCT:
      return {
        ...state,
        product: action.product,
      };
    case connect.COUNT_CARD:
      return {
        ...state,
        count: action.count,
      };
    default:
      return state;
  }
};

export default rootReducer;