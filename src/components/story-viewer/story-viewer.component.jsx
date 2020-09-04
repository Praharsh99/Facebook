import React, { useState, useEffect } from "react";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import CloseIcon from "@material-ui/icons/Close";
import { Avatar } from "@material-ui/core";

import "./story-viewer.style.css";

function StoryViewer({ story, setStoryMode }) {
  const [imageNumber, setImageNumber] = useState(0);
  const {
    data: { images, profileSrc, title },
  } = story;

  const handleLeft = () => {
    setImageNumber(imageNumber - 1);
  };

  const handleRight = () => {
    setImageNumber(imageNumber + 1);
  };

  useEffect(() => {
    return () => {
      setImageNumber(0);
    };
  }, []);

  return (
    <div className="storyViewer">
      <ChevronLeftIcon
        fontSize="large"
        className={`storyViewer__directionButton ${
          imageNumber === 0 ? "storyViewer__directionButton-hide" : null
        }`}
        onClick={handleLeft}
      />

      <div className="storyViewer__center">
        <div className="storyViewer__centerInfo">
          <Avatar src={profileSrc} />

          <h2>{title}</h2>
        </div>

        <div
          className="storyViewer__images"
          style={{ backgroundImage: `url(${images[imageNumber]})` }}
        ></div>
      </div>

      <ChevronRightIcon
        fontSize="large"
        className={`storyViewer__directionButton ${
          imageNumber < images.length - 1
            ? null
            : "storyViewer__directionButton-hide"
        }`}
        onClick={handleRight}
      />

      <CloseIcon
        className="storyViewer__closeButton"
        fontSize="large"
        onClick={() => setStoryMode(false)}
      />
    </div>
  );
}

export default StoryViewer;
