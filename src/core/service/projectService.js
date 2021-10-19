import { API, graphqlOperation } from "aws-amplify";
import { getProduct } from "../../graphql/queries";
import { deleteProduct } from "../../graphql/mutations";
import { createProduct } from "../../graphql/mutations";
import { listProducts } from "../../graphql/queries";
import { updateUser } from "../../graphql/mutations";

const projectService = () => {
  const getProject = async (id) =>
    await API.graphql(graphqlOperation(getProduct, { id }));
  const deleteProject = async (id) =>
    await API.graphql(graphqlOperation(deleteProduct, { id }));
  const createProject = async (input) =>
    await API.graphql(graphqlOperation(createProduct, { input }));
  const listProject = async (data) =>
    await API.graphql(graphqlOperation(listProducts, { data }));
  const updateproject = async (input) =>
    await API.graphql(graphqlOperation(updateUser, { input }));

  return {
    getProject,
    deleteProject,
    createProject,
    listProject,
    updateproject,
  };
};

export default projectService;
