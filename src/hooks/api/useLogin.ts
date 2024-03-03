import { BASE_URL, LOGIN } from "@/constants/api";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

interface LoginValues {
  email: string;
  password: string;
}

const instance = axios.create({
  baseURL: BASE_URL,
});

const handleLogin: any = async (
  values: LoginValues
): Promise<AxiosResponse> => {
  const requestBody = {
    email: values.email.toLowerCase(),
    password: values.password,
  };
  return instance.post(`${LOGIN}`, requestBody);
};

export const useLogin = (
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
    mutationFn: handleLogin,
    mutationKey: ["login"],
    ...options,
  });
};
