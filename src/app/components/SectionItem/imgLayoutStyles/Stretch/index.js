import React from "react";
import "./index.scss";

import pht from "../../../../img/headerImg.jpg";
import small from "../../../../img/small.jpg";

function Stretch() {
  return (
    <div className="Stretch-box">
      <div className="Box-item">
        <img src={pht} alt="passion" />
        <div className="Img-text">About photo</div>
      </div>
      <div className="Box-item">
        <img src={small} alt="small" />
        <div className="Img-text">About photo</div>
      </div>
    </div>
  );
}

export default Stretch;
