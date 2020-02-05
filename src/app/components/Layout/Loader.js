import React from "react";
import LoaderDots from "react-loader-spinner";

const loaderProps = {
  type: "MutatingDots",
  color: "#333",
  height: "100",
  width: "100",
  position: "absolute"
};

function Loader() {
  return <LoaderDots {...loaderProps} />;
}

export default Loader;
