const authUseCase = (authService) => {
  const signUp = async ({ email, password }) =>
    await authService.signUp(email, password);

  const confirmSignUp = async (data) => await authService.confirmSignUp(data);

  const resendSignUp = async (username) =>
    await authService.resendSignUp(username);

  const login = async (form) => await authService.login(form);

  const forgetPassword = async (email) =>
    await authService.forgotPassword(email);

  const forgotPasswordSubmit = async (data) =>
    await authService.forgotPasswordSubmit(data);

  const signOut = () => authService.signOut();

  const changePassword = async (data) => await authService.changePassword(data);

  return {
    signUp,
    confirmSignUp,
    resendSignUp,
    login,
    forgetPassword,
    forgotPasswordSubmit,
    signOut,
    changePassword,
  };
};
export default authUseCase;
