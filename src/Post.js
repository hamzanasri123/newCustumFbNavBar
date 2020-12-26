import React, { useState } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
function Post() {
  const [postMessage, setPost] = useState("");
  const [urlImage, setUrl] = useState("");
  const hundelSubmit = (e) => {
    e.preventDefault();

    setUrl("");
    setPost("");
  };
  return (
    <div className="Post">
      <div className="post-top">
        <Avatar />
        <form>
          <input
            value={postMessage}
            className="post-message"
            placeholder=" que pensez vous"
            onChange={(e) => setPost(e.target.value)}
          />
          <input
            value={urlImage}
            className=""
            placeholder="photo URL"
            onChange={(e) => setUrl(e.target.value)}
          />
          <button onClick={hundelSubmit}> Submit</button>
        </form>
      </div>
      <div className="post-bottom">
        <div className="post-option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Videos</h3>
        </div>
        <div className="post-option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photos</h3>
        </div>
        <div className="post-option">
          <InsertEmoticonIcon style={{ color: "purple" }} />
          <h3>Live Videos</h3>
        </div>
      </div>
    </div>
  );
}

export default Post;
