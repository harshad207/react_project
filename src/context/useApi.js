/* eslint-disable no-unreachable */
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ApiActions } from "./apiAction";
import { ApiContext } from "./apiContext";

import { Toast } from "primereact/toast";
import {
  createUser,
  doLogin,
  doRegister,
  doUpdateUser,
  getAllUser,
  getDetailById,
} from "../lib/Service";
export function useApi() {
  const navigate = useNavigate();

  const { apiState, dispatch } = useContext(ApiContext);

  const registerUser = async (data) => {
    try {
      const response = await doRegister(data);
      console.log("register response is => ", response);
      if (response && response.status) {
        dispatch({
          type: ApiActions.LOGIN_USER,
          payload: data,
        });
        Toast.current.show({
          severity: "success",
          summary: "Success Message",
          detail: response.message,
        });
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        Toast.current.show({
          severity: "error",
          summary: "Error Message",
          detail: response.message,
        });
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
        Toast.current.show({
          severity: "success",
          summary: "Success Message",
          detail: response.message,
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        Toast.current.show({
          severity: "error",
          summary: "Error Message",
          detail: response.message,
        });
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
        Toast.current.show({
          severity: "error",
          summary: "Error Message",
          detail: response.message,
        });
      }
    } catch (error) {
      console.log("getUser error =>", error);
    }
  };

  const getDetail = async (id) => {
    try {
      const response = await getDetailById(id);
      console.log("getDetailById", response);
      if (response && response.status) {
        dispatch({
          type: ApiActions.USER_DETAIL,
          payload: response.result,
        });
      } else {
      }
    } catch (error) {
      console.log("getDetailById error =>", error);
    }
  };

  const addUser = async (data) => {
    try {
      const response = await createUser(data);
      console.log("addUser response is => ", response);
      if (response && response.status) {
        dispatch({
          type: ApiActions.CREATE_USER,
          payload: response.result,
        });
        Toast.current.show({
          severity: "success",
          summary: "Success Message",
          detail: response.message,
        });
        setTimeout(() => {
          navigate("/user");
        }, 2000);
      } else {
        Toast.current.show({
          severity: "error",
          summary: "Error Message",
          detail: response.message,
        });
      }
    } catch (error) {
      console.log("addUser error =>", error);
    }
  };

  const updateUser = async (data) => {
    try {
      const response = await doUpdateUser(data);
      console.log("update response is => ", response);
      // ToastSuccess(response.message);
      if (response && response.status) {
        dispatch({
          type: ApiActions.UPDATE_USER,
          payload: response.result,
        });
        Toast.current.show({
          severity: "success",
          summary: "Success Message",
          detail: response.message,
        });
        setTimeout(() => {
          navigate("/user");
        }, 2000);
      } else {
        Toast.current.show({
          severity: "error",
          summary: "Error Message",
          detail: response.message,
        });
      }
    } catch (error) {
      console.log("updateUser error =>", error);
    }
  };

  return {
    apiState,
    registerUser,
    LoginUser,
    getUserList,
    addUser,
    updateUser,
    getDetail,
  };
}
