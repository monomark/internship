import { authUseCase } from "../../core/factory";
import { useMutation } from "react-query";

const useReset = () => {
  const {
    mutate: reset,
    isLoading,
    error,
    data,
  } = useMutation(authUseCase.forgotPasswordSubmit);
  return {
    reset,
    isLoading,
    error,
    data,
  };
};

export default useReset;
