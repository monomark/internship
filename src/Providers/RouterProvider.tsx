import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "../pages/Kitchen";
// import SignUp from '../pages/SignUp'
import SignIn from "../pages/SignIn/index";
// import Bedroom from '../pages/Bedroom'
// import Bathroom from '../pages/Bathroom'
import Catalogue from "../pages/catalogue/index";
import Kitchen from "../pages/Kitchen/index";

const routes = [
  { component: Homepage, path: "/" },
  // {component: SignUp, path: '/sign-up'},
  { component: SignIn, path: "/sign-in" },
  // {component: Bedroom, path: '/bedroom'},
  // {component: Bathroom, path: '/bedroom'},
  { component: Catalogue, path: "/catalogue" },
  { component: Kitchen, path: "/kitchen" },
];

function RouterProvider() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((item) => (
          <Route exact path={item.path} component={item.component} />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default RouterProvider;
