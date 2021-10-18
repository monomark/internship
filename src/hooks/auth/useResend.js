import { authUseCase } from "../../core/factory";
import { useMutation } from "react-query";

const useResend = () => {
  const {
    mutate: resendSignUp,
    isLoading,
    error,
    data,
  } = useMutation(authUseCase.resendSignUp);
  return {
    resendSignUp,
    isLoading,
    error,
    data,
  };
};

export default useResend;
