import { BASE_URL } from "./Constant";
import { callApi } from "../lib/Api";

export async function doRegister(data) {
  return await callApi({
    url: BASE_URL.USER_REGISTER,
    method: "POST",
    body: data,
  });
}
