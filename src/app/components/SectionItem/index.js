import React, { useRef, useEffect, useContext } from "react";
import { Route } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

import { MainContext } from "../../../context";

import LayoutStyle from "./imgLayoutStyles";

function SectionItem({
  id,
  layout,
  sectionTitle,
  sectionText,
  sectionImgs,
  sectionVideo
}) {
  const { setCurrentSection } = useContext(MainContext);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(entry);

        if (entry.isIntersecting) {
          setCurrentSection(sectionTitle);
        }
      },
      {
        root: null,
        rootMargin: "-100px",
        threshold: 0.1
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref]);

  return (
    <div className="Section-item" id={id} ref={ref}>
      <div className="Section-title">
        {sectionTitle}{" "}
        <a href={`#${id}`}>
          <FontAwesomeIcon icon={faLink} />
        </a>
      </div>

      <div className="Section-text">
        <p>{sectionText}</p>
      </div>
      <LayoutStyle
        layout={layout}
        sectionImgs={sectionImgs}
        sectionVideo={sectionVideo}
      />
    </div>
  );
}

export default SectionItem;
