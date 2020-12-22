export const COUNT_CART = 'COUNT_CART';
export const getCountCartItem = (count) => async (dispatch) => {
  dispatch({
    type: COUNT_CART,
    count: count + 1,
  });
};

export const LIST_CARD = 'LIST_CARD';
export const getCardItem = (items) => async (dispatch) => {
  dispatch({
    type: LIST_CARD,
    items: items,
  });
};
