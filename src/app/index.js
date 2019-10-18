import React from "react";

import Layout from "./components/Layout";
import { MainProvider } from "../context";
import Popup from "./components/Popup";

function App() {
  return (
    <MainProvider>
      <Popup />
      <Layout />
    </MainProvider>
  );
}

export default App;
