import React, { useContext } from "react";

import SectionItem from "../SectionItem";
import { MainContext } from "../../../context";

function Main() {
  const { main } = useContext(MainContext);

  return (
    <main className="Main">
      {main.map(data => (
        <SectionItem {...data} key={data.id} />
      ))}
    </main>
  );
}

export default Main;
