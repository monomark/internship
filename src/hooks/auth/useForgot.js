import { authUseCase } from "../../core/factory";
import { useMutation } from "react-query";

const useForgot = () => {
  const {
    mutate: forgot,
    isLoading,
    error,
    data,
  } = useMutation(authUseCase.forgetPassword);
  return {
    forgot,
    isLoading,
    error,
    data,
  };
};

export default useForgot;
