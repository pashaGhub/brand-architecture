import React, { useContext } from "react";

import { Link } from "react-scroll";
import { MainContext } from "../../../context";

function Nav() {
  const { main } = useContext(MainContext);
  console.log(main);

  return (
    <nav className="Nav">
      {main.map(data => (
        <Link
          className="Nav-item"
          activeClass="active"
          to={data.id}
          spy={true}
          smooth={true}
          offset={0}
          duration={0}
          key={data.id}
        >
          {data.sectionTitle}
        </Link>
      ))}
    </nav>
  );
}

export default Nav;
