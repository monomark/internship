import { authUseCase } from "../../core/factory";
import { useMutation } from "react-query";

const useSignUp = () => {
  const {
    mutate: signUp,
    isLoading,
    error,
    data,
  } = useMutation(authUseCase.signUp);
  return {
    signUp,
    isLoading,
    error,
    data,
  };
};

export default useSignUp;
