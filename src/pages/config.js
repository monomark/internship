import AuthLayout from "../layouts/AuthLayout";
import DefaultLayout from "../layouts/DefaultLayout";
import Homepage from "./Homepage";
import Register from "./Register";
import LogIn from "./LogIn";
import Verify from "./Verify";
import ForgottenPassword from "./ForgottenPassword";
import ResetPassword from "./ResetPassword";

const config = [
  {
    component: Homepage,
    path: "/",
    secure: false,
    layout: DefaultLayout,
  },
  {
    component: Register,
    path: "/register",
    secure: false,
    layout: AuthLayout,
  },
  {
    component: LogIn,
    path: "/login",
    secure: false,
    layout: AuthLayout,
  },
  {
    component: Verify,
    path: "/verify",
    secure: false,
    layout: AuthLayout,
  },
  {
    component: ForgottenPassword,
    path: "/forgotpassword",
    secure: false,
    layout: AuthLayout,
  },
  {
    component: ResetPassword,
    path: "/resetpassword",
    secure: false,
    layout: AuthLayout,
  },
];

export default config;
