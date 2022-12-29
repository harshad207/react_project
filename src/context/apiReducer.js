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

    default:
      return state;
  }
};

export const apiReducer = reducer;
