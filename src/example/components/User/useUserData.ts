import { useQuery } from "react-query";
import { apiBaseUrl } from "../../../constants/api";

const getUserData = () => fetch(apiBaseUrl + "user").then((res) => res.json());

export function useUserData() {
  return useQuery("user-data", getUserData)
}