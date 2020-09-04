import React, { useState } from "react";
import { connect } from "react-redux";

import db from "../../firebase/firebase";
import firebase from "firebase";

import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { Avatar } from "@material-ui/core";

import { selectCurrentUser } from "../../redux/user/user.selectors";

import "./message-sender.style.css";

const MessageSender = ({ currentUser }) => {
  const [input, setInput] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const { displayName, photoURL } = currentUser;

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim().length > 0 || inputUrl.trim().length > 0) {
      db.collection("posts").add({
        message: input.trim(),
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        profilePic: photoURL,
        username: displayName,
        image: inputUrl,
      });
    }

    setInput("");
    setInputUrl("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={photoURL} />

        <form onSubmit={handleSubmit}>
          <input
            placeholder={`What's on your mind, ${displayName}?`}
            className="messageSender__input"
            value={input}
            onChange={handleChange}
          />
          <input
            placeholder="image Url (Optional)"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
          />
          <button type="submit" hidden>
            Hidden Submit
          </button>
        </form>
      </div>

      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

export default connect(mapStateToProps)(MessageSender);
