import { authUseCase } from "../../core/factory";
import { useMutation } from "react-query";

const useLogin = () => {
  const { mutate: login, isLoading, error, data } = useMutation(authUseCase.login);

  return {
    isLoading,
    error,
    data,
    login,
  };
};

export default useLogin;
