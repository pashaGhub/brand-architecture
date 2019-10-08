import React from "react";
import "./index.scss";

import pht from "../../../../img/headerImg.jpg";
import pht2 from "../../../../img/option2.jpg";
import small from "../../../../img/small.jpg";

function Window() {
  return (
    <div className="Window-box">
      <div className="Box-item">
        <img src={pht} alt="passion" />
        <div className="Img-text">
          Aligning partnership logos should follow clear space rules. The
          separating line between logos can be created either by the vertical
          line glyph in the Uber Move Display Light at the same size as the
          logo.
        </div>
      </div>
      <div className="Box-item">
        <img src={pht2} alt="color" />
        <div className="Img-text">About photo</div>
      </div>
      <div className="Box-item">
        <img src={small} alt="small" />
        <div className="Img-text">About photo</div>
      </div>
      <div className="Box-item">
        <img src={small} alt="small" />
        <div className="Img-text">About photo</div>
      </div>
    </div>
  );
}

export default Window;
