import React from "react";
import { Avatar } from "@material-ui/core";
import "./StoryCard.css";
function StoryCard({ image, name, profilPic }) {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="story-card">
      <Avatar className="story-avatar" src={profilPic} />
      <h4> {name}</h4>
    </div>
  );
}

export default StoryCard;
