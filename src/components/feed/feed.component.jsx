import React, { useState, useEffect } from "react";

import db from "../../firebase/firebase";

import StoryReel from "../story-reel/story-reel.component";
import MessageSender from "../message-sender/message-sender.component";
import Post from "../post/post.component";

import "./feed.style.css";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  return (
    <div className="feed">
      <StoryReel />

      <MessageSender />

      {posts.map(
        ({ id, data: { profilePic, message, timestamp, username, image } }) => (
          <Post
            key={id}
            profilePic={profilePic}
            message={message}
            timestamp={timestamp}
            username={username}
            image={image}
          />
        )
      )}
    </div>
  );
}

export default Feed;
