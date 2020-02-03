import React, { useRef, useEffect, useContext } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./index.scss";
import Stretch from "./Stretch";
import Window from "./Window";
import Rail from "./Rail";
import ItemsList from "./ItemsList";
import VideoBox from "./VideoBox";

import { MainContext } from "../../../../context";

function LayoutStyle({ layout, topicImgs, topicVideo }) {
  if (topicImgs) {
    const numOfImg = topicImgs.length;

    switch (layout) {
      case "window":
        return (
          <div className="Section-box Window">
            {topicImgs.map((data, ind) => (
              <Window {...data} key={ind} index={ind} quantity={numOfImg} />
            ))}
          </div>
        );
      case "stretch":
        return (
          <div className="Section-box Stretch">
            {topicImgs.map((data, ind) => (
              <Stretch {...data} key={ind} />
            ))}
          </div>
        );
      case "rail":
        return (
          <div className="Section-box Rail">
            {topicImgs.map((data, ind) => (
              <Rail {...data} key={ind} index={ind} quantity={numOfImg} />
            ))}
          </div>
        );
      case "itemsList":
        return (
          <div className="Section-box Items-list">
            {topicImgs.map((data, ind) => (
              <ItemsList {...data} key={ind} index={ind} quantity={numOfImg} />
            ))}
          </div>
        );
      default:
        return (
          <div className="Section-box Stretch">
            {topicImgs.map((data, ind) => (
              <Stretch {...data} key={ind} />
            ))}
          </div>
        );
    }
  }

  return <VideoBox videoSrc={topicVideo} />;
}

function ImgLayoutStyle({
  topicID,
  layout,
  topicTitle,
  topicText,
  topicImgs,
  topicVideo,
  id
}) {
  const { setCurrentTopic, showPopup } = useContext(MainContext);
  const topicRef = useRef();
  const url = `${window.location.origin}${window.location.pathname}#${id}`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCurrentTopic(topicTitle);
        }
      },
      {
        rootMargin: "0px 0px -90%"
      }
    );
    if (topicRef.current) {
      observer.observe(topicRef.current);
    }

    if (topicRef.current) {
      observer.observe(topicRef.current);
    }
  }, [topicRef]);

  return (
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
  );
}

export default ImgLayoutStyle;
