export const DETAIL_PRODUCT = 'DETAIL_PRODUCT';
export const getDetailProduct = (product) => async (dispatch) => {
  dispatch({
    type: DETAIL_PRODUCT,
    product,
  });
};