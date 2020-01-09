import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";

// import { UserContext } from "../../../context";

function Header() {
  // const { userLogout } = useContext(UserContext);
  return (
    <React.Fragment>
      <header className="Header ">
        <div className="Header-logo">logo</div>
        {/* <div className="User-section">
          <button className="Log-out" onClick={() => userLogout()}>
            <FontAwesomeIcon icon={faDoorOpen} />
          </button>
        </div> */}
      </header>
    </React.Fragment>
  );
}

export default Header;
