import React, { useContext } from "react";

import SectionItem from "../SectionItem";
import { MainContext } from "../../../context";

function Main() {
  const { main } = useContext(MainContext);

  return (
    <main className="Main">
      {main.map(data => {
        return (
          <React.Fragment key={data.id}>
            <SectionItem {...data} />
          </React.Fragment>
        );
      })}
    </main>
  );
}

export default Main;
