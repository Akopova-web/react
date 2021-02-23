import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = "auth/SET_USER_DATA";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export const setAuthUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: {
    id,
    email,
    login,
    isAuth,
  },
});

export const authUser = () => async (dispatch) => {
    let data = await authAPI.getAuth();
    if (data.resultCode === 0) {
      let { id, email, login } = data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  };

export const loginUser = (email, password, rememberMe) => async (dispatch) => {
  let data = await authAPI.login(email, password, rememberMe);
  if (data.resultCode === 0) {
    dispatch(authUser());
  } else {
    let message =
      data.messages.length > 0 ? data.messages[0] : "Something is wrong";
    dispatch(stopSubmit("login", { _error: message }));
  }
};

export const logoutUser = (email, password, rememberMe) => async (dispatch) => {
  let data = await authAPI.logout(email, password, rememberMe);
  if (data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
