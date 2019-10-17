import React, { useContext } from "react";
import { Link } from "react-scroll";
import { MainContext } from "../../../context";

function Nav() {
  const { main, mobileNav, toggleMobileNav } = useContext(MainContext);

  return (
    <nav className="Nav">
      <button className="Mobile-menu" onClick={() => toggleMobileNav()}>
        {mobileNav.currentSection}
      </button>
      <div className={mobileNav.show ? "Nav-links-active" : "Nav-links"}>
        {main.map(data => (
          <Link
            className="Nav-item"
            activeClass="active"
            to={data.id}
            hashSpy={true}
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            delay={100}
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
