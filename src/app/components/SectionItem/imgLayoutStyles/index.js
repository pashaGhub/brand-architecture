import React from "react";

import "./index.scss";
import Stretch from "./Stretch";
import Window from "./Window";
import Rail from "./Rail";
import ItemsList from "./ItemsList";
import VideoBox from "./VideoBox";

function LayoutStyle({ layout, sectionImgs, sectionVideo }) {
  if (sectionImgs) {
    const numOfImg = sectionImgs.length;

    switch (layout) {
      case "window":
        return (
          <div className="Section-box Window">
            {sectionImgs.map((data, ind) => (
              <Window {...data} key={ind} index={ind} quantity={numOfImg} />
            ))}
          </div>
        );
      case "stretch":
        return (
          <div className="Section-box Stretch">
            {sectionImgs.map((data, ind) => (
              <Stretch {...data} key={ind} />
            ))}
          </div>
        );
      case "rail":
        return (
          <div className="Section-box Rail">
            {sectionImgs.map((data, ind) => (
              <Rail {...data} key={ind} index={ind} quantity={numOfImg} />
            ))}
          </div>
        );
      case "itemsList":
        return (
          <div className="Section-box Items-list">
            {sectionImgs.map((data, ind) => (
              <ItemsList {...data} key={ind} index={ind} quantity={numOfImg} />
            ))}
          </div>
        );
      default:
        return (
          <div className="Section-box Stretch">
            {sectionImgs.map((data, ind) => (
              <Stretch {...data} key={ind} />
            ))}
          </div>
        );
    }
  }

  return <VideoBox videoSrc={sectionVideo} />;
}

export default LayoutStyle;
