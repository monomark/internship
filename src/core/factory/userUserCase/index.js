const userUserCase = (userService) => {
  const getUser = async (id) => await userService.getUser(id);

  const listUsers = async () => await userService.listUsers();

  const updateUser = async (username) => await userService.updateUser(username);

  const createUser = async (form) => await userService.createUser(form)

  return {
    getUser,
    listUsers,
    updateUser,
    createUser,
  };
};
export default userUserCase;
