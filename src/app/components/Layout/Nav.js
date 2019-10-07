import React from "react";

import { Link } from "react-scroll";

function Nav() {
  return (
    <nav className="Nav">
      <Link
        className="Nav-item"
        activeClass="active"
        to="firstItem"
        spy={true}
        smooth={true}
        offset={0}
        duration={0}
      >
        first
      </Link>

      <Link
        className="Nav-item"
        activeClass="active"
        to="secondItem"
        spy={true}
        smooth={true}
        offset={0}
        duration={0}
      >
        second
      </Link>
      <Link
        className="Nav-item"
        activeClass="active"
        to="thirdItem"
        spy={true}
        smooth={true}
        offset={0}
        duration={0}
      >
        third
      </Link>

      <Link
        className="Nav-item"
        activeClass="active"
        to="fourthItem"
        spy={true}
        smooth={true}
        offset={0}
        duration={0}
      >
        fourth
      </Link>
    </nav>
  );
}

export default Nav;
