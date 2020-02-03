import React, { useContext } from "react";
import "./index.scss";

import Header from "./Header";
import Nav from "./Nav";
import Main from "./MainBoard";
import Footer from "./Footer";
import Popup from "../../components/Popup";

import { MainContext } from "../../../context";

function Layout() {
  const { error, loader } = useContext(MainContext);
  return (
    <React.Fragment>
      <Popup />
      <div className="Layout">
        <Header />
        {loader && <h5>loading...</h5>}
        {!loader && !error.err && (
          <React.Fragment>
            <Nav />
            <Main />
          </React.Fragment>
        )}
        {!loader && error.err && <h5>{error.message}</h5>}

        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Layout;
