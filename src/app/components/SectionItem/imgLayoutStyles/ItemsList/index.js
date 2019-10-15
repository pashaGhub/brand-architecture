import React from "react";
import classes from "classnames";
import "./index.scss";

function ItemsList({ image, alt, subtitle, imgText, index, quantity }) {
  const className = classes("Box-item", {
    "Margin-bot": index < quantity - 1
  });

  return (
    <div className={className}>
      <div className="Img-container">
        <img src={image} alt={alt} />
      </div>

      <div className="Img-text">
        <h3>{subtitle}</h3>
        <p>{imgText}</p>
      </div>
    </div>
  );
}

export default ItemsList;
