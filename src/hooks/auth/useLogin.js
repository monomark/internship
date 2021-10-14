import { authUseCase } from "../../core/factory";
import { useQuery } from "react-query";

const useLogin = (form) => {
  const { isLoading, error, data, refetch } = useQuery("auth", () =>
    authUseCase.login(form)
  );

  return {
    isLoading,
    error,
    data,
    refetch,
  };
};

export default useLogin;
