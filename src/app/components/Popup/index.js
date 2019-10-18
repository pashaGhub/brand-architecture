import React, { useContext } from "react";
import classes from "classnames";
import "./index.scss";

import { MainContext } from "../../../context";

function Popup() {
  const { popup } = useContext(MainContext);

  const className = classes("Popup", {
    show: popup === "show",
    hide: popup === "hide"
  });
  console.log(popup);

  return (
    <div className={className}>
      <div className="PopupText">✔ Link copied to clipboard</div>
    </div>
  );
}

export default Popup;
