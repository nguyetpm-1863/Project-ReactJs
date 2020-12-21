export const DETAIL_PRODUCT = 'DETAIL_PRODUCT';
export const getDetailProduct = (product) => async (dispatch) => {
  dispatch({
    type: DETAIL_PRODUCT,
    product,
  });
};

export const COUNT_CARD = 'COUNT_CARD';
export const getCountCardItem = (count) => async (dispatch) => {
  dispatch({
    type: COUNT_CARD,
    count: count + 1,
  });
};