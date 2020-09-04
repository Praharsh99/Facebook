import React, { useState, useEffect } from "react";

import db from "../../firebase/firebase";

import Story from "../story/story.component";
import StoryViewer from "../story-viewer/story-viewer.component";

import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";

import "./story-reel.style.css";

function StoryReel() {
  const [stories, setStories] = useState([]);
  const [storyMode, setStoryMode] = useState(false);

  useEffect(() => {
    db.collection("stories")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setStories(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  return (
    <div className="storyReel">
      {stories.map(({ id, data: { profileSrc, images, title } }) => (
        <Story
          key={id}
          id={id}
          profileSrc={profileSrc}
          image={images[0]}
          title={title}
          setStoryMode={setStoryMode}
        />
      ))}

      <AddAPhotoIcon className="storyReel__addStory" />

      {storyMode && (
        <StoryViewer
          story={stories.find((story) => story.id === storyMode)}
          setStoryMode={setStoryMode}
        />
      )}
    </div>
  );
}

export default StoryReel;
