import { useQuery } from "@tanstack/react-query";
import { API } from "src/config";

const getZodiak = (params) => {
  return API.GET("/products", params);
};

export const useProduct = (params) => {
  return useQuery({
    queryKey: ["/products", params],
    queryFn: () => getZodiak(params),
    refetchOnWindowFocus: false,
  });
};
