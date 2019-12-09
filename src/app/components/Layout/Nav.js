import React, { useContext } from "react";
import { Link } from "react-scroll";
import { MainContext } from "../../../context";

function Nav() {
  const { main, mobileNav, toggleMobileNav, topic } = useContext(MainContext);

  return (
    <nav className="Nav">
      <button className="Mobile-menu" onClick={() => toggleMobileNav()}>
        {`${mobileNav.currentSection} - ${topic}`}
      </button>
      <div
        className={
          mobileNav.show
            ? "Nav-links Nav-links-show"
            : "Nav-links Nav-links-hide"
        }
      >
        {main.map(data => (
          <div key={data.id}>
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
            >
              {data.sectionTitle}
            </Link>
            <ul>
              {data.topics.map(item => (
                <li key={item.topicID}>
                  <Link
                    className="Topic"
                    activeClass="Topic-active"
                    to={`${data.id}-${item.topicID}`}
                    spy={true}
                    hashSpy={true}
                    smooth={true}
                    offset={-50}
                    duration={1000}
                    delay={100}
                  >
                    {item.topicTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
