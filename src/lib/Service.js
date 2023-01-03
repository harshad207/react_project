import { BASE_URL } from "./Constant";
import { callApi } from "../lib/Api";

export async function doRegister(data) {
  return await callApi({
    url: BASE_URL.USER_REGISTER,
    method: "POST",
    body: data,
  });
}

export async function doLogin(data) {
  return await callApi({
    url: BASE_URL.LOGIN_USER,
    method: "POST",
    body: data,
  });
}

export async function getAllUser() {
  return await callApi({
    url: BASE_URL.GET_USER,
    method: "GET",
  });
}

export async function getDetailById(id) {
  return await callApi({
    url: BASE_URL.GET_DETAIL_BY_ID + id,
    method: "GET",
  });
}

export async function createUser(data) {
  return await callApi({
    url: BASE_URL.CREATE_USER,
    method: "POST",
    body: data,
  });
}

export async function doUpdateUser(data) {
  return await callApi({
    url: BASE_URL.UPDATE_USER,
    method: "PUT",
    body: data,
  });
}

export async function doDeleteUser(id) {
  return await callApi({
    url: BASE_URL.DELETE_USER + id,
    method: "DELETE",
  });
}
