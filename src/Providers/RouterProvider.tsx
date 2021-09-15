import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
// import SignUp from '../pages/SignUp'
//import SignIn from "../pages/SignIn/index";
import Bedroom from "../pages/Bedroom";
import SignIn from "../pages/SignIn";
import ForgotPassword from "../pages/ForgotPassword";

// import Bedroom from '../pages/Bedroom'
import Bathroom from '../pages/Bathroom'
import Kitchen from "../pages/Kitchen/index";
import Catalogue from "../pages/Catalogues";

const routes = [
  { component: Homepage, path: "/" },
  // {component: SignUp, path: '/sign-up'},
  { component: SignIn, path: "/sign-in" },
  { component: ForgotPassword, path: "/forgot-password" },
  // {component: Bedroom, path: '/bedroom'},
  // {component: Bathroom, path: '/bedroom'},
  { component: Catalogue, path: "/catalogue" },
  { component: Kitchen, path: "/kitchen" },
  { component: Catalogue, path: "/catalogue", exact: false },
 
  {component: Bedroom, path: '/bedroom'},
  {component: Bathroom, path: '/bedroom'},
  { component: Catalogue, path: "/catalogue" },
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
