import React from "react";
import * as Routes from "./Routes/Routes";
import { Redirect, Route, Switch } from "react-router-dom";
import {Browse, Home, Signin, Signup} from "./Pages/index";
function App() {
  return (
    <Switch>
      <Route path={Routes.Browse} exact>
        <Browse/>
      </Route>
      <Route path={Routes.SIGN_UP} exact>
        <Signup/>
      </Route>
      <Route path={Routes.SIGN_IN} exact>
        <Signin/>
      </Route>
      <Route path={Routes.Home} exact>
        <Home/>
      </Route>
      <Redirect to={Routes.Home}/>
    </Switch>
  );
}

export default App;
