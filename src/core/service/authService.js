import { Auth, graphqlOperation } from "aws-amplify";
import { getUser } from "../../graphql/queries";
import { useUser } from "../../hooks";

const authService = () => {
  const signUp = async (email, password) =>
    await Auth.signUp({
      username: email.toLowerCase(),
      password,
    });

  const confirmSignUp = async (username, value) =>
    await Auth.confirmSignUp(username, value);

  const resendSignUp = async (username) => await Auth.resendSignUp(username);

  const login = async ({ email, password }) =>
    await Auth.signIn({
      username: email.toLowerCase(),
      password: password,
    });

  const forgetPassword = async (email) => await Auth.forgotPassword(email);

  const forgotPasswordSubmit = async (email, code, password) =>
    await Auth.forgotPasswordSubmit(email, code, password);

  const signOut = () => Auth.signOut();

  const changePassword = async ({ user, oldPassword, newPassword }) =>
    await Auth.changePassword(user, oldPassword, newPassword);

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
export default authService;
