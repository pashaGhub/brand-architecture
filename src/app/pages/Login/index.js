import React, { useContext, createRef } from "react";
import { Redirect } from "react-router-dom";

import { ROUTES } from "../../../constants";
import { UserContext } from "../../../context";
import "./index.scss";

function Login() {
  const { userLogin, isAuth } = useContext(UserContext);
  const username = createRef();
  const password = createRef();

  if (isAuth) {
    return <Redirect to={ROUTES.dashboard} />;
  }

  return (
    <div className="Login-container">
      <div className="Login-title">
        <h2>LOGO</h2>
      </div>
      <div className="Login-form">
        <form>
          <div className="Form-item">
            <input type="text" name="userName" ref={username} required />
            <label className="Label-inside" htmlFor="userName">
              Username
            </label>
          </div>
          <div className="Form-item">
            <input type="password" name="password" ref={password} required />
            <label className="Label-inside" htmlFor="password">
              Password
            </label>
          </div>
          <div>
            <input
              type="button"
              value="Login"
              className="Form-button"
              onClick={() =>
                userLogin({
                  username: username.current.value,
                  password: password.current.value
                })
              }
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
