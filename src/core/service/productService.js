import { API, graphqlOperation } from "aws-amplify";
import { createProduct } from "../../graphql/mutations";

const productService = () => {
  const createProject = async (input) =>
    await API.graphql(graphqlOperation(createProduct, { input }));

  return {
    createProject,
  };
};

export default productService;
