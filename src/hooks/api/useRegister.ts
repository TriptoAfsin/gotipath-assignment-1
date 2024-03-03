import { BASE_URL, REGISTER } from "@/constants/api";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

interface RegistrationValues {
  first_name?: string;
  last_name?: string;
  email: string;
  phone: string;
  password: string;
  company_name?: string;
  type: string;
  country: string;
  accept_terms_and_conditions: boolean;
  profession?: string;
  team_size?: string;
  know_about_us?: string;
}

const instance = axios.create({
  baseURL: BASE_URL,
});

const handleRegister: any = async (
  values: RegistrationValues
): Promise<AxiosResponse> => {
  const requestBody = {
    email: values.email.toLowerCase(),
    password: values.password,
  };
  return instance.post(`${REGISTER}`, requestBody);
};

export const useRegister = (
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
    mutationFn: handleRegister,
    mutationKey: ["register"],
    ...options,
  });
};
