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
import GetAllProducts from "./GetAllProducts"
import ChangePassword from './Changepassword';
import UserDetails from './UserDetails';
import Profile from './Profile';
import MyProducts from "./MyProducts";
import UpdatedProducts from "./UpdatedProducts";

const config = [
  {
    component: Homepage,
    path: "/",
    secure: false,
    layout: DefaultLayout,
    exact: true,
  },
  {
    component: Register,
    path: "/register",
    secure: false,
    layout: AuthLayout,
    exact: true,
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
    exact: true,
  },
  {
    component: Verify,
    path: "/verify",
    secure: false,
    layout: AuthLayout,
    exact: true,
  },
  {
    component: ForgottenPassword,
    path: "/forgotpassword",
    secure: false,
    layout: AuthLayout,
    exact: true,
  },
  {
    component: ResetPassword,
    path: "/resetpassword",
    secure: false,
    layout: AuthLayout,
    exact: true,
  },
  {
    component: Profile,
    path: "/profile",
    secure: true,
    layout: DefaultLayout,
    exact: true,
  },
  {
    component: ChangePassword,
    path: "/changepassword",
    secure: true,
    layout: DefaultLayout,
    exact: true,
  },
  {
    component: UserDetails,
    path: "/userdetails",
    secure: true,
    layout: DefaultLayout,
    exact: true,
  },
  {
    component: CreateProduct,
    path: "/create-product",
    secure: false,
    layout: AuthLayout,
  },
  {
    component: MyProducts,
    path: "/myproducts",
    secure: false,
    layout: DefaultLayout,
  },
  {
    component: UpdatedProducts,
    path: "/update-product",
    secure: false,
    layout: DefaultLayout,
  },
  {
  component: GetAllProducts,
  path: '/get-allproducts',
  secure: false,
  layout: AuthLayout,
  }
]

export default config;
