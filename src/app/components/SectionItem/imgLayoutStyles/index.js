import React from "react";

import "./index.scss";
import Stretch from "./Stretch";
import Window from "./Window";
import Rail from "./Rail";
import ItemsList from "./ItemsList";
import VideoBox from "./VideoBox";

function LayoutStyle({ layout, topicImgs, topicVideo }) {
  if (topicImgs) {
    const numOfImg = topicImgs.length;

    switch (layout) {
      case "window":
        return (
          <div className="Section-box Window">
            {topicImgs.map((data, ind) => (
              <Window {...data} key={ind} index={ind} quantity={numOfImg} />
            ))}
          </div>
        );
      case "stretch":
        return (
          <div className="Section-box Stretch">
            {topicImgs.map((data, ind) => (
              <Stretch {...data} key={ind} />
            ))}
          </div>
        );
      case "rail":
        return (
          <div className="Section-box Rail">
            {topicImgs.map((data, ind) => (
              <Rail {...data} key={ind} index={ind} quantity={numOfImg} />
            ))}
          </div>
        );
      case "itemsList":
        return (
          <div className="Section-box Items-list">
            {topicImgs.map((data, ind) => (
              <ItemsList {...data} key={ind} index={ind} quantity={numOfImg} />
            ))}
          </div>
        );
      default:
        return (
          <div className="Section-box Stretch">
            {topicImgs.map((data, ind) => (
              <Stretch {...data} key={ind} />
            ))}
          </div>
        );
    }
  }

  return <VideoBox videoSrc={topicVideo} />;
}

export default LayoutStyle;
