import * as connect from './actions';

const initialState = {
  product: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case connect.DETAIL_PRODUCT:
      return {
        ...state,
        product: action.product,
      };
    default:
      return state;
  }
};

export default rootReducer;