import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ApiActions } from "./apiAction";
import { ApiContext } from "./apiContext";
import { doRegister } from "../lib/Service";
export function useApi() {
  const navigation = useNavigate();
  const { apiState, dispatch } = useContext(ApiContext);

  const registerUser = async (data, reset) => {
    try {
      //console.log('data', data);
      const response = await doRegister(data);
      console.log("register response is => ", response);
      if (response && response.status) {
        dispatch({
          type: ApiActions.USER_REGISTER,
          payload: data,
        });
        reset();
        setTimeout(() => {
          navigation("/");
        }, 2000);
      } else {
      }
    } catch (error) {
      console.log("doRegister error =>", error);
    }
  };
  return {
    apiState,
    registerUser,
  };
}
