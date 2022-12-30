/* eslint-disable no-unreachable */
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ApiActions } from "./apiAction";
import { ApiContext } from "./apiContext";

// import { Toast } from "primereact/toast";
import { createUser, doLogin, doRegister, getAllUser } from "../lib/Service";
export function useApi() {
  const navigate = useNavigate();
  // const ToastSuccess = (data) => {
  //   const toast = useRef(null);
  //   toast.current.show({
  //     severity: "success",
  //     summary: "Success Message",
  //     detail: data,
  //   });
  // };
  const navigation = useNavigate();
  const { apiState, dispatch } = useContext(ApiContext);

  const registerUser = async (data) => {
    try {
      //console.log('data', data);
      const response = await doRegister(data);
      console.log("register response is => ", response);
      if (response && response.status) {
        dispatch({
          type: ApiActions.LOGIN_USER,
          payload: data,
        });
        setTimeout(() => {
          navigation("/login");
        }, 2000);
      } else {
      }
    } catch (error) {
      console.log("doRegister error =>", error);
    }
  };

  const LoginUser = async (data) => {
    try {
      //console.log('data', data);
      const response = await doLogin(data);
      console.log("login response is => ", response);
      // ToastSuccess(response.message);
      if (response && response.status) {
        dispatch({
          type: ApiActions.LOGIN_USER,
          payload: response,
        });
        setTimeout(() => {
          navigation("/");
        }, 2000);
      } else {
      }
    } catch (error) {
      console.log("login error error =>", error);
    }
  };
  const getUserList = async () => {
    try {
      //console.log('data', data);
      const response = await getAllUser();
      console.log("getAllUser response is => ", response);
      // ToastSuccess(response.message);
      if (response && response.status) {
        dispatch({
          type: ApiActions.GET_ALL_USER,
          payload: response.result,
        });
      } else {
      }
    } catch (error) {
      console.log("getUser error =>", error);
    }
  };

  const addUser = async (data) => {
    try {
      const response = await createUser(data);
      console.log("addUser response is => ", response);
      // ToastSuccess(response.message);
      if (response && response.status) {
        dispatch({
          type: ApiActions.CREATE_USER,
          payload: response.result,
        });
        navigate("/user");
      } else {
      }
    } catch (error) {
      console.log("addUser error =>", error);
    }
  };

  return {
    apiState,
    registerUser,
    LoginUser,
    getUserList,
    addUser,
  };
}
