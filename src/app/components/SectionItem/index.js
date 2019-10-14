import React, { useRef, useEffect, useContext } from "react";
import "./index.scss";

import { MainContext } from "../../../context";

import LayoutStyle from "./imgLayoutStyles";

function SectionItem({ id, layout, sectionTitle, sectionText, sectionImgs }) {
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
      <div className="Item-title">{sectionTitle}</div>
      <div className="Item-text">{sectionText}</div>
      <LayoutStyle layout={layout} sectionImgs={sectionImgs} />
    </div>
  );
}

export default SectionItem;
