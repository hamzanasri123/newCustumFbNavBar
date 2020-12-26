import { EmojiFlagsIcon } from "@material-ui/icons/EmojiFlags";
import React from "react";
import "./SideBar.css";
import SideBarRow from "./SideBarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import { ExpandMoreOutlined } from "@material-ui/icons";
export default function SideBar() {
  return (
    <div className="sideBar">
      <SideBarRow src="" title="Hamza Nasri" />
      <SideBarRow
        Icon={LocalHospitalIcon}
        title="Covid-19 Information Center"
      />
      <SideBarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SideBarRow Icon={PeopleIcon} title="Friends" />
      <SideBarRow Icon={ChatIcon} title="Messenger" />
      <SideBarRow Icon={StorefrontIcon} title="MarketPlace" />
      <SideBarRow Icon={VideoLibraryIcon} title="Videos" />
      <SideBarRow Icon={ExpandMoreOutlined} title="MarketPlace" />
    </div>
  );
}
