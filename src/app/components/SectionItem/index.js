import React from "react";
import "./index.scss";

import Stretch from "./imgLayoutStyles/Stretch";
import Window from "./imgLayoutStyles/Window";
import Rail from "./imgLayoutStyles/Rail";

function SectionItem({ id, layout, sectionTitle, sectionText, sectionImgs }) {
  function LayoutStyle() {
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

  return (
    <div className="Section-item" id={id}>
      <div className="Item-title">{sectionTitle}</div>
      <div className="Item-text">{sectionText}</div>
      <LayoutStyle />
    </div>
  );
}

export default SectionItem;
