import React from "react";

import SectionItem from "../SectionItem";

function Main() {
  return (
    <main className="Main">
      <div className="Section" id="firstItem">
        <SectionItem title="First Section" layout="window" />
      </div>

      <div className="Section" id="secondItem">
        <SectionItem title="Second Section" layout="stretch" />
      </div>
      <div className="Section" id="thirdItem">
        <SectionItem title="Third Section" layout="rail" />
      </div>
      <div className="Section" id="fourthItem">
        <SectionItem title="Fourth Section" />
      </div>
    </main>
  );
}

export default Main;
