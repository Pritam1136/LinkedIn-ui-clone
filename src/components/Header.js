/* eslint-disable react/jsx-no-undef */
import React from "react";
import "./Header.css";
import { Search } from "@mui/icons-material";
import HeaderOPtion from "./HeaderOPtion";
import { Home } from "@mui/icons-material";
import { SupervisorAccount } from "@mui/icons-material";
import { BusinessCenter } from "@mui/icons-material";
import { Chat } from "@mui/icons-material";
import { Notifications } from "@mui/icons-material";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt="linkedin"
        />

        <div className="header_search">
          <Search />
          <input type="text" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOPtion Icon={Home} title={"Home"} />
        <HeaderOPtion Icon={SupervisorAccount} title={"My network"} />
        <HeaderOPtion Icon={BusinessCenter} title={"Jobs"} />
        <HeaderOPtion Icon={Chat} title={"Messaging"} />
        <HeaderOPtion Icon={Notifications} title={"Notification"} />
        <HeaderOPtion
          avatar="https://pritam1136.github.io/LandingPage/assets/profile-photo.jpg"
          title={"Me"}
        />
      </div>
    </div>
  );
}

export default Header;
