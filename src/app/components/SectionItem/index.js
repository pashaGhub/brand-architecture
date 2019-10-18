import React, { useRef, useEffect, useContext } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

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
  const { setCurrentSection, showPopup } = useContext(MainContext);
  const ref = useRef();
  const url = `${window.location.origin}/#${id}`;

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
        rootMargin: "0px",
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
        <span>{sectionTitle}</span>
        <span>
          <CopyToClipboard text={url} onCopy={() => showPopup()}>
            <button href={`#${id}`}>
              <FontAwesomeIcon icon={faLink} />
            </button>
          </CopyToClipboard>
        </span>
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
