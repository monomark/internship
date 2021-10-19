import { authUseCase } from "../../core/factory";
import { useMutation } from "react-query";

const useChangePassword = () => {
  const {
    mutate: changePassword,
    isLoading,
    error,
    data,
  } = useMutation(authUseCase.changePassword);

  return {
    isLoading,
    error,
    data,
    changePassword,
  };
};

export default useChangePassword;
