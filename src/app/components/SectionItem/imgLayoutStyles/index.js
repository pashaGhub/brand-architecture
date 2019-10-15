import React from "react";

import "./mobileStyle.scss";
import Stretch from "./Stretch";
import Window from "./Window";
import Rail from "./Rail";
import ItemsList from "./ItemsList";

function LayoutStyle({ layout, sectionImgs }) {
  const numOfImg = sectionImgs.length;

  switch (layout) {
    case "window":
      return (
        <div className="Img-box Window">
          {sectionImgs.map((data, ind) => (
            <Window {...data} key={ind} index={ind} quantity={numOfImg} />
          ))}
        </div>
      );
    case "stretch":
      return (
        <div className="Img-box Stretch">
          {sectionImgs.map((data, ind) => (
            <Stretch {...data} key={ind} />
          ))}
        </div>
      );
    case "rail":
      return (
        <div className="Img-box Rail">
          {sectionImgs.map((data, ind) => (
            <Rail {...data} key={ind} index={ind} quantity={numOfImg} />
          ))}
        </div>
      );
    case "itemsList":
      return (
        <div className="Img-box Items-list">
          {sectionImgs.map((data, ind) => (
            <ItemsList {...data} key={ind} index={ind} quantity={numOfImg} />
          ))}
        </div>
      );
    default:
      return (
        <div className="Img-box Stretch">
          {sectionImgs.map((data, ind) => (
            <Stretch {...data} key={ind} />
          ))}
        </div>
      );
  }
}

export default LayoutStyle;
