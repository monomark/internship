import { Auth } from "aws-amplify";

const authService = () => {
  const signUp = async (data) =>
    await Auth.signUp({
      username: data.email.toLowerCase(),
      password: data.password,
    });

  const confirmSignUp = async (username, value) =>
    await Auth.confirmSignUp(username, value);

  const resendSignUp = async (username) => await Auth.resendSignUp(username);

  const login = async (form) =>
    await Auth.signIn({
      username: form.email.toLowerCase(),
      password: form.password,
    });

  const forgetPassword = async (email) => await Auth.forgotPassword(email);

  const forgotPasswordSubmit = async (email, code, password) =>
    await Auth.forgotPasswordSubmit(email, code, password);

  const signOut = () => Auth.signOut();

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
export default authService;
