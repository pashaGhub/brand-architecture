import React from "react";
import "./index.scss";

import Header from "./Header";
import Nav from "./Nav";
import Main from "./MainBoard";
import Footer from "./Footer";
import Popup from "../../components/Popup";

function Layout() {
  return (
    <React.Fragment>
      <Popup />
      <div className="Layout">
        <Header />
        <Nav />
        <Main />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Layout;
