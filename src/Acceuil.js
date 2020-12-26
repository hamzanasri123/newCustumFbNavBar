import React from "react";
import "./Acceuil.css";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NearMrIcon from "@material-ui/icons/NearMe";
import { ExpandMoreOutlined } from "@material-ui/icons";
function Acceuil({ profilPic, image, username, timestamp, message }) {
  return (
    <div className="Acceuil">
      <div className="acceuil-top">
        <Avatar src={profilPic} className="acc-avatar" />
        <div className="acc-top-info">
          <h3>{username}</h3>
          {/*  <p> {message} </p> */}
          <p>time</p>
          <p> {timestamp} </p>
        </div>
        <div className="acceuil-buttom">
          <p> {message} </p>
        </div>
        <div className="aceuil-image">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="acceuil-option">
        <div className="acceuil-opt">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="acceuil-opt">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="acceuil-opt">
          <NearMrIcon />
          <p>Share</p>
        </div>
        <div className="acceuil-opt">
          <AccountCircleIcon />
          <ExpandMoreOutlined />
        </div>
      </div>
    </div>
  );
}

export default Acceuil;
