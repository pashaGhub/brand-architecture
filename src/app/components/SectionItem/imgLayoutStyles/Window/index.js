import React from "react";
import classes from "classnames";
import "./index.scss";

function Window({ image, alt, imgText, index, quantity }) {
  const className = classes("Box-item", {
    "Margin-bot":
      (quantity % 2 === 0 && quantity > 2 && index < quantity - 2) ||
      (quantity % 2 === 1 && quantity > 2 && index <= quantity - 2)
  });

  return (
    <div className={className}>
      <img src={image} alt={alt} />
      <div className="Img-text">{imgText}</div>
    </div>
  );
}

export default Window;
