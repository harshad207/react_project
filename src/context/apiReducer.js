import { ApiActions } from "./apiAction";

const reducer = (state, action) => {
  switch (action.type) {
    case ApiActions.USER_REGISTER:
      return {
        ...state,
        userRegister: action.payload,
      };

    case ApiActions.LOGIN_USER:
      return {
        ...state,
        loginUser: action.payload,
      };

    case ApiActions.GET_ALL_USER:
      return {
        ...state,
        getAllUser: action.payload,
      };
    case ApiActions.UPDATE_USER:
      return {
        ...state,
        updateUser: action.payload,
      };

    case ApiActions.USER_DETAIL:
      return {
        ...state,
        userDetail: action.payload,
      };

    default:
      return state;
  }
};

export const apiReducer = reducer;
