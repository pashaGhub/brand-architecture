import React from "react";
import "./index.scss";

import Header from "./Header";
import Nav from "./Nav";
import Main from "./MainBoard";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="Layout">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default Layout;
