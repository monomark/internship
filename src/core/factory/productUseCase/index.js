const productUseCase = (productService) => {
  const createProject = async (input) => await productService.createProject(input);

  return {
    createProject,
  };
};

export default productUseCase;
