import { Auth, graphqlOperation } from "aws-amplify";
import { getUser } from "../../graphql/queries";
import { useUser } from "../../hooks";

const authService = () => {
  const signUp = async ({ email, password }) =>
    await Auth.signUp({
      username: email.toLowerCase(),
      password: password,
    });

  const confirmSignUp = async ({ username, code }) => {
    console.log(username, code, "hastat esa");
    await Auth.confirmSignUp(username, code);
  };

  const resendSignUp = async (username) => await Auth.resendSignUp(username);

  const login = async ({ email, password }) =>
    await Auth.signIn({
      username: email.toLowerCase(),
      password: password,
    });

  const forgetPassword = async (email) => await Auth.forgotPassword(email);

  const forgotPasswordSubmit = async ({ username, value, password }) =>
    await Auth.forgotPasswordSubmit(username, value, password);

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
