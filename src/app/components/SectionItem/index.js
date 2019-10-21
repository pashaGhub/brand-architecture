import React, { useRef, useEffect, useContext } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

import { MainContext } from "../../../context";

import LayoutStyle from "./imgLayoutStyles";

function SectionItem({ id, sectionTitle, topics }) {
  const { setCurrentSection, showPopup } = useContext(MainContext);
  const ref = useRef();
  const url = `${window.location.origin}/#${id}`;
  const currentHash = `#${id}`;

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

      {topics.map(
        ({ topicID, layout, topicTitle, topicText, topicImgs, topicVideo }) => (
          <React.Fragment>
            <div className="Topic-title" id={`${id}-${topicID}`}>
              <span>
                {topicTitle}
                <CopyToClipboard
                  text={`${url}-${topicID}`}
                  onCopy={() => showPopup()}
                >
                  <button href={`#${id}-${topicID}`}>
                    <FontAwesomeIcon icon={faLink} />
                  </button>
                </CopyToClipboard>
              </span>
            </div>
            <div className="Topic-text">
              <p>{topicText}</p>
            </div>
            <LayoutStyle
              layout={layout}
              sectionImgs={topicImgs}
              sectionVideo={topicVideo}
            />
          </React.Fragment>
        )
      )}
    </div>
  );
}

export default SectionItem;
