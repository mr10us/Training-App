import { handleErrors } from "@utils/handlers/http";
import { $host } from "./index";

export const getUsers = async (query) => {
  const response = await $host.get(
    "/api/user/" + ((query !== undefined && "?" + query) || "")
  );
  handleErrors(response);

  return response.data;
};

export const getUser = async (userID) => {
  const response = await $host.get(`/api/user/${userID}/`);

  handleErrors(response);

  return response.data;
};

export const login = async (userID) => {
  const response = await $host.post(`/api/login/`, { userID });

  handleErrors(response);

  return response.data;
};
