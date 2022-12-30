export const ApiActions = {
  USER_REGISTER: " USER_REGISTER",
  LOGIN_USER: "LOGIN_USER",
  GET_ALL_USER: "GET_ALL_USER",
  CREATE_USER: "CREATE_USER",
};

const registerAction = {
  type: ApiActions.USER_REGISTER,
  payload: null,
};

const loginAction = {
  type: ApiActions.LOGIN_USER,
  payload: null,
};
const getallUserAction = {
  type: ApiActions.GET_ALL_USER,
  payload: null,
};
const createUserAction = {
  type: ApiActions.CREATE_USER,
  payload: null,
};

export const ApiAction =
  registerAction | loginAction | getallUserAction | createUserAction;
