import React from "react";
import "./index.scss";

function Stretch({ image, alt, imgText }) {
  return (
    <div className="Box-item">
      <img src={image} alt={alt} />
      <p className="Img-text">{imgText}</p>
    </div>
  );
}

export default Stretch;
