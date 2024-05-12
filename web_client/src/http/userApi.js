import { handleErrors } from "@utils/handlers/http";
import { $host } from "./index";

export const getUsers = async (signal, query) => {
  const response = await $host.get(
    "/api/user/" + ((query !== undefined && "?" + query) || ""),
    { signal }
  );
  handleErrors(response);

  return response.data;
};

export const getUser = async (signal, userID) => {
  const response = await $host.get(`/api/user/${userID}/`, { signal });

  handleErrors(response);

  return response.data;
};
