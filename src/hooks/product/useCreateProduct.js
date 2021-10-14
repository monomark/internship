import { productUseCase } from "../../core/factory";
import { useMutation } from "react-query";

const useCreateProduct = () => {
  const { isLoading, error, data, mutate: createProduct } = useMutation(productUseCase.createProject);

  return {
    isLoading,
    error,
    data,
    createProduct,
  };
};

export default useCreateProduct;
