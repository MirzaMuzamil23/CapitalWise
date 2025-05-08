import React from "react";

import Menu from "./Menu";

function TopBar() {
  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">KSE 50</p>
          <p className="index-points">{100.2} </p>
          <p className="percent"> </p>
        </div>
        <div className="sensex">
          <p className="index">KSE 100</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>
      </div>
      <Menu />
    </div>
  );
}

export default TopBar;
