import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="data:image/png;base64,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"
          alt=""
        />
        <div className="header_input">
          <SearchIcon />
          <input placeholder="Search " type="text" />
        </div>
      </div>
      <div className="header_middle">
        <div className="header_option header_option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header_option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header_option">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className="header_option">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div className="header_option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>
      <div className="header_right">
        <div className="header_info">
          <Avatar />
          <h4>hamzanasri</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
