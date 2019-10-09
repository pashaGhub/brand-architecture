import React from "react";
import "./index.scss";

function Stretch({ image, alt, imgText }) {
  return (
    <div className="Box-item">
      <img src={image} alt={alt} />
      <div className="Img-text">{imgText}</div>
    </div>
  );
}

export default Stretch;
