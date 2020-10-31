import React from "react";
import * as Routes from "./Routes/Routes";
import { Redirect, Switch } from "react-router-dom";
import { Browse, Home, Signin, Signup } from "./Pages/index";
import { IsUserRedirect, ProtectedRoute } from "./Helpers/Routes";
import { useAuthListener } from "./Hooks/index";
function App() {
  const user = useAuthListener();
  return (
    <Switch>
      <ProtectedRoute user={user} path={Routes.Browse} exact>
        <Browse />
      </ProtectedRoute>

      <IsUserRedirect
        user={user}
        loggedPath={Routes.Browse}
        exact
        path={Routes.SIGN_UP}
      >
        <Signup />
      </IsUserRedirect>
      <IsUserRedirect
        user={user}
        loggedPath={Routes.Browse}
        exact
        path={Routes.SIGN_IN}
      >
        <Signin />
      </IsUserRedirect>

      <IsUserRedirect
        user={user}
        exact
        loggedPath={Routes.Browse}
        path={Routes.Home}
      >
        <Home />
      </IsUserRedirect>

      <Redirect to={Routes.Home} />
    </Switch>
  );
}

export default App;
