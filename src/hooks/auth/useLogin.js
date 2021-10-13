import { authUseCase } from "../../core/factory";
import { useQuery } from "react-query";

const useLogin = (form) => {
  const { isLoading, error, hh, refetch } = useQuery("auth", () =>
    authUseCase.login(form)
  );

  return {
    isLoading,
    error,
    hh,
    refetch,
  };
};

export default useLogin;
