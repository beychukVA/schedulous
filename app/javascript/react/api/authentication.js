import { api } from "./paths";
import post from "./post";
import deleteRequest from "./delete";

export function login(data) {
  return post(api.authentication.login(), data);
}

export function signup(data) {
  return post(api.authentication.signup(), data);
}

export function logout() {
  return deleteRequest(api.authentication.logout());
}
