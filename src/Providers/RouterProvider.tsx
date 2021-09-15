import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import SignIn from "../pages/SignIn";
import ForgotPassword from "../pages/ForgotPassword";
import Bedroom from '../pages/Bedroom'
import Kitchen from "../pages/Kitchen/index";
import Catalogue from "../pages/Catalogues";
// import SignUp from '../pages/SignUp'
// import Bathroom from '../pages/Bathroom'

const routes = [
  { component: Homepage, path: "/", exact: true },
  { component: SignIn, path: "/sign-in", exact: true },
  { component: ForgotPassword, path: "/forgot-password", exact: true },
  { component: Bedroom, path: '/bedroom', exact: true },
  { component: Catalogue, path: "/catalogue", exact: true },
  { component: Kitchen, path: "/kitchen", exact: true },
  // {component: SignUp, path: '/sign-up, exact: true'},
  // {component: Bathroom, path: '/bedroom, exact: true'},
];

function RouterProvider() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map(( {exact,path, component}) => (
          <Route exact={exact} path={path} component={component} />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default RouterProvider;
