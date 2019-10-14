import React from "react";

import Stretch from "./Stretch";
import Window from "./Window";
import Rail from "./Rail";

function LayoutStyle({ layout, sectionImgs }) {
  const numOfImg = sectionImgs.length;

  switch (layout) {
    case "window":
      return (
        <div className="Window-box">
          {sectionImgs.map((data, ind) => (
            <Window {...data} key={ind} index={ind} quantity={numOfImg} />
          ))}
        </div>
      );
    case "stretch":
      return (
        <div className="Stretch-box">
          {sectionImgs.map((data, ind) => (
            <Stretch {...data} key={ind} />
          ))}
        </div>
      );
    case "rail":
      return (
        <div className="Rail-box">
          {sectionImgs.map((data, ind) => (
            <Rail {...data} key={ind} index={ind} quantity={numOfImg} />
          ))}
        </div>
      );
    default:
      return (
        <div className="Stretch-box">
          {sectionImgs.map((data, ind) => (
            <Stretch {...data} key={ind} />
          ))}
        </div>
      );
  }
}

export default LayoutStyle;
