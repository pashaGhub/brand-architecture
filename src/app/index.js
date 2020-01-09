import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import { ROUTES } from "../constants";
import { MainProvider } from "../context";
// import UserValidation from "./components/common/UserValidation";
// import PrivateRoute from "./components/common/PrivateRoute";
import Layout from "./components/Layout";
// import { Login } from "./pages";

function App() {
  return (
    <MainProvider>
      <Layout />

      {/* login version */}
      {/* <UserValidation>
      <Router>
        <Switch>
          <PrivateRoute path={ROUTES.dashboard} exact component={Layout} />
          <Route path={ROUTES.login} exact component={Login} />
        </Switch>
      </Router>
      </UserValidation> */}
    </MainProvider>
  );
}

export default App;
