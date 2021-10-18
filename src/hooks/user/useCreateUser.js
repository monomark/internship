import { useMutation } from "react-query";
import { userUserCase } from "../../core/factory";

const useCreateUser = () => {
  const {
    mutate: createUser,
    data,
    error,
    isLoading,
  } = useMutation(userUserCase.createUser);

  return {
    createUser,
    data,
    error,
    isLoading,
  };
};

export default useCreateUser;
