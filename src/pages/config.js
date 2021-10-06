import AuthLayout from "../layouts/AuthLayout"
import DefaultLayout from "../layouts/DefaultLayout"
import Homepage from "./Homepage"
import Register from "./Register"
import Login from "./Login"
import Verify from "./Verify"
import ForgottenPassword from "./ForgotPassword"
import ResetPassword from "./ResetPassword"
import CreateProduct from "./CreateProduct"
import Search from './Search'

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
    component: Search,
    path: "/products",
    secure: false,
    layout: DefaultLayout,
  },
  {
    component: Login,
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
  {
    component: CreateProduct,
    path: '/create-product',
    secure: false,
    layout: AuthLayout,
   }
]

export default config
