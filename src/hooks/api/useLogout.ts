import { BASE_URL, LOGOUT } from "@/constants/api";
import { getLocal } from "@/utils/storageUtils";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${getLocal("user_info")?.data?.access_token}`,
  },
});

const handleLogout: any = async (): Promise<AxiosResponse> => {
  return instance.post(`${LOGOUT}`);
};

export const useLogout = (
  onSuccessFunc: (data: AxiosResponse) => void,
  onErrorFunc: (error: Error) => void,
  queryClient: any
) => {
  const options: any = {
    onSuccess: onSuccessFunc,
    onError: onErrorFunc,
    onSettled: () => {
      queryClient.invalidateQueries("create");
    },
  };

  return useMutation({
    mutationFn: handleLogout,
    mutationKey: ["logout"],
    ...options,
  });
};
