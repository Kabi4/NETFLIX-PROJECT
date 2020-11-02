import React from 'react';
import * as Routes from './Routes/Routes';
import { Redirect, Switch } from 'react-router-dom';
//import { Browse, Home, Signin, Signup } from './Pages/index';
import { IsUserRedirect, ProtectedRoute } from './Helpers/Routes';
import { useAuthListener } from './Hooks/index';
import asyncComponent from './LazyLoading/asyncImportingModules';
const AsyncBrowse = asyncComponent(() => {
    return import('./Pages/Browse');
});
const AsyncHome = asyncComponent(() => {
    return import('./Pages/Home');
});
const AsyncSignin = asyncComponent(() => {
    return import('./Pages/Signin');
});
const AsyncSignup = asyncComponent(() => {
    return import('./Pages/Signup');
});
function App() {
    const { user } = useAuthListener();
    return (
        <Switch>
            <ProtectedRoute user={user} path={Routes.Browse} exact>
                <AsyncBrowse />
            </ProtectedRoute>

            <IsUserRedirect
                user={user}
                loggedPath={Routes.Browse}
                exact
                path={Routes.SIGN_UP}
            >
                <AsyncSignup />
            </IsUserRedirect>
            <IsUserRedirect
                user={user}
                loggedPath={Routes.Browse}
                exact
                path={Routes.SIGN_IN}
            >
                <AsyncSignin />
            </IsUserRedirect>

            <IsUserRedirect
                user={user}
                exact
                loggedPath={Routes.Browse}
                path={Routes.Home}
            >
                <AsyncHome />
            </IsUserRedirect>

            <Redirect to={Routes.Home} />
        </Switch>
    );
}

export default App;
