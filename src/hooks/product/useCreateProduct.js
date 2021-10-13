import { productUseCase } from "../../core/factory";
import { useQuery } from "react-query";

const useCreateProduct = (input) => {
  const { isLoading, error, data, refetch } = useQuery("product", () =>
    productUseCase.createProject(input)
  );

  return {
    isLoading,
    error,
    data,
    refetch,
  };
};

export default useCreateProduct;
