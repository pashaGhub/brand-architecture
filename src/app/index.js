import React from "react";

import Layout from "./components/Layout";
import { MainProvider } from "../context";

function App() {
  return (
    <MainProvider>
      <Layout />
    </MainProvider>
  );
}

export default App;
