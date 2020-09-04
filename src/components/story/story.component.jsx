import React from "react";

import { Avatar } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

import "./story.style.css";

function Story({ id, image, profileSrc, title, setStoryMode }) {
  return (
    <div
      className="story"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <Avatar src={profileSrc} className="story__avatar" />
      <h4>{title}</h4>

      <div className="story__playButton" onClick={() => setStoryMode(id)}>
        <PlayArrowIcon />
      </div>
    </div>
  );
}

export default Story;
