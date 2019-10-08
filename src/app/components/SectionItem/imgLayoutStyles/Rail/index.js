import React from "react";
import "./index.scss";

function Rail() {
  const logo =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKVCjH6E6T9kLUqRgOnWIA8NDfCKsYqvAasEb61TFRzuWy2CTv9w&s";
  return (
    <div className="Rail-box">
      <div className="Box-item">
        <img src={logo} alt="passion" />
        <div className="Img-text">About photo</div>
      </div>
      <div className="Box-item">
        <img src={logo} alt="small" />
        <div className="Img-text">About photo</div>
      </div>
      <div className="Box-item">
        <img src={logo} alt="small" />
        <div className="Img-text">About photo</div>
      </div>
      <div className="Box-item">
        <img src={logo} alt="small" />
        <div className="Img-text">
          Aligning partnership logos should follow clear space rules. The
          separating line between logos can be created either by the vertical
          line glyph in the Uber Move Display Light at the same size as the
        </div>
      </div>
      <div className="Box-item">
        <img src={logo} alt="small" />
        <div className="Img-text">About photo</div>
      </div>
      <div className="Box-item">
        <img src={logo} alt="small" />
        <div className="Img-text">
          Aligning partnership logos should follow clear space rules. The
          separating line between logos can be created either by the vertical
          line glyph in the Uber Move Display Light at the same size as the
          logo.
        </div>
      </div>
    </div>
  );
}

export default Rail;
