import { apiBaseUrl } from "@/constants/api";
import { useQuery } from "react-query";

const getUserData = () => fetch(apiBaseUrl + "user").then((res) => res.json());

export function useUserData() {
  return useQuery("user-data", getUserData)
}