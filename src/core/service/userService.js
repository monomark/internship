import { API, graphqlOperation } from "aws-amplify";
import { createUser as createUserQuery } from "../../graphql/mutations";
import { getUser as getUserQuery } from "../../graphql/queries";

const userService = () => {
  const getUser = async (id) =>
    await API.graphql(graphqlOperation(getUserQuery, { id }));

  const createUser = async (data) =>
    await API.graphql(graphqlOperation(createUserQuery, { data }));

  const updateUser = async (username) =>
    await API.graphql(graphqlOperation(getUserQuery, { username }));

  const listUsers = async (form) =>
    await API.graphql(graphqlOperation(getUserQuery, { form }));

  return {
    getUser,
    createUser,
    updateUser,
    listUsers,
  };
};
export default userService;
