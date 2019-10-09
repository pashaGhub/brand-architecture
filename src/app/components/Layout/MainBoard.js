import React, { useContext } from "react";

import SectionItem from "../SectionItem";
import { MainContext } from "../../../context";

function Main() {
  const { main } = useContext(MainContext);

  return (
    <main className="Main">
      {main.map(data => (
        <div className="Section" id={data.id} key={data.id}>
          <SectionItem {...data} />
        </div>
      ))}
    </main>
  );
}

export default Main;
