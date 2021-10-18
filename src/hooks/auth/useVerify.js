import { authUseCase } from "../../core/factory";
import { useMutation } from "react-query";

const useVerify = () => {
  const {
    mutate: confirmSignUp,
    isLoading,
    error,
    data,
  } = useMutation(authUseCase.confirmSignUp);
  return {
    confirmSignUp,
    isLoading,
    error,
    data,
  };
};

export default useVerify;
