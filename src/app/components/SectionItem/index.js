import React, { useRef, useEffect, useContext } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

import { MainContext } from "../../../context";

import LayoutStyle from "./imgLayoutStyles";

function SectionItem({ id, sectionTitle, topics }) {
  const { setCurrentSection, showPopup } = useContext(MainContext);
  const sectionRef = useRef();
  const topicRef = useRef();
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
        rootMargin: "0px 0px -90%"
      }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    if (topicRef.current) {
      observer.observe(topicRef.current);
    }
  }, [sectionRef, topicRef]);

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

      {topics.map(
        ({ topicID, layout, topicTitle, topicText, topicImgs, topicVideo }) => (
          <div id={`${id}-${topicID}`} ref={topicRef} key={`${id}-${topicID}`}>
            <div className="Topic-title">
              <div className="Title-text">
                {topicTitle}
                <CopyToClipboard
                  text={`${url}-${topicID}`}
                  onCopy={() => showPopup()}
                >
                  <button href={`#${id}-${topicID}`}>
                    <FontAwesomeIcon icon={faLink} />
                  </button>
                </CopyToClipboard>
              </div>

              <span className="Title-line"> </span>
            </div>
            <div className="Topic-text">
              <p>{topicText}</p>
            </div>
            <LayoutStyle
              layout={layout}
              topicImgs={topicImgs}
              topicVideo={topicVideo}
            />
          </div>
        )
      )}
    </div>
  );
}

export default SectionItem;
