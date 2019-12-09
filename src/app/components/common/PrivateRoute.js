import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { ROUTES } from "../../../constants";
import { UserContext } from "../../../context";

const PrivatRoute = ({ component: Component, ...rest }) => {
  const { isAuth } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={props => {
        if (!isAuth) {
          return <Redirect to={ROUTES.login} />;
        } else {
          return <Component {...props} />;
        }
      }}
    ></Route>
  );
};

export default PrivatRoute;
