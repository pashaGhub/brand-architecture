import React, { useContext } from "react";
import classes from "classnames";

import { Link } from "react-scroll";
import { MainContext } from "../../../context";

function Nav() {
  const { main, mobileNav, toggleMobileNav } = useContext(MainContext);

  return (
    <nav className="Nav">
      <button className="Mobile-menu" onClick={() => toggleMobileNav()}>
        menu
      </button>
      <div className={mobileNav ? "Nav-links-active" : "Nav-links"}>
        {main.map(data => (
          <Link
            className="Nav-item"
            activeClass="active"
            to={data.id}
            spy={true}
            smooth={true}
            offset={-50}
            duration={0}
            key={data.id}
          >
            {data.sectionTitle}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
