import { BrowserRouter as Router, Switch } from "react-router-dom";
import Route from "../pages/Route";
import routes from "../pages/config";

const RouterProvider = () => {
  return (
    <Router>
      <Switch>
        {routes.map(({ path, layout, secure, component }) => (
          <Route
            key={path}
            path={path}
            exact
            Layout={layout}
            secure={secure}
            component={component}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default RouterProvider;
