import * as connect from './actions';

const initialState = {
  count: 0,
  items: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case connect.COUNT_CART:
      return {
        ...state,
        count: action.count,
      };
    case connect.LIST_CARD:
      return {
        ...state,
        items: action.item,
      };
    default:
      return state;
  }
};

export default rootReducer;
