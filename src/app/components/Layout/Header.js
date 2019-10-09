import React from "react";
import Headroom from "react-headroom";

function Header() {
  return (
    <React.Fragment>
      <Headroom className="Header Mobile-header">
        <header className="Header">
          <div className="Header-logo">logo</div>
        </header>
      </Headroom>
      <header className="Header Computer-header">
        <div className="Header-logo">logo</div>
      </header>
    </React.Fragment>
  );
}

export default Header;
