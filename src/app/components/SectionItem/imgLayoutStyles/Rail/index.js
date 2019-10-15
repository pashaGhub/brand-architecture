import React from "react";
import classes from "classnames";
import "./index.scss";

function Rail({ image, alt, imgText, index, quantity }) {
  const className = classes("Box-item", {
    "Margin-bot-lg-scr":
      (quantity % 3 === 0 && quantity > 3 && index < quantity - 3) ||
      (quantity % 3 === 1 && quantity > 3 && index < quantity - 1) ||
      (quantity % 3 === 2 && quantity > 3 && index < quantity - 2),
    "Margin-bot-med-scr":
      (quantity % 2 === 0 && quantity > 2 && index < quantity - 2) ||
      (quantity % 2 === 1 && quantity > 2 && index <= quantity - 2)
  });

  return (
    <div className={className}>
      <img src={image} alt={alt} />
      <p className="Img-text">{imgText}</p>
    </div>
  );
}

export default Rail;
