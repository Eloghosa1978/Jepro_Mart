export const SET_PRODUCTS = "setProducts";
export const SET_LOADING = "setLoading";
export const SET_ERROR = "setError";

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: loading,
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});
