import React, { useContext } from "react";
import "./index.scss";

import Loader from "./Loader";
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
        {loader && (
          <div className="Centralized">
            <Loader />
          </div>
        )}
        {!loader && !error.err && (
          <React.Fragment>
            <Nav />
            <Main />
          </React.Fragment>
        )}
        {!loader && error.err && (
          <div className="Centralized">
            <h4>{error.message}</h4>
          </div>
        )}

        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Layout;
