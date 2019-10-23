import React from "react";
import "./index.scss";

function VideoBox({ videoSrc }) {
  return (
    <div className="Video">
      <iframe
        title="video"
        src={videoSrc}
        frameborder="0"
        allowFullScreen="true"
      ></iframe>
    </div>
  );
}

export default VideoBox;
