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
      <div
        className={
          mobileNav.show
            ? "Nav-links Nav-links-show"
            : "Nav-links Nav-links-hide"
        }
      >
        {main.map(data => (
          <div>
            <Link
              className="Nav-link"
              activeClass="Section-active"
              to={data.id}
              hashSpy={true}
              spy={true}
              smooth={true}
              offset={-50}
              duration={1000}
              delay={100}
              key={data.id}
            >
              {data.sectionTitle}
            </Link>
            <ul>
              {data.topics.map(item => (
                <li>{item.topicTitle}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
