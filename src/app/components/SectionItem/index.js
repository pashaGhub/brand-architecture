import React from "react";
import "./index.scss";

import pht from "../../img/headerImg.jpg";
import pht2 from "../../img/option2.jpg";
import small from "../../img/small.jpg";

function SectionItem({ title }) {
  return (
    <div className="Section-item">
      <div className="Item-title">{title}</div>
      <div className="Item-text">
        Aligning partnership logos should follow clear space rules. The
        separating line between logos can be created either by the vertical line
        glyph in the Uber Move Display Light at the same size as the logo.
      </div>
      <div className="Item-img">
        <div className="Img-text">About photo</div>
        <img src={pht} alt="passion" />
        <img src={pht2} alt="color" />
        <img src={small} alt="small" />
        <img src={small} alt="small" />
        <img src={small} alt="small" />
      </div>
    </div>
  );
}

export default SectionItem;
