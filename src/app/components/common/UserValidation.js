import React, { useContext, useEffect } from "react";

import { UserContext } from "../../../context";

//is user authorized
function UserValidation({ children }) {
  const { checkUser, loading } = useContext(UserContext);
  useEffect(() => {
    checkUser();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  } else {
    return <React.Fragment>{children}</React.Fragment>;
  }
}

export default UserValidation;
