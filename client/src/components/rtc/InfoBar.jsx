import React from "react";
import onlineIcon from "../img/onlineIcon.png";

import { Link } from "react-router-dom";

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online" />
      <h3>{room} Room</h3>
    </div>
    <div className="rightInnerContainer">
      <Link className="leaveRoom" to="/">
        Leave Room
      </Link>
    </div>
  </div>
);

export default InfoBar;
