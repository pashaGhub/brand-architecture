import React, { useRef, useEffect, useContext } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

import { MainContext } from "../../../context";

// import LayoutStyle from "./imgLayoutStyles";

import ImgLayoutStyle from "./imgLayoutStyles";

function SectionItem({ id, sectionTitle, topics }) {
  const { setCurrentSection, showPopup } = useContext(MainContext);
  const sectionRef = useRef();
  const url = `${window.location.origin}${window.location.pathname}#${id}`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCurrentSection(sectionTitle);
        }
      },
      {
        rootMargin: "0px 0px -90%"
      }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, [sectionRef, sectionTitle]);

  return (
    <div className="Section-item" id={id} ref={sectionRef}>
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

      {topics.map(data => (
        <ImgLayoutStyle {...data} id={id} key={data.topicID} />
      ))}
    </div>
  );
}

export default SectionItem;
