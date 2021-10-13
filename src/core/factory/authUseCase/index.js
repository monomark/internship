const authUseCase = (authService) => {
  const signUp = async (data) => await authService.signUp(data);

  const confirmSignUp = async (data) => await authService.confirmSignUp(data);

  const resendSignUp = async (username) =>
    await authService.resendSignUp(username);

  const login = async (form) => await authService.login(form);

  const forgetPassword = async (email) =>
    await authService.forgotPassword(email);

  const forgotPasswordSubmit = async (data) =>
    await authService.forgotPasswordSubmit(data);

  const signOut = () => authService.signOut();

  return {
    signUp,
    confirmSignUp,
    resendSignUp,
    login,
    forgetPassword,
    forgotPasswordSubmit,
    signOut,
  };
};
export default authUseCase;
