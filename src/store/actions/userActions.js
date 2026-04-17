// Action types
export const SET_USER = "setUser";
export const SET_LOADING = "setLoading";
export const LOGOUT = "logout";

// Action creators

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  payload: isLoading,
});

export const logout = () => ({
  type: LOGOUT,
});
