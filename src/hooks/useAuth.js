import { useMutation, useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { API } from "src/config";

const userLogin = (payload) => {
  return API.POST_AUTH("/api/v1/auth/login", payload);
};

const userProfile = () => {
  return API.GET_AUTH("/api/v1/auth/profile");
};

export const useLoginAuth = () => {
  return useMutation({
    mutationFn: userLogin,
  });
};

export const useProfile = () => {
  const token = Cookies.get("token");

  return useQuery({
    queryKey: ["profile"],
    queryFn: userProfile,
    refetchOnWindowFocus: false,
    enabled: !!token,
  });
};
