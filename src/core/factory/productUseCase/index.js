const productUseCase = (productService) => {
  const createProject = async (input) =>
    await productService.createProduct(input);

  return {
    createProject,
  };
};

export default productUseCase;
