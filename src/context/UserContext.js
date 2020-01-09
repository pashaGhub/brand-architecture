import React, { useState } from "react";

import { API_ENDPOINTS } from "../constants";

const UserContext = React.createContext();

function UserProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(localStorage.getItem("user"));

  //logout user from system
  const userLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setIsAuth(false);
  };

  //   CHECKING USER VALIDATION
  async function checkUser() {
    setLoading(true);
    const res = await fetch(API_ENDPOINTS.userValidate, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    });
    if (res.ok) {
      setIsAuth(true);
    } else {
      localStorage.removeItem("token");
      setToken(null);
      setIsAuth(false);
    }
    setLoading(false);
  }

  //LOGIN USER
  async function userLogin({ username, password }) {
    setLoading(true);

    const res = await fetch(API_ENDPOINTS.userLogin, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    });

    if (res.ok) {
      const json = await res.json();
      localStorage.setItem("token", json.token);
      localStorage.setItem("user", json.user_email);

      setIsAuth(true);
    } else {
      userLogout();
    }

    setLoading(false);
  }

  //   function userLogin({ username, password }) {
  //     const api = API_ENDPOINTS.userLogin;

  //     useEffect(() => {
  //       useFetch({
  //         username,
  //         password,
  //         api
  //       });
  //     });
  //   }

  return (
    <UserContext.Provider
      value={{
        token,
        setToken,
        isAuth,
        setIsAuth,
        loading,
        setLoading,
        user,
        setUser,
        checkUser,
        userLogin,
        userLogout
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
export { UserProvider };
