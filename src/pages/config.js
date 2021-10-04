import AuthLayout from "../layouts/AuthLayout";
import DefaultLayout from "../layouts/DefaultLayout";
import Homepage from "./Homepage";
import Register from "./Register";
import Search from "./Search";

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
    path: "/search",
    secure: false,
    layout: AuthLayout,
  },
];

export default config;
