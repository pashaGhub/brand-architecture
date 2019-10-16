import React from "react";
import "./index.scss";

function VideoBox({ videoSrc }) {
  return (
    <div className="Video">
      <iframe src={videoSrc} frameborder="0" allowfullscreen="true"></iframe>
    </div>
  );
}

export default VideoBox;
