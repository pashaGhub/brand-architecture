import React from "react";
import "./index.scss";

import Stretch from "./imgLayoutStyles/Stretch";
import Window from "./imgLayoutStyles/Window";
import Rail from "./imgLayoutStyles/Rail";

function SectionItem({ title, layout }) {
  console.log(layout);

  function LayoutStyle() {
    switch (layout) {
      case "window":
        return <Window />;
      case "stretch":
        return <Stretch />;
      case "rail":
        return <Rail />;
      default:
        return <Stretch />;
    }
  }

  return (
    <div className="Section-item">
      <div className="Item-title">{title}</div>
      <div className="Item-text">
        Aligning partnership logos should follow clear space rules. The
        separating line between logos can be created either by the vertical line
        glyph in the Uber Move Display Light at the same size as the logo.
      </div>
      <LayoutStyle />
    </div>
  );
}

export default SectionItem;
