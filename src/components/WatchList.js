import React, { useState } from "react";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/data";
import { BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHorizRounded } from "@mui/icons-material";



function WatchList() {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:HBL, MCB, KSE, weekly, gold mcx"
          className="search"
        />
        <span className="counts">{watchlist.length} / 50</span>
      </div>
      <ul className="list">
        {watchlist.map((stock, index) => {
          return(
          <WatchListItem stock={stock} key={index} />)
        })}
      </ul>
    </div>
  );
}

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [ShowWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = (e) => {
    setShowWatchlistActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (<KeyboardArrowUp className="up" />)}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {ShowWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

 
const WatchListActions = ({uid}) => {
  return (
    <span className="actions">
      <span>
        <Tooltip title="Buy (B)" placement="top" TransitionComponent={Grow} arrow>
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip title="Sell (S)" placement="top" TransitionComponent={Grow} arrow>
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip title="Analytics (A)" placement="top" TransitionComponent={Grow} arrow>
          <button className="action"><BarChartOutlined className="icon"/></button>
        </Tooltip>
        <Tooltip title="More" placement="top" TransitionComponent={Grow} arrow>
          <button className="action">
            <MoreHorizRounded className="icon"/>
          </button>
        </Tooltip>
      </span>
    </span>
  );
}